import Breadcrumb from "../Common/Breadcrumb";

export const TermService = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms and Conditions"
        description="Last updated: February 10, 2026"
      />

      <section
        id="terms-conditions"
        className="dark:bg-dark text-body-color bg-white py-16 md:py-20 lg:py-28"
      >
        <div className="container mx-auto px-4">
          <div>
            {/* Intro */}
            <div className="prose prose-slate dark:prose-invert mb-10 max-w-none">
              <p className="text-lg leading-relaxed font-medium text-black dark:text-white">
                Please read these terms and conditions carefully before using
                Our Service.
              </p>
            </div>

            <div className="border-body-color/10 my-10 border-t"></div>

            {/* Interpretation and Definitions */}
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl dark:text-white">
                1. Interpretation and Definitions
              </h2>

              <div className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  Interpretation
                </h3>
                <p className="text-base leading-relaxed">
                  The words whose initial letters are capitalized have meanings
                  defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  Definitions
                </h3>
                <p className="mb-6">
                  For the purposes of these Terms and Conditions:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <p>
                      <strong className="text-black dark:text-white">
                        Affiliate
                      </strong>{" "}
                      means an entity that controls, is controlled by, or is
                      under common control with a party, where "control" means
                      ownership of 50% or more of the shares, equity interest or
                      other securities entitled to vote for election of
                      directors or other managing authority.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <p>
                      <strong className="text-black dark:text-white">
                        Country
                      </strong>{" "}
                      refers to: Indonesia
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <p>
                      <strong className="text-black dark:text-white">
                        Company
                      </strong>{" "}
                      (referred to as either "the Company", "We", "Us" or "Our"
                      in these Terms and Conditions) refers to PT Giga Berkah
                      Teknologi, Jalan Lo`Andeng, Desa/Kelurahan Purwodadi, Kec.
                      Blimbing, Kota Malang, Provinsi Jawa Timur Kode Pos:
                      65126.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <p>
                      <strong className="text-black dark:text-white">
                        Device
                      </strong>{" "}
                      means any device that can access the Service such as a
                      computer, a cell phone or a digital tablet.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <p>
                      <strong className="text-black dark:text-white">
                        Service
                      </strong>{" "}
                      refers to the Website.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <p>
                      <strong className="text-black dark:text-white">
                        Terms and Conditions
                      </strong>{" "}
                      (also referred to as "Terms") means these Terms and
                      Conditions, including any documents expressly incorporated
                      by reference, which govern Your access to and use of the
                      Service and form the entire agreement between You and the
                      Company regarding the Service. These Terms and Conditions
                      have been created with the help of the{" "}
                      <a
                        href="https://www.termsfeed.com/terms-conditions-generator/"
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        Terms and Conditions Generator
                      </a>
                      .
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <p>
                      <strong className="text-black dark:text-white">
                        Third-Party Social Media Service
                      </strong>{" "}
                      means any services or content (including data,
                      information, products or services) provided by a third
                      party that is displayed, included, made available, or
                      linked to through the Service.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <p>
                      <strong className="text-black dark:text-white">
                        Website
                      </strong>{" "}
                      refers to XinLeo, accessible from{" "}
                      <a
                        href="https://xinleo.aplikasiku.web.id/"
                        rel="external nofollow noopener"
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        https://xinleo.aplikasiku.web.id/
                      </a>
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <p>
                      <strong className="text-black dark:text-white">
                        You
                      </strong>{" "}
                      means the individual accessing or using the Service, or
                      the company, or other legal entity on behalf of which such
                      individual is accessing or using the Service, as
                      applicable.
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="bg-primary/[0.03] border-primary/10 mb-12 rounded-xl border p-8">
              <h2 className="mb-5 text-2xl font-bold text-black sm:text-3xl dark:text-white">
                Acknowledgment
              </h2>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  These are the Terms and Conditions governing the use of this
                  Service and the agreement between You and the Company. These
                  Terms and Conditions set out the rights and obligations of all
                  users regarding the use of the Service.
                </p>
                <p>
                  Your access to and use of the Service is conditioned on Your
                  acceptance of and compliance with these Terms and Conditions.
                  These Terms and Conditions apply to all visitors, users and
                  others who access or use the Service.
                </p>
                <p className="font-semibold text-black dark:text-white">
                  By accessing or using the Service You agree to be bound by
                  these Terms and Conditions. If You disagree with any part of
                  these Terms and Conditions then You may not access the
                  Service.
                </p>
                <p>
                  You represent that you are over the age of 18. The Company
                  does not permit those under 18 to use the Service.
                </p>
                <p>
                  Your access to and use of the Service is also subject to Our
                  Privacy Policy, which describes how We collect, use, and
                  disclose personal information. Please read Our Privacy Policy
                  carefully before using Our Service.
                </p>
              </div>
            </section>

            {/* Links to Other Websites */}
            <section className="mb-12">
              <h2 className="mb-5 text-2xl font-bold text-black sm:text-3xl dark:text-white">
                Links to Other Websites
              </h2>
              <p className="mb-4 text-base leading-relaxed">
                Our Service may contain links to third-party websites or
                services that are not owned or controlled by the Company.
              </p>
              <p className="mb-6 text-base leading-relaxed">
                The Company has no control over, and assumes no responsibility
                for, the content, privacy policies, or practices of any
                third-party websites or services. You further acknowledge and
                agree that the Company shall not be responsible or liable,
                directly or indirectly, for any damage or loss caused or alleged
                to be caused by or in connection with the use of or reliance on
                any such content, goods or services available on or through any
                such websites or services.
              </p>

              <div className="border-primary/20 border-l-4 pl-6">
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  Links from a Third-Party Social Media Service
                </h3>
                <p className="mb-4 text-base leading-relaxed">
                  The Service may display, include, make available, or link to
                  content or services provided by a Third-Party Social Media
                  Service. A Third-Party Social Media Service is not owned or
                  controlled by the Company, and the Company does not endorse or
                  assume responsibility for any Third-Party Social Media
                  Service.
                </p>
                <p className="text-base leading-relaxed italic">
                  You acknowledge and agree that the Company shall not be
                  responsible or liable, directly or indirectly, for any damage
                  or loss caused or alleged to be caused by or in connection
                  with Your access to or use of any Third-Party Social Media
                  Service.
                </p>
              </div>
            </section>

            <div className="border-body-color/10 my-10 border-t"></div>

            {/* Termination & Liability */}
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <section className="border-body-color/10 rounded-lg border p-6">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Termination
                </h2>
                <p className="text-base leading-relaxed">
                  We may terminate or suspend Your access immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if You breach these Terms and
                  Conditions.
                </p>
                <p className="mt-4 font-medium">
                  Upon termination, Your right to use the Service will cease
                  immediately.
                </p>
              </section>

              <section className="border-body-color/10 rounded-lg border bg-red-50/30 p-6 dark:bg-red-900/10">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-red-400">
                  Limitation of Liability
                </h2>
                <p className="mb-4 text-sm leading-relaxed">
                  The entire liability of the Company and any of its suppliers
                  under any provision of these Terms shall be limited to the
                  amount actually paid by You through the Service or 100 USD if
                  You haven't purchased anything.
                </p>
                <p className="text-xs leading-relaxed uppercase opacity-80">
                  To the maximum extent permitted by law, in no event shall the
                  Company be liable for any special, incidental, or
                  consequential damages whatsoever.
                </p>
              </section>
            </div>

            {/* AS IS Disclaimer */}
            <section className="bg-primary/5 border-body-color/10 mb-12 rounded-lg border p-8">
              <h2 className="mb-5 text-2xl font-bold text-black dark:text-white">
                "AS IS" and "AS AVAILABLE" Disclaimer
              </h2>
              <div className="space-y-4 text-sm leading-relaxed tracking-wide uppercase">
                <p>
                  The Service is provided to You "AS IS" and "AS AVAILABLE" and
                  with all faults and defects without warranty of any kind.
                </p>
                <p>
                  The Company provides no warranty or undertaking, and makes no
                  representation of any kind that the Service will meet Your
                  requirements, achieve any intended results, be compatible or
                  work with any other software, applications, systems or
                  services.
                </p>
                <p>
                  Without limiting the foregoing, neither the Company nor any of
                  the company's provider makes any representation or warranty of
                  any kind, express or implied as to the operation or
                  availability of the Service, or that the Service is free of
                  viruses or other harmful components.
                </p>
              </div>
            </section>

            {/* Legal Clauses */}
            <div className="mb-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
              <section>
                <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Governing Law
                </h2>
                <p className="text-base">
                  The laws of the Country, excluding its conflicts of law rules,
                  shall govern these Terms and Your use of the Service.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Disputes Resolution
                </h2>
                <p className="text-base">
                  If You have any concern or dispute, You agree to first try to
                  resolve the dispute informally by contacting the Company.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                  EU & US Compliance
                </h2>
                <p className="text-base leading-relaxed">
                  EU users benefit from mandatory local laws. US users warrant
                  they are not in embargoed countries or on restricted party
                  lists.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Severability & Waiver
                </h2>
                <p className="text-base leading-relaxed">
                  Invalid provisions will be interpreted to achieve their
                  objectives. Failure to exercise a right does not constitute a
                  waiver.
                </p>
              </section>
            </div>

            {/* Changes and Contact */}
            <section className="mt-16 space-y-10">
              <div className="border-primary bg-primary/5 border-l-4 p-8">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Changes to These Terms
                </h2>
                <p className="text-base leading-relaxed">
                  We reserve the right to modify these Terms at any time. For
                  material revisions, we will make reasonable efforts to provide
                  at least 30 days' notice.
                </p>
              </div>

              <footer className="bg-primary/5 border-primary/10 rounded-lg border p-8 text-center">
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Contact Us
                </h2>
                <p className="text-body-color mb-6 text-base">
                  If you have any questions about this Privacy Policy, You can
                  contact us:
                </p>
                <a
                  href="mailto:mzhuroh99@gmail.com"
                  className="bg-primary hover:bg-opacity-90 shadow-primary/20 inline-block rounded-full px-8 py-3 text-base font-semibold text-white shadow-lg transition"
                >
                  mzhuroh99@gmail.com
                </a>
              </footer>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
