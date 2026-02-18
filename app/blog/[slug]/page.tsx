import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const blogPosts = {
  'nextjs-vs-react-2024': {
    title: 'Next.js vs React: Which Should You Choose in 2024?',
    excerpt: 'A comprehensive comparison of Next.js and React to help you make the right choice for your next project.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
    category: 'Development',
    author: {
      name: 'Tushar Kumar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      role: 'Lead Developer',
    },
    date: '2024-01-15',
    readTime: '8 min read',
    content: `
## Introduction

Choosing between Next.js and React for your next web project can be challenging. Both are powerful tools, but they serve different purposes. In this article, we'll break down the key differences to help you make an informed decision.

## What is React?

React is a JavaScript library for building user interfaces. It's maintained by Meta (formerly Facebook) and a community of developers. React focuses on the view layer and gives you the freedom to choose your own tools for routing, state management, and other features.

## What is Next.js?

Next.js is a React framework that provides additional structure, features, and optimizations. Built by Vercel, it includes built-in routing, server-side rendering, static site generation, and more.

## Key Differences

### 1. Routing

**React**: Requires a third-party library like React Router for navigation between pages.

**Next.js**: Has a built-in file-based routing system. Simply create files in the \`pages\` or \`app\` directory, and they become routes automatically.

### 2. Rendering

**React**: Client-side rendering by default. The entire application is rendered in the browser.

**Next.js**: Supports multiple rendering strategies:
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Client-Side Rendering (CSR)

### 3. Performance

**React**: Performance depends on your implementation and the libraries you choose.

**Next.js**: Optimized out of the box with automatic code splitting, image optimization, and font optimization.

### 4. SEO

**React**: Can be challenging for SEO since content is rendered client-side.

**Next.js**: Excellent SEO support with server-side rendering and static generation.

## When to Choose React

- Building a single-page application (SPA)
- You need maximum flexibility in your tech stack
- The project doesn't require SEO optimization
- You're building an internal tool or dashboard

## When to Choose Next.js

- Building a public-facing website that needs SEO
- You want a full-stack solution with API routes
- Performance is a priority
- You want a faster development experience with less configuration

## Conclusion

For most modern web projects, especially those requiring SEO and performance, Next.js is the better choice. It provides everything React offers plus additional features that make development faster and applications better optimized.

If you're building a simple SPA or need maximum flexibility, pure React might be sufficient. But for professional projects, the benefits of Next.js far outweigh the learning curve.
      `,
    tags: ['Next.js', 'React', 'JavaScript', 'Web Development'],
  },
  'ecommerce-conversion-tips': {
    title: '10 E-commerce Conversion Tips That Actually Work',
    excerpt: 'Proven strategies to increase your online store conversion rate and boost sales.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    category: 'E-commerce',
    author: {
      name: 'Priya Singh',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      role: 'UI/UX Designer',
    },
    date: '2024-01-10',
    readTime: '6 min read',
    content: `
## Introduction

Converting visitors into customers is the holy grail of e-commerce. Here are 10 proven strategies that can significantly improve your conversion rates.

## 1. Optimize Your Product Pages

Your product pages are where decisions are made. Include:
- High-quality images from multiple angles
- Detailed product descriptions
- Clear pricing and availability
- Customer reviews and ratings

## 2. Simplify the Checkout Process

A complicated checkout is a conversion killer. Aim for:
- Guest checkout option
- Minimal form fields
- Progress indicators
- Multiple payment options

## 3. Use High-Quality Images

Images sell products online. Invest in:
- Professional photography
- Multiple angles and views
- Zoom functionality
- Lifestyle shots showing products in use

## 4. Implement Trust Signals

Build confidence with:
- SSL certificates (HTTPS)
- Payment security badges
- Customer testimonials
- Clear return policies

## 5. Mobile Optimization

With over 50% of e-commerce traffic coming from mobile:
- Ensure responsive design
- Optimize touch targets
- Simplify navigation
- Enable mobile payments

## 6. Leverage Social Proof

Show that others trust you:
- Display review counts
- Show real-time purchase notifications
- Feature user-generated content
- Include trust badges

## 7. Create Urgency

Ethically encourage action with:
- Limited-time offers
- Low stock indicators
- Countdown timers
- Seasonal promotions

## 8. Offer Free Shipping

Shipping costs are the #1 reason for cart abandonment. Consider:
- Free shipping thresholds
- Flat rate shipping
- Clear shipping information upfront

## 9. Implement Cart Abandonment Emails

Recover lost sales with:
- Timely reminder emails
- Product images in emails
- Easy return to cart links
- Special offers for completion

## 10. A/B Test Everything

Continuously improve by testing:
- Headlines and CTAs
- Button colors and sizes
- Page layouts
- Pricing strategies

## Conclusion

Improving e-commerce conversion is an ongoing process. Start with the strategies that align most with your current challenges and measure the results before moving to the next.
      `,
    tags: ['E-commerce', 'Conversion', 'Marketing', 'UX'],
  },
}

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug]
  if (!post) return { title: 'Blog Post Not Found' }
  
  return {
    title: `${post.title} | Tushar Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          
          <h1 className="heading-1 mb-6 max-w-4xl">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-white/70">{post.author.role}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-white/70">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/##/g, '<h2>').replace(/\*\*/g, '<strong>') }} className="whitespace-pre-line" />
              
              {/* Actually render markdown-like content */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-muted rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
            
            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="sticky top-24">
                <div className="p-6 bg-muted rounded-xl">
                  <h3 className="font-semibold mb-4">Share this article</h3>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 p-6 bg-primary/10 rounded-xl">
                  <h3 className="font-semibold mb-2">Need help with your project?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let's discuss how we can help bring your vision to life.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}