import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans text-[#FFFFFF] selection:bg-[#DC2626] selection:text-white overflow-x-hidden flex flex-col">
      <Header />
      <main className="flex-grow pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
