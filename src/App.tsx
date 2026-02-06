import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

import Home from './pages/Home';
import About from './pages/About';
import OurFirm from './pages/about/OurFirm';
import Partners from './pages/about/Partners';
import CommunityESG from './pages/about/CommunityESG';

import Services from './pages/Services';
import TaxAdvisory from './pages/services/TaxAdvisory';
import BusinessServices from './pages/services/BusinessServices';
import AuditAssurance from './pages/services/AuditAssurance';
import SMSF from './pages/services/SMSF';
import Bookkeeping from './pages/services/Bookkeeping';
import CloudAccounting from './pages/services/CloudAccounting';

import Resources from './pages/Resources';
import InsightsBlog from './pages/resources/InsightsBlog';
import Calculators from './pages/resources/Calculators';
import FAQs from './pages/resources/FAQs';

import Careers from './pages/Careers';
import LifeAtHF from './pages/careers/LifeAtHF';
import OpenRoles from './pages/careers/OpenRoles';

import Contact from './pages/Contact';
import BookConsultation from './pages/contact/BookConsultation';
import OfficeLocations from './pages/contact/OfficeLocations';

import ClientPortal from './pages/ClientPortal';
import NotFound from './pages/NotFound';
import TransitionsDemo from './pages/TransitionsDemo';
import InteractiveCalculator from './components/InteractiveCalculator';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<'fade-in' | 'fade-out'>('fade-in');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fade-out');
    }
  }, [location, displayLocation]);

  const handleTransitionEnd = () => {
    if (transitionStage === 'fade-out') {
      setDisplayLocation(location);
      setTransitionStage('fade-in');
    }
  };

  return (
    <div
      className={`transition-opacity duration-300 ease-out ${
        transitionStage === 'fade-in' ? 'opacity-100' : 'opacity-0'
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </div>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <PageWrapper key={location.pathname}>
        <main>
          <Routes location={location}>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/about/our-firm" element={<OurFirm />} />
        <Route path="/about/partners" element={<Partners />} />
        <Route path="/about/community-esg" element={<CommunityESG />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/tax-advisory" element={<TaxAdvisory />} />
        <Route path="/services/business-services-cfo" element={<BusinessServices />} />
        <Route path="/services/audit-assurance" element={<AuditAssurance />} />
        <Route path="/services/smsf-superannuation" element={<SMSF />} />
        <Route path="/services/bookkeeping-payroll" element={<Bookkeeping />} />
        <Route path="/services/cloud-accounting-xero" element={<CloudAccounting />} />

        {/* Resources */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/insights-blog" element={<InsightsBlog />} />
        <Route path="/resources/calculators-templates" element={<Calculators />} />
        <Route path="/resources/interactive-calculator" element={<InteractiveCalculator />} />
        <Route path="/resources/faqs" element={<FAQs />} />

        {/* Careers */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/life-at-harbour-finch" element={<LifeAtHF />} />
        <Route path="/careers/open-roles" element={<OpenRoles />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/book-consultation" element={<BookConsultation />} />
        <Route path="/contact/office-locations" element={<OfficeLocations />} />

        {/* Other */}
        <Route path="/client-portal" element={<ClientPortal />} />
        <Route path="/transitions-demo" element={<TransitionsDemo />} />
        <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </PageWrapper>
    </ErrorBoundary>
  );
}


// ⭐ Final App – CLEAN & INSTANT
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-inter">
        <ScrollToTop />
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
