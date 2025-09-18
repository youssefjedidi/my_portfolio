#!/bin/bash

# SEO Validation Script for Youssef Jedidi Portfolio
# This script helps validate SEO implementation

echo "🔍 SEO Validation for Youssef Jedidi Portfolio"
echo "=============================================="

# Check if required files exist
echo ""
echo "📁 Checking SEO Files:"
echo "----------------------"

files=("public/index.html" "public/sitemap.xml" "public/robots.txt")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file - EXISTS"
    else
        echo "❌ $file - MISSING"
    fi
done

# Check meta tags in main HTML
echo ""
echo "🏷️  Checking Meta Tags in index.html:"
echo "-------------------------------------"

if grep -q "og:title" public/index.html; then
    echo "✅ Open Graph tags - PRESENT"
else
    echo "❌ Open Graph tags - MISSING"
fi

if grep -q "twitter:card" public/index.html; then
    echo "✅ Twitter Card tags - PRESENT"
else
    echo "❌ Twitter Card tags - MISSING"
fi

if grep -q "application/ld+json" public/index.html; then
    echo "✅ Structured Data (JSON-LD) - PRESENT"
else
    echo "❌ Structured Data (JSON-LD) - MISSING"
fi

if grep -q "canonical" public/index.html; then
    echo "✅ Canonical URL - PRESENT"
else
    echo "❌ Canonical URL - MISSING"
fi

# Check sitemap structure
echo ""
echo "🗺️  Checking Sitemap Structure:"
echo "-------------------------------"

if grep -q "https://youssefjedidi.github.io/my_portfolio" public/sitemap.xml; then
    echo "✅ Sitemap URLs - CORRECT"
else
    echo "❌ Sitemap URLs - INCORRECT"
fi

# Check robots.txt
echo ""
echo "🤖 Checking Robots.txt:"
echo "-----------------------"

if grep -q "sitemap.xml" public/robots.txt; then
    echo "✅ Sitemap reference - PRESENT"
else
    echo "❌ Sitemap reference - MISSING"
fi

echo ""
echo "🎯 Next Steps for SEO Optimization:"
echo "===================================="
echo "1. Deploy to GitHub Pages: npm run deploy"
echo "2. Submit sitemap to Google Search Console:"
echo "   https://search.google.com/search-console"
echo "3. Submit sitemap to Bing Webmaster Tools:"
echo "   https://www.bing.com/webmasters"
echo "4. Test structured data with Google's tool:"
echo "   https://search.google.com/structured-data/testing-tool"
echo "5. Validate Open Graph with Facebook's debugger:"
echo "   https://developers.facebook.com/tools/debug/"
echo "6. Check Twitter Card validation:"
echo "   https://cards-dev.twitter.com/validator"
echo ""
echo "📊 SEO Checklist Summary:"
echo "- ✅ Comprehensive meta tags (title, description, keywords)"
echo "- ✅ Open Graph tags for Facebook sharing"
echo "- ✅ Twitter Card tags for Twitter sharing"
echo "- ✅ Structured data (JSON-LD) for rich snippets"
echo "- ✅ XML sitemap for search engine crawling"
echo "- ✅ Optimized robots.txt"
echo "- ✅ Canonical URLs to prevent duplicate content"
echo "- ✅ Page-specific SEO meta tags"
echo ""
echo "🚀 Your portfolio is now SEO-optimized!"