import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Target, Award, Heart, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'About Us | Tushar - Web Design & Development',
  description: 'Learn about Tushar - a passionate team of designers and developers based in Delhi, dedicated to building exceptional digital products.',
}

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable results that directly impact your business growth.',
  },
  {
    icon: Heart,
    title: 'Passion for Excellence',
    description: 'Every project receives our full dedication and attention to detail.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work closely with you as partners, not just service providers.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'We never compromise on quality, using best practices and latest technologies.',
  },
]

const team = [
  {
    name: 'Tushar Kumar',
    role: 'Founder & Lead Developer',
    image: '/Tushar.png',
    description: 'Full-stack developer with 8+ years of experience building scalable web applications.',
  },
  {
    name: 'Priya Singh',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    description: 'Creative designer focused on crafting beautiful and intuitive user experiences.',
  },
  {
    name: 'Rahul Verma',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    description: 'Specialist in React, Next.js, and modern frontend technologies.',
  },
]

const milestones = [
  { year: '2018', title: 'Founded', description: 'Started as a freelance web development service' },
  { year: '2019', title: 'First Major Client', description: 'Landed our first enterprise client' },
  { year: '2020', title: 'Team Expansion', description: 'Grew to a team of 5 professionals' },
  { year: '2021', title: '50+ Projects', description: 'Reached milestone of 50 successful projects' },
  { year: '2023', title: 'Full-Service Agency', description: 'Expanded to full-service digital agency' },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="heading-1">About <span className="text-primary">Tushar</span></h1>
              <p className="body-large text-muted-foreground">
                We are a team of passionate designers and developers based in Delhi, dedicated to building exceptional digital products that help businesses succeed online.
              </p>
              <p className="text-muted-foreground">
                With a focus on innovation and trustworthiness, we partner with startups and enterprises to solve complex problems through design and technology.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-4">Our Story</h2>
            <p className="body-large text-muted-foreground">
              From a small freelance operation to a full-service digital agency, our journey has been driven by a passion for creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                    <Card className="inline-block">
                      <CardContent className="p-6">
                        <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                        <h3 className="font-semibold mb-1">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary relative z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Our Values</h2>
            <p className="body-large text-muted-foreground">
              These core values guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Meet Our Team</h2>
            <p className="body-large text-muted-foreground">
              Talented individuals committed to delivering excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden group">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Why Choose Tushar?</h2>
              <p className="text-white/80 mb-8">
                We combine technical expertise with creative vision to deliver websites that not only look great but also drive real business results.
              </p>
              <div className="space-y-4">
                {[
                  'Custom solutions tailored to your needs',
                  'Transparent communication throughout',
                  'Post-launch support and maintenance',
                  'Modern tech stack for best performance',
                  'SEO-optimized from the ground up',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white/80" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold">50+</div>
                <div className="text-white/80">Projects</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold">40+</div>
                <div className="text-white/80">Clients</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold">5+</div>
                <div className="text-white/80">Years</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-white/80">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Start Your Project?</h2>
          <p className="body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}