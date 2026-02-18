import Link from 'next/link'
import { Check, ArrowRight, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata = {
  title: 'Pricing | Tushar - Web Design & Development',
  description: 'Transparent pricing for our web design, development, e-commerce, and SEO services. Find the perfect package for your business.',
}

const packages = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: '₹50,000',
    priceNote: 'one-time',
    popular: false,
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form',
      'Social media integration',
      '2 rounds of revisions',
      '30 days support',
    ],
    notIncluded: [
      'E-commerce functionality',
      'Custom animations',
      'CMS integration',
    ],
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: '₹1,25,000',
    priceNote: 'one-time',
    popular: true,
    features: [
      'Up to 15 pages',
      'Custom UI/UX design',
      'Advanced SEO optimization',
      'CMS integration',
      'Blog functionality',
      'Analytics setup',
      'Performance optimization',
      '4 rounds of revisions',
      '90 days support',
    ],
    notIncluded: [
      'E-commerce (add-on available)',
      'Custom app development',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large-scale projects',
    price: 'Custom',
    priceNote: 'let\'s talk',
    popular: false,
    features: [
      'Unlimited pages',
      'Custom design & development',
      'Full e-commerce solution',
      'API integrations',
      'Custom features & apps',
      'Priority support',
      'Dedicated project manager',
      'Unlimited revisions',
      '1 year support',
    ],
    notIncluded: [],
  },
]

const addOns = [
  { name: 'E-commerce Integration', price: '₹40,000+' },
  { name: 'Custom Animations', price: '₹15,000+' },
  { name: 'Multi-language Support', price: '₹20,000+' },
  { name: 'Monthly SEO', price: '₹25,000/mo' },
  { name: 'Maintenance Package', price: '₹10,000/mo' },
  { name: 'Content Writing', price: '₹2,000/page' },
]

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A Starter package typically takes 2-3 weeks, Professional packages 4-6 weeks, and Enterprise projects 8-12 weeks or more.',
  },
  {
    question: 'Do you require a deposit?',
    answer: 'Yes, we require a 50% deposit to start the project. The remaining 50% is due upon project completion before launch.',
  },
  {
    question: 'What if I need changes after the project is complete?',
    answer: 'Minor changes within the support period are included. For larger changes or after the support period ends, we offer hourly rates or can discuss a maintenance package.',
  },
  {
    question: 'Do you provide hosting?',
    answer: 'We can recommend and set up hosting on platforms like Vercel, AWS, or your preferred provider. Hosting costs are separate from our development fees.',
  },
  {
    question: 'Can I upgrade my package later?',
    answer: 'Absolutely! We can add features or upgrade your website at any time. We\'ll provide a quote based on the additional work required.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'For larger projects, we can discuss milestone-based payments. Contact us to arrange a payment schedule that works for you.',
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6">Transparent <span className="text-primary">Pricing</span></h1>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your business. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={`relative ${pkg.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground ml-2">{pkg.priceNote}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {pkg.notIncluded.length > 0 && (
                    <div className="space-y-3 pt-4 border-t">
                      {pkg.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-5 h-5 flex items-center justify-center">—</span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'} asChild>
                    <Link href="/contact">
                      {pkg.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Add-on Services</h2>
            <p className="text-muted-foreground">
              Enhance your project with these additional services.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {addOns.map((addon) => (
              <Card key={addon.name}>
                <CardContent className="p-4 flex justify-between items-center">
                  <span className="font-medium">{addon.name}</span>
                  <span className="text-primary font-semibold">{addon.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Not Sure Which Package?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your budget.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-slate-100" asChild>
            <Link href="/contact">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}