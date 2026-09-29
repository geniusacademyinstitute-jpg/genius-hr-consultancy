import PageHead from '@/components/ui/PageHead';
import ContactSection from '@/components/sections/ContactSection';
import { business } from '@/config/business';
import { getPageSeo } from '@/config/seo';

export default function ContactPage() {
 const seo = getPageSeo('contact');

 return (
  <>
   <PageHead title={seo.title} description={seo.description} />
   <section className="bg-slate-900 text-white py-20 text-center px-4">
    <div className="container-main max-w-4xl mx-auto">
     <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
      Contact
     </h1>
     <p className="text-lg md:text-xl text-[#CBD5E1] max-w-3xl mx-auto">
      Connect with our recruitment team to discuss your hiring requirements.
     </p>
    </div>
   </section>

   <ContactSection />
   
   {business.mapUrl && (
    <section className="w-full">
     <iframe 
      src={business.mapUrl} 
      className="w-full h-[400px] border-0 rounded-none" 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Genius HR Consultancy Location"
     ></iframe>
    </section>
   )}
  </>
 );
}
