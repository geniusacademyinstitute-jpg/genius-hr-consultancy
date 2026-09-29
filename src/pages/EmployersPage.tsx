import PageHead from '@/components/ui/PageHead';
import HiringRequirementForm from '@/components/forms/HiringRequirementForm';
import { getPageSeo } from '@/config/seo';

export default function EmployersPage() {
 const seo = getPageSeo('employers');

 return (
  <>
   <PageHead title={seo.title} description={seo.description} />
   <section className="bg-slate-900 text-white py-20 text-center px-4">
    <div className="container-main max-w-4xl mx-auto">
     <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
      Submit a Hiring Requirement
     </h1>
     <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
      Share your requirement with our recruitment team. We will understand the role and begin the candidate search process.
     </p>
    </div>
   </section>

   <section className="bg-slate-50 section-padding px-4">
    <div className="container-main max-w-4xl mx-auto">
     <HiringRequirementForm />
    </div>
   </section>
  </>
 );
}
