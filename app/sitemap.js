const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://tushar.dev'

export default function sitemap() {
  const staticPages = [
    '',
    '/about',
    '/services',
    '/services/ui-ux-design',
    '/services/web-development',
    '/services/ecommerce',
    '/services/seo-growth',
    '/portfolio',
    '/pricing',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ]

  const blogPosts = [
    '/blog/nextjs-vs-react-2024',
    '/blog/ecommerce-conversion-tips',
  ]

  const pages = [...staticPages, ...blogPosts].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/blog') ? 0.7 : 0.8,
  }))

  return pages
}