import PageHead from '@/components/ui/PageHead';
import RecruitmentProcess from '@/components/sections/RecruitmentProcess';
import FinalCTA from '@/components/sections/FinalCTA';
import { getPageSeo } from '@/config/seo';

export default function ProcessPage() {
 const seo = getPageSeo('process');

 return (
  <>
   <PageHead title={seo.title} description={seo.description} />
   <section className="bg-slate-900 text-white py-24 text-center px-4">
    <div className="container-main max-w-4xl mx-auto">
     <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
      Our Recruitment Process
     </h1>
     <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
      We follow a structured, multi-step approach to ensure thorough candidate screening and consistent results for our clients.
     </p>
    </div>
   </section>

   <RecruitmentProcess />
   <FinalCTA />
  </>
 );
}
