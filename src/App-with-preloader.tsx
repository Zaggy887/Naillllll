function MainContent() {
  return (
    <Routes>
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
  );
}
