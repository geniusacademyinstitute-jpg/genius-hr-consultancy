import { useEffect } from 'react';

interface PageHeadProps {
 title: string;
 description?: string;
}

export default function PageHead({ title, description }: PageHeadProps) {
 useEffect(() => {
  // Save original title
  const prevTitle = document.title;
  document.title = title;

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  const prevDescription = metaDescription?.getAttribute('content');
  
  if (description) {
   if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
   }
   metaDescription.setAttribute('content', description);
   
   // Also update OG tags
   const ogTitle = document.querySelector('meta[property="og:title"]');
   if (ogTitle) ogTitle.setAttribute('content', title);
   
   const ogDesc = document.querySelector('meta[property="og:description"]');
   if (ogDesc) ogDesc.setAttribute('content', description);
   
   const twitterTitle = document.querySelector('meta[name="twitter:title"]');
   if (twitterTitle) twitterTitle.setAttribute('content', title);
   
   const twitterDesc = document.querySelector('meta[name="twitter:description"]');
   if (twitterDesc) twitterDesc.setAttribute('content', description);
  }

  // No need to revert on unmount as SPA routing handles the next PageHead component
 }, [title, description]);

 return null;
}
