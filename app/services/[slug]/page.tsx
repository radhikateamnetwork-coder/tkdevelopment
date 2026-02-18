// app/services/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* ---------------- TYPES ---------------- */
type Feature = { title: string; desc: string };

type Service = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: Feature[];
  technologies: string[];
  pricing: string;
  timeline: string;
};

/* ---------------- DATA ---------------- */
const servicesData = {
  "ui-ux-design": {
    title: "UI/UX Design",
    subtitle: "User-centric design that converts",
    description:
      "We create intuitive, visually stunning interfaces that delight users and drive conversions. Our design process focuses on understanding your users and business goals to deliver experiences that matter.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    features: [
      { title: "User Research", desc: "In-depth analysis of your target audience, their needs, and behaviors." },
      { title: "Wireframing", desc: "Low-fidelity sketches to plan layout and user flows." },
      { title: "Visual Design", desc: "High-fidelity designs with your brand identity." },
      { title: "Prototyping", desc: "Interactive prototypes for testing and validation." },
      { title: "Usability Testing", desc: "Real user testing to identify and fix issues." },
      { title: "Design Systems", desc: "Scalable component libraries for consistency." },
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer", "Principle"],
    pricing: "Starting at ₹50,000",
    timeline: "2-4 weeks",
  },
  "web-development": {
    title: "Web Development",
    subtitle: "Modern, fast, scalable websites",
    description:
      "We build high-performance websites and web applications using cutting-edge technologies. From simple landing pages to complex web apps, we deliver solutions that scale with your business.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    features: [
      { title: "Custom Development", desc: "Tailored solutions built to your exact specifications." },
      { title: "Progressive Web Apps", desc: "App-like experiences that work offline." },
      { title: "API Integration", desc: "Connect with third-party services seamlessly." },
      { title: "Database Design", desc: "Efficient data structures for optimal performance." },
      { title: "Cloud Deployment", desc: "Scalable hosting on AWS, Vercel, or your platform." },
      { title: "Performance Optimization", desc: "Lightning-fast load times and Core Web Vitals." },
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "AWS"],
    pricing: "Starting at ₹75,000",
    timeline: "4-8 weeks",
  },
  ecommerce: {
    title: "E-commerce Solutions",
    subtitle: "Online stores that sell",
    description:
      "We create powerful e-commerce experiences that convert visitors into customers. Our solutions include custom stores, marketplace integrations, and headless commerce architectures.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    features: [
      { title: "Custom Stores", desc: "Unique shopping experiences tailored to your brand." },
      { title: "Payment Integration", desc: "Secure checkout with multiple payment options." },
      { title: "Inventory Management", desc: "Real-time stock tracking and management." },
      { title: "Multi-currency", desc: "Sell globally with automatic currency conversion." },
      { title: "Analytics", desc: "Track sales, customer behavior, and performance." },
      { title: "Mobile Commerce", desc: "Optimized shopping on any device." },
    ],
    technologies: ["Shopify", "Next.js Commerce", "Stripe", "Razorpay", "WooCommerce", "Medusa"],
    pricing: "Starting at ₹1,00,000",
    timeline: "6-12 weeks",
  },
  "seo-growth": {
    title: "SEO & Growth",
    subtitle: "Get found, grow faster",
    description:
      "We help you get found online through strategic SEO, performance optimization, and growth strategies. Our data-driven approach ensures measurable results and sustainable growth.",
    image:
      "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=1200&q=80",
    features: [
      { title: "Technical SEO", desc: "Site structure, speed, and crawlability optimization." },
      { title: "On-Page SEO", desc: "Content optimization for target keywords." },
      { title: "Local SEO", desc: "Rank higher in local search results." },
      { title: "Content Strategy", desc: "Keyword research and content planning." },
      { title: "Analytics Setup", desc: "Track performance with proper data collection." },
      { title: "Performance Audit", desc: "Identify and fix speed issues." },
    ],
    technologies: ["Google Analytics", "Search Console", "Ahrefs", "SEMrush", "Lighthouse", "Screaming Frog"],
    pricing: "Starting at ₹25,000/month",
    timeline: "Ongoing",
  },
} satisfies Record<string, Service>;

type Slug = keyof typeof servicesData;

/* ---------------- METADATA ---------------- */
/* NOTE: `params` here is awaited because Next may pass it as a Promise */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Tushar - Web Design & Development`,
    description: service.description,
  };
}

/* ---------------- STATIC PARAMS ---------------- */
export async function generateStaticParams(): Promise<Array<{ slug: Slug }>> {
  return Object.keys(servicesData).map((slug) => ({ slug: slug as Slug }));
}

/* ---------------- PAGE ---------------- */
/* Make page async and await params (unwrapping the Promise) */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="relative py-24">
        {/* Make the immediate parent of Image positioned and sized */}
        <div className="relative w-full h-[520px]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>

        <div className="container-custom relative z-10 text-white -mt-[420px]">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>
          <h1 className="heading-1 mb-4">{service.title}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{service.subtitle}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="heading-2">Overview</h2>
              <p className="text-muted-foreground text-lg">{service.description}</p>

              <div className="grid md:grid-cols-2 gap-6 pt-8">
                {service.features.map((feature) => (
                  <Card key={feature.title}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold mb-1">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Investment</h3>
                    <p className="text-2xl font-bold text-primary">{service.pricing}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Timeline</h3>
                    <p className="text-muted-foreground">{service.timeline}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" size="lg" asChild>
                    <Link href="/contact">
                      Get a Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">View Related Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
