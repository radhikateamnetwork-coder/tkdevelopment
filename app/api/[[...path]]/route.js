import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'

// MongoDB connection
let client
let db

async function connectToMongo() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    db = client.db(process.env.DB_NAME || 'tushar_website')
  }
  return db
}

// Helper function to handle CORS
function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// OPTIONS handler for CORS
export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }))
}

// Route handler function
async function handleRoute(request, { params }) {
  const { path = [] } = params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    const db = await connectToMongo()

    // Root endpoint
    if (route === '/' && method === 'GET') {
      return handleCORS(NextResponse.json({ message: 'Tushar Website API', version: '1.0.0' }))
    }

    // Health check
    if (route === '/health' && method === 'GET') {
      return handleCORS(NextResponse.json({ status: 'healthy', timestamp: new Date().toISOString() }))
    }

    // Contact form submission - POST /api/contact
    if (route === '/contact' && method === 'POST') {
      const body = await request.json()
      
      // Honeypot check (spam protection)
      if (body.website) {
        // If honeypot field is filled, it's likely a bot
        return handleCORS(NextResponse.json({ success: true, message: 'Thank you for your message!' }))
      }

      // Validate required fields
      const { name, email, subject, message, service, phone } = body
      
      if (!name || !email || !message) {
        return handleCORS(NextResponse.json(
          { error: 'Name, email, and message are required' },
          { status: 400 }
        ))
      }

      if (!isValidEmail(email)) {
        return handleCORS(NextResponse.json(
          { error: 'Please provide a valid email address' },
          { status: 400 }
        ))
      }

      // Create contact submission
      const contactSubmission = {
        id: uuidv4(),
        name: name.trim(),
        email: email.toLowerCase().trim(),
        phone: phone?.trim() || null,
        subject: subject?.trim() || 'General Inquiry',
        service: service || null,
        message: message.trim(),
        status: 'new',
        createdAt: new Date(),
        updatedAt: new Date()
      }

      // Store in MongoDB
      await db.collection('contacts').insertOne(contactSubmission)

      // TODO: Send email notification when SENDGRID_API_KEY is configured
      // if (process.env.SENDGRID_API_KEY) {
      //   await sendNotificationEmail(contactSubmission)
      // }

      return handleCORS(NextResponse.json({
        success: true,
        message: 'Thank you for your message! We will get back to you within 24 hours.',
        id: contactSubmission.id
      }))
    }

    // Get all contacts (admin) - GET /api/contact
    if (route === '/contact' && method === 'GET') {
      const contacts = await db.collection('contacts')
        .find({})
        .sort({ createdAt: -1 })
        .limit(100)
        .toArray()

      const cleanedContacts = contacts.map(({ _id, ...rest }) => rest)
      return handleCORS(NextResponse.json(cleanedContacts))
    }

    // Newsletter subscription - POST /api/newsletter
    if (route === '/newsletter' && method === 'POST') {
      const body = await request.json()
      const { email } = body

      if (!email || !isValidEmail(email)) {
        return handleCORS(NextResponse.json(
          { error: 'Please provide a valid email address' },
          { status: 400 }
        ))
      }

      // Check if already subscribed
      const existing = await db.collection('newsletter').findOne({ email: email.toLowerCase().trim() })
      if (existing) {
        return handleCORS(NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 400 }
        ))
      }

      // Create subscription
      const subscription = {
        id: uuidv4(),
        email: email.toLowerCase().trim(),
        status: 'active',
        subscribedAt: new Date()
      }

      await db.collection('newsletter').insertOne(subscription)

      return handleCORS(NextResponse.json({
        success: true,
        message: 'Successfully subscribed to our newsletter!'
      }))
    }

    // Get newsletter subscribers - GET /api/newsletter
    if (route === '/newsletter' && method === 'GET') {
      const subscribers = await db.collection('newsletter')
        .find({ status: 'active' })
        .sort({ subscribedAt: -1 })
        .toArray()

      const cleanedSubscribers = subscribers.map(({ _id, ...rest }) => rest)
      return handleCORS(NextResponse.json(cleanedSubscribers))
    }

    // Blog posts - GET /api/blog
    if (route === '/blog' && method === 'GET') {
      const posts = await db.collection('blog_posts')
        .find({ status: 'published' })
        .sort({ publishedAt: -1 })
        .toArray()

      const cleanedPosts = posts.map(({ _id, ...rest }) => rest)
      return handleCORS(NextResponse.json(cleanedPosts))
    }

    // Single blog post - GET /api/blog/:slug
    if (route.startsWith('/blog/') && method === 'GET') {
      const slug = path[1]
      const post = await db.collection('blog_posts').findOne({ slug, status: 'published' })

      if (!post) {
        return handleCORS(NextResponse.json(
          { error: 'Blog post not found' },
          { status: 404 }
        ))
      }

      const { _id, ...cleanedPost } = post
      return handleCORS(NextResponse.json(cleanedPost))
    }

    // Portfolio/Case studies - GET /api/portfolio
    if (route === '/portfolio' && method === 'GET') {
      const projects = await db.collection('portfolio')
        .find({ status: 'published' })
        .sort({ order: 1 })
        .toArray()

      const cleanedProjects = projects.map(({ _id, ...rest }) => rest)
      return handleCORS(NextResponse.json(cleanedProjects))
    }

    // Route not found
    return handleCORS(NextResponse.json(
      { error: `Route ${route} not found` },
      { status: 404 }
    ))

  } catch (error) {
    console.error('API Error:', error)
    return handleCORS(NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    ))
  }
}

// Export all HTTP methods
export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute