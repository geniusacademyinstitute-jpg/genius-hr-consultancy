import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

// Lazy load pages
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const ProcessPage = lazy(() => import('@/pages/ProcessPage'));
const EmployersPage = lazy(() => import('@/pages/EmployersPage'));
const CandidatesPage = lazy(() => import('@/pages/CandidatesPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

// Loading Fallback
const PageLoader = () => (
 <div className="min-h-[50vh] flex items-center justify-center">
  <div className="w-12 h-12 border-4 border-slate-200 rounded-full border-t-blue animate-spin"></div>
 </div>
);

function App() {
 return (
  <Routes>
   <Route path="/" element={<Layout />}>
    <Route 
     index 
     element={
      <Suspense fallback={<PageLoader />}>
       <HomePage />
      </Suspense>
     } 
    />
    <Route 
     path="about" 
     element={
      <Suspense fallback={<PageLoader />}>
       <AboutPage />
      </Suspense>
     } 
    />
    <Route 
     path="services" 
     element={
      <Suspense fallback={<PageLoader />}>
       <ServicesPage />
      </Suspense>
     } 
    />
    <Route 
     path="process" 
     element={
      <Suspense fallback={<PageLoader />}>
       <ProcessPage />
      </Suspense>
     } 
    />
    <Route 
     path="employers" 
     element={
      <Suspense fallback={<PageLoader />}>
       <EmployersPage />
      </Suspense>
     } 
    />
    <Route 
     path="candidates" 
     element={
      <Suspense fallback={<PageLoader />}>
       <CandidatesPage />
      </Suspense>
     } 
    />
    <Route 
     path="contact" 
     element={
      <Suspense fallback={<PageLoader />}>
       <ContactPage />
      </Suspense>
     } 
    />
   </Route>
  </Routes>
 );
}

export default App;
