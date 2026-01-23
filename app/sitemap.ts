import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skylightpaver.com'
  const currentDate = new Date()
  
  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        `${baseUrl}/og-image.jpg`,
        `${baseUrl}/logo.png`,
        `${baseUrl}/images/hero-patio.jpg`,
        `${baseUrl}/images/gallery-patio.jpg`,
      ],
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        `${baseUrl}/images/gallery-1.jpg`,
        `${baseUrl}/images/gallery-2.jpg`,
        `${baseUrl}/images/gallery-3.jpg`,
        `${baseUrl}/images/gallery-patio.jpg`,
      ],
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/paver-installation-jacksonville-fl`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
      images: [
        `${baseUrl}/images/hero-patio.jpg`,
      ],
    },
  ]

  // Service anchor links (for better internal linking signals)
  const serviceAnchors: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/#services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#reviews`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#why-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#service-areas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  return [...mainPages, ...serviceAnchors]
}
