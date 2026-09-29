import PageHead from '@/components/ui/PageHead';
import Hero from '@/components/sections/Hero';
import BusinessProblem from '@/components/sections/BusinessProblem';
import RecruitmentProcess from '@/components/sections/RecruitmentProcess';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import EmployerSection from '@/components/sections/EmployerSection';
import WhyGenius from '@/components/sections/WhyGenius';
import GeniusGroups from '@/components/sections/GeniusGroups';
import CandidateSection from '@/components/sections/CandidateSection';
import FinalCTA from '@/components/sections/FinalCTA';
import { getPageSeo } from '@/config/seo';

export default function HomePage() {
 const seo = getPageSeo('home');

 return (
  <>
   <PageHead title={seo.title} description={seo.description} />
   <Hero />
   <BusinessProblem />
   <RecruitmentProcess />
   <Services />
   <Industries />
   <EmployerSection />
   <WhyGenius />
   <GeniusGroups />
   <CandidateSection />
   <FinalCTA />
  </>
 );
}
