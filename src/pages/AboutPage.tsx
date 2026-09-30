import PageHead from '@/components/ui/PageHead';
import WhyGenius from '@/components/sections/WhyGenius';
import FinalCTA from '@/components/sections/FinalCTA';
import { getPageSeo } from '@/config/seo';

export default function AboutPage() {
 const seo = getPageSeo('about');

 return (
  <>
   <PageHead title={seo.title} description={seo.description} />
   <section className="bg-slate-900 text-white py-24 text-center px-4">
    <div className="container-main max-w-4xl mx-auto">
     <p className="text-sm font-semibold tracking-wider text-cyan-600-soft uppercase mb-4">ABOUT US</p>
     <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
      Recruitment support with a process behind it.
     </h1>
     <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
      Genius HR Consultancy provides recruitment and HR support to businesses looking to identify, screen and connect with suitable candidates.
     </p>
    </div>
   </section>

   <section className="bg-white section-padding px-4">
    <div className="container-main max-w-4xl mx-auto space-y-16">
     
     <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Approach</h2>
      <p className="text-slate-600 leading-relaxed">
       We approach recruitment functionally. We are not focused on loud marketing, but rather on understanding the job requirement, mapping the market, screening individuals, and coordinating the interview process. Our work is largely administrative and organizational, requiring consistency and clear communication.
      </p>
     </div>

     <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Process</h2>
      <p className="text-slate-600 leading-relaxed">
       Every hiring requirement is managed through a documented, structured process. By maintaining a systematic approach, we reduce errors, keep employers updated, and ensure candidates are given timely feedback regarding their applications.
      </p>
     </div>

     <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Employer Relationship</h2>
      <p className="text-slate-600 leading-relaxed">
       We work as an extension of your company. Our goal is to save you time by presenting only candidates who have been interviewed by us and meet your fundamental requirements. We handle the initial stages of recruitment, allowing your internal teams to focus on final technical evaluations and cultural fit.
      </p>
     </div>

     <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Candidate Communication</h2>
      <p className="text-slate-600 leading-relaxed">
       We respect the time and effort candidates invest in applying for roles. We communicate expectations clearly, provide regular updates on application status, and deliver constructive feedback whenever possible, ensuring a professional experience for every applicant.
      </p>
     </div>

     <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Long-term Business Relationships</h2>
      <p className="text-slate-600 leading-relaxed">
       Our business is built on repeat engagements. By understanding the evolving needs of the companies we work with and maintaining a reliable level of service, we aim to be a trusted resource for recruitment support over the long term.
      </p>
     </div>

    </div>
   </section>

   <WhyGenius />
   <FinalCTA />
  </>
 );
}
