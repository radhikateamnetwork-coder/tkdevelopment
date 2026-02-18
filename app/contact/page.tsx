'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

/* ---------------- TYPES ---------------- */

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  subject: string
  message: string
  website: string
}

interface ApiResponse {
  success?: boolean
  error?: string
}

/* ---------------- DATA ---------------- */

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office',
    content: 'F1/482 Sunder Nagri, Delhi, India',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'tusharkumar888219@gmail.com',
    href: 'mailto:tusharkumar888219@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Fri: 9AM - 6PM IST',
  },
]

const services = [
  'UI/UX Design',
  'Web Development',
  'E-commerce',
  'SEO & Growth',
  'Other',
]

/* ---------------- PAGE ---------------- */

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: '',
    website: '',
  })

  const [loading, setLoading] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)

  /* ---------- CHANGE HANDLER ---------- */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as keyof ContactFormData
    const value = e.target.value

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  /* ---------- SUBMIT HANDLER ---------- */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      let data: ApiResponse | null = null

      try {
        data = await res.json()
      } catch {
        data = null
      }

      if (res.ok) {
        setSubmitted(true)
        toast.success('Message sent successfully!')
      } else {
        toast.error(data?.error || 'Failed to send message')
      }
    } catch (err) {
      console.error(err)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  /* ---------- SUCCESS STATE ---------- */

  if (submitted) {
    return (
      <div className="flex flex-col pt-20 min-h-screen">
        <section className="flex-1 flex items-center justify-center py-24">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h1 className="heading-2 mb-4">Thank You!</h1>

            <p className="text-muted-foreground mb-8">
              Your message has been received. We'll get back to you within 24 hours.
            </p>

            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </section>
      </div>
    )
  }

  /* ---------- MAIN PAGE ---------- */

  return (
    <div className="flex flex-col pt-20">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 mb-6">
              Let's Work <span className="text-primary">Together</span>
            </h1>

            <p className="body-large text-muted-foreground">
              Ready to start your next project? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-24">
        <div className="container-custom grid lg:grid-cols-3 gap-12">

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <h2 className="heading-3 mb-8">Contact Information</h2>

            {contactInfo.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>

                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground hover:text-primary">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.content}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FORM */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">

                <h2 className="heading-3 mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* NAME + EMAIL */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>Name *</Label>
                      <Input name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div>
                      <Label>Email *</Label>
                      <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>

                  {/* PHONE + SERVICE */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>Phone</Label>
                      <Input name="phone" value={formData.phone} onChange={handleChange} />
                    </div>

                    <div>
                      <Label>Service</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, service: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>

                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div>
                    <Label>Subject</Label>
                    <Input name="subject" value={formData.subject} onChange={handleChange} />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <Label>Message *</Label>
                    <Textarea name="message" rows={6} value={formData.message} onChange={handleChange} required />
                  </div>

                  {/* BUTTON */}
                  <Button type="submit" size="lg" disabled={loading}>
                    {loading ? 'Sending...' : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
                  </Button>

                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
