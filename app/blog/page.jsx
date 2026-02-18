import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Blog | Tushar - Web Design & Development',
  description: 'Insights, tutorials, and tips on web design, development, SEO, and digital marketing from the Tushar team.',
}

const blogPosts = [
  {
    slug: 'nextjs-vs-react-2024',
    title: 'Next.js vs React: Which Should You Choose in 2024?',
    excerpt: 'A comprehensive comparison of Next.js and React to help you make the right choice for your next project.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    category: 'Development',
    author: 'Tushar Kumar',
    date: '2024-01-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'ecommerce-conversion-tips',
    title: '10 E-commerce Conversion Tips That Actually Work',
    excerpt: 'Proven strategies to increase your online store conversion rate and boost sales.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    category: 'E-commerce',
    author: 'Priya Singh',
    date: '2024-01-10',
    readTime: '6 min read',
    featured: true,
  },
  {
    slug: 'seo-mistakes-to-avoid',
    title: 'Common SEO Mistakes That Are Killing Your Rankings',
    excerpt: 'Avoid these critical SEO mistakes that could be hurting your search engine visibility.',
    image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&q=80',
    category: 'SEO',
    author: 'Rahul Verma',
    date: '2024-01-05',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'ui-design-trends-2024',
    title: 'UI Design Trends to Watch in 2024',
    excerpt: 'The latest design trends shaping the future of user interfaces and digital experiences.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    category: 'Design',
    author: 'Priya Singh',
    date: '2024-01-01',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'website-speed-optimization',
    title: 'How to Optimize Your Website for Speed in 2024',
    excerpt: 'Practical tips to improve your website performance and Core Web Vitals scores.',
    image: 'https://images.unsplash.com/photo-1502810190503-8303352d0dd1?w=800&q=80',
    category: 'Development',
    author: 'Tushar Kumar',
    date: '2023-12-28',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'choosing-right-cms',
    title: 'Choosing the Right CMS for Your Business',
    excerpt: 'A guide to selecting the perfect content management system for your website.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    category: 'Development',
    author: 'Rahul Verma',
    date: '2023-12-20',
    readTime: '6 min read',
    featured: false,
  },
]

const categories = ['All', 'Development', 'Design', 'E-commerce', 'SEO']

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(p => p.featured)
  const recentPosts = blogPosts.filter(p => !p.featured)

  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6">Our <span className="text-primary">Blog</span></h1>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and tips on web design, development, and digital marketing.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24">
        <div className="container-custom">
          <h2 className="heading-2 mb-8">Featured Articles</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden group h-full">
                  <div className="aspect-video relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-2 mb-8">Recent Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden group h-full">
                  <div className="aspect-video relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                    <h3 className="font-semibold mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white">
            <h2 className="heading-2 mb-4">Stay Updated</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest insights and tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-white text-slate-900 hover:bg-slate-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}