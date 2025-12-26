import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ahmed-portfolio.xyz',
      lastModified: new Date(),
    },
  ]
}
