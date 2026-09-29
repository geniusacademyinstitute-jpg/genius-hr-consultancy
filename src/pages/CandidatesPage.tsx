import PageHead from '@/components/ui/PageHead';
import CandidateForm from '@/components/forms/CandidateForm';
import { getPageSeo } from '@/config/seo';

export default function CandidatesPage() {
 const seo = getPageSeo('candidates');

 return (
  <>
   <PageHead title={seo.title} description={seo.description} />
   <section className="bg-slate-900 text-white py-20 text-center px-4">
    <div className="container-main max-w-4xl mx-auto">
     <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
      Looking for your next opportunity?
     </h1>
     <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
      Share your profile with our recruitment team and we can consider it for relevant opportunities based on available vacancies and employer requirements.
     </p>
    </div>
   </section>

   <section id="opportunities" className="bg-slate-50 section-padding px-4">
    <div className="container-main max-w-3xl mx-auto">
     <CandidateForm />
     <p className="mt-8 text-center text-sm text-slate-600">
      Disclaimer: Submitting your profile does not guarantee employment or an interview.
     </p>
    </div>
   </section>
  </>
 );
}
