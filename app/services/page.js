import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Palette, Code, ShoppingCart, TrendingUp, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Our Services | Tushar - Web Design & Development',
  description: 'Comprehensive web solutions including UI/UX Design, Web Development, E-commerce, and SEO services tailored to your business needs.',
}

const services = [
  {
    slug: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    shortDesc: 'User-centric design that looks great and works perfectly.',
    description: 'We create intuitive, visually stunning interfaces that delight users and drive conversions. Our design process focuses on understanding your users and business goals.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    features: [
      'User Research & Personas',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Mobile-First Responsive Design',
      'Usability Testing',
      'Design System Creation',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Framer'],
  },
  {
    slug: 'web-development',
    icon: Code,
    title: 'Web Development',
    shortDesc: 'Modern, fast, and scalable websites built with the latest technologies.',
    description: 'We build high-performance websites and web applications using cutting-edge technologies. From simple landing pages to complex web apps, we deliver solutions that scale.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    features: [
      'Custom Website Development',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'Database Design',
      'Cloud Deployment',
      'Performance Optimization',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
  },
  {
    slug: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    shortDesc: 'Scalable online stores that drive sales and revenue.',
    description: 'We create powerful e-commerce experiences that convert visitors into customers. Our solutions include custom stores, marketplace integrations, and headless commerce.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    features: [
      'Custom E-commerce Stores',
      'Shopify Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Multi-currency Support',
      'Analytics & Reporting',
    ],
    technologies: ['Shopify', 'Next.js Commerce', 'Stripe', 'Razorpay', 'WooCommerce'],
  },
  {
    slug: 'seo-growth',
    icon: TrendingUp,
    title: 'SEO & Growth',
    shortDesc: 'Rank higher and reach more customers organically.',
    description: 'We help you get found online through strategic SEO, performance optimization, and growth strategies. Our data-driven approach ensures measurable results.',
    image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&q=80',
    features: [
      'Technical SEO Audit',
      'On-Page Optimization',
      'Content Strategy',
      'Local SEO',
      'Performance Optimization',
      'Analytics Setup & Tracking',
    ],
    technologies: ['Google Analytics', 'Search Console', 'Ahrefs', 'SEMrush', 'Lighthouse'],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6">Our <span className="text-primary">Services</span></h1>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            From concept to launch, we handle every aspect of your digital presence with expertise and care.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.slug} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h2 className="heading-2">{service.title}</h2>
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button asChild>
                    <Link href={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Our Process</h2>
            <p className="body-large text-muted-foreground">
              A proven methodology that ensures project success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals, audience, and requirements.' },
              { step: '02', title: 'Design', desc: 'Creating wireframes and visual designs for approval.' },
              { step: '03', title: 'Development', desc: 'Building your solution with clean, scalable code.' },
              { step: '04', title: 'Launch', desc: 'Testing, deployment, and ongoing support.' },
            ].map((item) => (
              <Card key={item.step}>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}