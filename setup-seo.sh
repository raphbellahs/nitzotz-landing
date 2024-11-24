#!/bin/bash

# Install required package
echo "Installing next-sitemap..."
npm install --save-dev next-sitemap

# Create next-sitemap.config.js
echo "Creating next-sitemap.config.js..."
cat > next-sitemap.config.js << 'EOL'
module.exports = {
  siteUrl: 'https://nitzotz.org',
  generateRobotsTxt: true,
  outDir: './public',
}
EOL

# Update package.json to add postbuild script
echo "Updating package.json..."
npx json -I -f package.json -e 'this.scripts.postbuild="next-sitemap"'

# Build project to generate sitemap
echo "Building project..."
npm run build

echo "SEO setup complete! Please:"
echo "1. Check the generated sitemap in public/sitemap.xml"
echo "2. Add the metadata to your app/layout.tsx file"
echo "3. Deploy your changes"
echo ""
echo "Would you like to add the metadata to layout.tsx now? (y/n)"
read response

if [ "$response" = "y" ]; then
  echo "Adding metadata to layout.tsx..."
  
  # Create a temporary file with the new content
  cat > temp_layout.tsx << 'EOL'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://nitzotz.org'),
  title: 'Nitzotz - Programme de Formation Technologique',
  description: 'Programme de formation technologique pour les jeunes francophones, créé par des anciens d\'unités technologiques israéliennes.',
  openGraph: {
    title: 'Nitzotz - Programme de Formation Technologique',
    description: 'Programme de formation technologique pour les jeunes francophones',
    url: '/',
    siteName: 'Nitzotz',
    locale: 'fr_FR',
    type: 'website',
  },
}
EOL

  # Insert the metadata at the beginning of layout.tsx while preserving the rest
  if [ -f "app/layout.tsx" ]; then
    cat temp_layout.tsx app/layout.tsx > temp_combined.tsx
    mv temp_combined.tsx app/layout.tsx
    rm temp_layout.tsx
    echo "Metadata added to layout.tsx"
  else
    echo "Error: app/layout.tsx not found"
  fi
fi

echo ""
echo "Next steps:"
echo "1. Verify the changes in your files"
echo "2. Run 'npm run build' again"
echo "3. Commit and deploy your changes"
echo "4. Go to https://search.google.com/search-console"
echo "5. Add your property (https://nitzotz.org)"
echo "6. Verify ownership through Vercel"
echo "7. Submit your sitemap URL (https://nitzotz.org/sitemap.xml)"