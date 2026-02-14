export default function robots() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://tushar.dev'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}