import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Tushar - Web Design & Development',
  description: 'Terms of Service for Tushar Web Design & Development services.',
}

export default function TermsPage() {
  return (
    <div className="flex flex-col pt-20">
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-1 mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 15, 2024</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="heading-3 mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>

              <h2 className="heading-3 mt-8 mb-4">2. Services</h2>
              <p className="text-muted-foreground mb-4">
                Tushar provides web design, development, e-commerce, and SEO services. The specific scope of work, deliverables, and timelines will be outlined in individual project agreements.
              </p>

              <h2 className="heading-3 mt-8 mb-4">3. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>A 50% deposit is required to commence work</li>
                <li>The remaining 50% is due upon project completion</li>
                <li>For ongoing services, payment is due within 15 days of invoice</li>
                <li>Late payments may incur additional fees</li>
              </ul>

              <h2 className="heading-3 mt-8 mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                Upon full payment, clients receive ownership of the final deliverables. Tushar retains the right to display work in portfolios and case studies unless otherwise agreed in writing.
              </p>

              <h2 className="heading-3 mt-8 mb-4">5. Client Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Providing necessary content, assets, and feedback in a timely manner</li>
                <li>Ensuring they have the right to use any content provided</li>
                <li>Reviewing and approving work at each milestone</li>
              </ul>

              <h2 className="heading-3 mt-8 mb-4">6. Revisions</h2>
              <p className="text-muted-foreground mb-4">
                The number of revision rounds included depends on the package selected. Additional revisions beyond the included amount will be billed at our standard hourly rate.
              </p>

              <h2 className="heading-3 mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Tushar shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service.
              </p>

              <h2 className="heading-3 mt-8 mb-4">8. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate a project with written notice. Upon termination, the client is responsible for payment for all work completed up to the termination date.
              </p>

              <h2 className="heading-3 mt-8 mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
              </p>

              <h2 className="heading-3 mt-8 mb-4">10. Contact</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground mb-4">
                Email: <a href="mailto:tusharkumar888219@gmail.com" className="text-primary hover:underline">tusharkumar888219@gmail.com</a><br />
                Address: F1/482 Sunder Nagri, Delhi, India
              </p>
            </div>

            <div className="mt-12 pt-8 border-t">
              <Link href="/" className="text-primary hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}