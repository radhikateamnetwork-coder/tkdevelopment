import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"

const blogPosts = {
  "nextjs-vs-react-2024": {
    title: "Next.js vs React: Which Should You Choose in 2024?",
    excerpt:
      "A comprehensive comparison of Next.js and React to help you make the right choice for your next project.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    category: "Development",
    author: {
      name: "Tushar Kumar",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      role: "Lead Developer",
    },
    date: "2024-01-15",
    readTime: "8 min read",
    content: `
## Introduction
Choosing between Next.js and React for your next web project can be challenging. Both are powerful tools, but they serve different purposes.

## What is React?
React is a JavaScript library for building user interfaces. It focuses on the view layer.

## What is Next.js?
Next.js is a React framework that provides routing, SSR, SSG, ISR and more.

## Key Differences

### Routing
**React:** Needs React Router  
**Next.js:** File-based routing built in

### Rendering
**React:** Client-side by default  
**Next.js:** Supports SSR, SSG, ISR, CSR

### Performance
**React:** Depends on implementation  
**Next.js:** Optimized out of the box

### SEO
**React:** Harder for SEO  
**Next.js:** Excellent SEO support

## Conclusion
For most modern projects — **Next.js wins**.
`,
    tags: ["Next.js", "React", "JavaScript", "Web Development"],
  },

  "ecommerce-conversion-tips": {
    title: "10 E-commerce Conversion Tips That Actually Work",
    excerpt:
      "Proven strategies to increase your online store conversion rate and boost sales.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    category: "E-commerce",
    author: {
      name: "Priya Singh",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      role: "UI/UX Designer",
    },
    date: "2024-01-10",
    readTime: "6 min read",
    content: `
## Introduction
Converting visitors into customers is the holy grail of e-commerce.

## Tips
- Optimize product pages
- Simplify checkout
- Use high quality images
- Add trust signals
- Mobile optimization
- Social proof
- Create urgency
- Free shipping
- Abandoned cart emails
- A/B testing

## Conclusion
Conversion optimization is continuous.
`,
    tags: ["E-commerce", "Conversion", "Marketing", "UX"],
  },
}

/* ---------------- METADATA ---------------- */

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) return { title: "Not Found" }

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

/* ---------------- STATIC PARAMS ---------------- */

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

/* ---------------- PAGE ---------------- */

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) notFound()

  return (
    <div className="flex flex-col pt-20">

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>

        <div className="container-custom relative z-10 text-white">

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <span className="px-3 py-1 bg-primary rounded-full text-sm">
            {post.category}
          </span>

          <h1 className="text-4xl font-bold mt-4 mb-6 max-w-4xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6">

            {/* Author */}
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
                <div className="text-sm text-white/70">
                  {post.author.role}
                </div>
              </div>
            </div>

            {/* Date + time */}
            <div className="flex items-center gap-4 text-sm text-white/70">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>

              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="container-custom grid lg:grid-cols-4 gap-12">

          {/* ARTICLE */}
          <article className="lg:col-span-3 prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>

            {/* TAGS */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="sticky top-24">

              <div className="p-6 bg-muted rounded-xl">
                <h3 className="font-semibold mb-4">Share</h3>
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
                <h3 className="font-semibold mb-2">
                  Need help with your project?
                </h3>
                <p className="text-sm mb-4 text-muted-foreground">
                  Let's discuss how we can help build your idea.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>

            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
