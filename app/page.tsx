import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Star, Users, Briefcase, Trophy, Palette, ShoppingCart, TrendingUp, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centric design that looks great and works perfectly. From wireframing to final polish.',
    href: '/services/ui-ux-design',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, fast, and scalable websites built with the latest technologies.',
    href: '/services/web-development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Scalable online stores that drive sales and revenue with seamless checkout.',
    href: '/services/ecommerce',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Growth',
    description: 'Rank higher and reach more customers organically with data-driven strategies.',
    href: '/services/seo-growth',
    image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=1200&q=80',
  },
]

const stats = [
  { icon: Briefcase, value: '50+', label: 'Projects Delivered' },
  { icon: Users, value: '40+', label: 'Happy Clients' },
  { icon: Trophy, value: '100%', label: 'Client Satisfaction' },
  { icon: Star, value: '5.0', label: 'Average Rating' },
]

const testimonials = [
  {
    name: 'Tushar',
    role: 'CEO, TechStart India',
    content: 'Tushar transformed our online presence completely. The website they built increased our leads by 300% in just 3 months.',
    avatar: '/Tushar.png',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, StyleBoutique',
    content: 'The e-commerce store they built is beautiful and converts amazingly well. Our sales doubled within the first quarter.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'Amit Patel',
    role: 'Marketing Director, GrowthCo',
    content: 'Their SEO expertise helped us rank #1 for our main keywords. Highly professional and results-driven team.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
]

const trustLogos = [
  { name: 'TechStart', initial: 'TS' },
  { name: 'GrowthCo', initial: 'GC' },
  { name: 'StyleBoutique', initial: 'SB' },
  { name: 'InnovateLabs', initial: 'IL' },
  { name: 'DigitalFirst', initial: 'DF' },
]

const featuredProject = {
  title: 'E-commerce Platform for StyleBoutique',
  description: 'A complete e-commerce solution with custom design, payment integration, and inventory management.',
  problem: 'StyleBoutique needed a modern online store to compete with larger retailers.',
  solution: 'We built a fast, mobile-first Next.js e-commerce platform with Shopify integration.',
  results: ['200% increase in online sales', '45% improvement in conversion rate', '3x faster page load times'],
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80',
  href: '/portfolio',
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
        <div className="container-custom relative z-10 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium w-max">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Available for new projects
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                Crafting Digital <span className="text-primary">Experiences</span>
                <br className="hidden sm:inline" /> That Convert
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                We build modern, fast, and SEO-optimized websites that help your business grow. Expert design and development services tailored to your needs.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/contact" aria-label="Get started — contact">
                    <span className="inline-flex items-center">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio" aria-label="View our work">View Our Work</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4 flex-wrap">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="text-center min-w-[96px]">
                    <div className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image (mobile-friendly sizing) */}
            <div className="w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-72 md:h-80 lg:h-[420px]">
                {/* decorative gradient layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10 transform rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 transform -rotate-6" />

                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80"
                  alt="Web development team working on a project"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-8 bg-muted/50">
        <div className="container-custom">
          <p className="text-center text-muted-foreground mb-6">Trusted by innovative companies</p>
          <div className="flex gap-6 items-center justify-center overflow-x-auto no-scrollbar py-2 px-2">
            {trustLogos.map((logo) => (
              <div key={logo.name} className="flex-shrink-0 w-16 h-16 bg-background rounded-xl shadow-sm flex items-center justify-center">
                <span className="text-lg font-bold text-muted-foreground">{logo.initial}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Comprehensive Web Solutions</h2>
            <p className="text-base text-muted-foreground">From concept to launch, we handle every aspect of your digital presence with expertise and care.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative w-full h-48 sm:h-40 md:h-44 lg:h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{service.description}</p>

                  <div className="mt-2">
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="w-full h-56 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 right-4 bg-primary text-white p-5 rounded-2xl shadow-xl hidden sm:flex flex-col items-center justify-center">
                <div className="text-2xl sm:text-3xl font-bold">200%</div>
                <div className="text-sm opacity-90">Sales Increase</div>
              </div>
            </div>

            <div className="space-y-5">
              <span className="text-primary font-medium">Featured Case Study</span>
              <h2 className="text-2xl md:text-3xl font-bold">{featuredProject.title}</h2>
              <p className="text-muted-foreground">{featuredProject.description}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">The Challenge</h4>
                  <p className="text-muted-foreground text-sm">{featuredProject.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Our Solution</h4>
                  <p className="text-muted-foreground text-sm">{featuredProject.solution}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Results</h4>
                {featuredProject.results.map((result) => (
                  <div key={result} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>

              <Button asChild>
                <Link href={featuredProject.href}>
                  <span className="inline-flex items-center">
                    View All Projects
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">What Our Clients Say</h2>
            <p className="text-base text-muted-foreground">Don't just take our word for it. Here's what our clients have to say about working with us.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-5">
                <CardContent className="p-0 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground">"{testimonial.content}"</p>

                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-90" />
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Start Your Project?</h2>
              <p className="text-base md:text-lg text-slate-300 mb-6">Let's discuss how we can help transform your digital presence. Get a free consultation today.</p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                  <Link href="/contact" aria-label="Get free consultation">
                    <span className="inline-flex items-center">
                      Get Free Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  </Link>
                </Button>

                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
