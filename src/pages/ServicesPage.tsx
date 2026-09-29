import PageHead from '@/components/ui/PageHead';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import FinalCTA from '@/components/sections/FinalCTA';
import { getPageSeo } from '@/config/seo';

export default function ServicesPage() {
 const seo = getPageSeo('services');

 return (
  <>
   <PageHead title={seo.title} description={seo.description} />
   <section className="bg-slate-900 text-white py-24 text-center px-4">
    <div className="container-main max-w-4xl mx-auto">
     <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
      Recruitment Services
     </h1>
     <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
      Structured recruitment support to help businesses identify, screen, and hire the right professionals.
     </p>
    </div>
   </section>

   <Services />
   <Industries />
   <FinalCTA />
  </>
 );
}
