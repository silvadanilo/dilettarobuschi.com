```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.supersite.aruba.it',
      },
    ],
  },
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
    localeDetection: false,
  },
};

export default nextConfig;
```
