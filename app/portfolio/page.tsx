import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Portfolio | Tushar - Web Design & Development',
  description: 'Explore our portfolio of successful web design, development, and e-commerce projects. See how we help businesses grow online.',
}

const projects = [
  {
    slug: 'styleboutique-ecommerce',
    title: 'StyleBoutique E-commerce',
    category: 'E-commerce',
    client: 'StyleBoutique',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    problem: 'StyleBoutique, a fashion retailer, was struggling with an outdated website that was slow and had poor mobile experience, resulting in high cart abandonment rates.',
    solution: 'We built a modern Next.js e-commerce platform with Shopify integration, featuring a mobile-first design, lightning-fast load times, and seamless checkout experience.',
    results: [
      { metric: '200%', label: 'Increase in Sales' },
      { metric: '45%', label: 'Better Conversion Rate' },
      { metric: '3x', label: 'Faster Load Time' },
    ],
    technologies: ['Next.js', 'Shopify', 'Stripe', 'Tailwind CSS'],
    featured: true,
  },
  {
    slug: 'techstart-corporate',
    title: 'TechStart India Website',
    category: 'Web Development',
    client: 'TechStart India',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    problem: 'TechStart needed a professional website to establish credibility and generate leads from enterprise clients in the B2B space.',
    solution: 'We designed and developed a sleek corporate website with case studies, team profiles, and an integrated lead generation system.',
    results: [
      { metric: '300%', label: 'More Leads' },
      { metric: '50+', label: 'New Clients' },
      { metric: '85%', label: 'Better Engagement' },
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    featured: true,
  },
  {
    slug: 'growthco-seo',
    title: 'GrowthCo SEO Overhaul',
    category: 'SEO & Growth',
    client: 'GrowthCo',
    image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&q=80',
    problem: 'GrowthCo had great content but poor search visibility. They were missing out on organic traffic from high-intent keywords.',
    solution: 'We performed a comprehensive technical SEO audit, restructured their content, and implemented schema markup and performance optimizations.',
    results: [
      { metric: '#1', label: 'For Key Terms' },
      { metric: '400%', label: 'Organic Traffic' },
      { metric: '60%', label: 'Lower Bounce Rate' },
    ],
    technologies: ['Technical SEO', 'Content Strategy', 'Analytics'],
    featured: false,
  },
  {
    slug: 'innovatelabs-app',
    title: 'InnovateLabs Dashboard',
    category: 'UI/UX Design',
    client: 'InnovateLabs',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    problem: 'InnovateLabs needed to redesign their complex analytics dashboard to improve user adoption and reduce support tickets.',
    solution: 'We conducted user research, created a new information architecture, and designed an intuitive interface with guided onboarding.',
    results: [
      { metric: '70%', label: 'Fewer Support Tickets' },
      { metric: '90%', label: 'User Satisfaction' },
      { metric: '2x', label: 'Feature Adoption' },
    ],
    technologies: ['Figma', 'React', 'D3.js', 'Tailwind CSS'],
    featured: false,
  },
  {
    slug: 'healthplus-platform',
    title: 'HealthPlus Booking Platform',
    category: 'Web Development',
    client: 'HealthPlus Clinics',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    problem: 'HealthPlus clinics needed an online booking system to reduce phone calls and streamline appointment management.',
    solution: 'We built a custom booking platform with patient portals, doctor schedules, and automated reminders.',
    results: [
      { metric: '80%', label: 'Online Bookings' },
      { metric: '50%', label: 'Fewer No-shows' },
      { metric: '4hrs', label: 'Staff Time Saved/Day' },
    ],
    technologies: ['Next.js', 'PostgreSQL', 'Twilio', 'Stripe'],
    featured: false,
  },
  {
    slug: 'foodie-marketplace',
    title: 'Foodie Marketplace',
    category: 'E-commerce',
    client: 'Foodie Delhi',
    image: 'https://images.unsplash.com/photo-1502810190503-8303352d0dd1?w=800&q=80',
    problem: 'Local food vendors needed an online marketplace to reach customers during the pandemic.',
    solution: 'We created a multi-vendor marketplace with real-time order tracking, vendor dashboards, and delivery integration.',
    results: [
      { metric: '100+', label: 'Vendors Onboarded' },
      { metric: '5000+', label: 'Monthly Orders' },
      { metric: '₹50L+', label: 'Revenue Generated' },
    ],
    technologies: ['React', 'Node.js', 'Socket.io', 'Razorpay'],
    featured: false,
  },
]

const categories = ['All', 'E-commerce', 'Web Development', 'UI/UX Design', 'SEO & Growth']

export default function PortfolioPage() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6">Our <span className="text-primary">Portfolio</span></h1>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Explore our successful projects and see how we help businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container-custom">
          <h2 className="heading-2 mb-12">Featured Projects</h2>
          
          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <div key={project.slug} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <span className="text-primary font-medium">{project.category}</span>
                  <h3 className="heading-2">{project.title}</h3>
                  <p className="text-muted-foreground"><strong>Client:</strong> {project.client}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-muted-foreground text-sm">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Our Solution</h4>
                      <p className="text-muted-foreground text-sm">{project.solution}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {project.results.map((result) => (
                      <div key={result.label} className="text-center p-4 bg-muted rounded-xl">
                        <div className="text-2xl font-bold text-primary">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-2 mb-12">More Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <Card key={project.slug} className="overflow-hidden group">
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.client}</p>
                  
                  <div className="flex gap-4 mb-4">
                    {project.results.slice(0, 2).map((result) => (
                      <div key={result.label}>
                        <div className="font-bold text-primary">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-muted rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Have a Project in Mind?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Tell us about your project.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}