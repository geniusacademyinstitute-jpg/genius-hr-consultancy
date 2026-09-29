import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileActionBar from './MobileActionBar';

function ScrollToTop() {
 const { pathname } = useLocation();

 useEffect(() => {
  window.scrollTo(0, 0);
 }, [pathname]);

 return null;
}

export default function Layout() {
 return (
  <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
   <ScrollToTop />
   <Navbar />
   <main className="flex-grow pt-[80px]">
    <Outlet />
   </main>
   <Footer />
   <MobileActionBar />
  </div>
 );
}
