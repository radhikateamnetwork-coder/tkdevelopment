import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Tushar - Web Design & Development',
  description: 'Privacy Policy for Tushar Web Design & Development services.',
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col pt-20">
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-1 mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 15, 2024</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="heading-3 mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                At Tushar ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="heading-3 mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We may collect information about you in a variety of ways:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide through our contact forms.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your experience on our website.</li>
              </ul>

              <h2 className="heading-3 mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you newsletters and marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="heading-3 mt-8 mb-4">4. Data Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.
              </p>

              <h2 className="heading-3 mt-8 mb-4">5. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="heading-3 mt-8 mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="heading-3 mt-8 mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
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