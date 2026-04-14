import UtilityBar from "@/components/UtilityBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PrivacyTableOfContents from "@/components/PrivacyTableOfContents";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - RamSoft",
  description:
    "RamSoft is committed to protecting your privacy. Read our privacy policy to learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <UtilityBar />
      <Nav />
      <main>
        {/* Hero Banner */}
        <section className="bg-dodger py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-6">
            <nav className="flex items-center gap-2 font-[family-name:var(--font-manrope)] text-sm mb-8">
              <a href="/" className="text-white/70 hover:text-white transition-colors">Home</a>
              <span className="text-white/40">/</span>
              <span className="text-white/70">Legal</span>
              <span className="text-white/40">/</span>
              <span className="text-white font-semibold">Privacy Policy</span>
            </nav>
            <h1 className="font-[family-name:var(--font-hanken)] font-extrabold text-[36px] lg:text-[56px] text-white leading-tight">
              Privacy Policy
            </h1>
          </div>
        </section>

        {/* Content */}
        <section id="top" className="py-14 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-6 lg:flex lg:gap-10">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block lg:w-[260px] shrink-0">
              <div className="sticky top-[88px]">
                <PrivacyTableOfContents />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0 privacy-prose">
              <p className="text-navy-mid font-semibold text-sm mb-6">
                *Last updated: April 1, 2026
              </p>

              {/* Introduction */}
              <h2 id="introduction">Introduction</h2>
              <p>
                RamSoft Inc. (&quot;RamSoft,&quot; &quot;we,&quot; &quot;us,&quot;
                or &quot;our&quot;) is committed to protecting your privacy. This
                Privacy Policy describes how we collect, use, disclose, and
                safeguard your information when you use our Services. By accessing
                or using any RamSoft Service, you consent to the information
                handling practices described herein. We encourage you to read this
                Privacy Policy in its entirety before using our Services. If you do
                not agree with these terms, please refrain from using our Services.
              </p>

              {/* Definitions */}
              <h2 id="definitions">Definitions</h2>
              <ul>
                <li><strong>&quot;You&quot; / &quot;User&quot;:</strong> The individual or legal entity accessing or using the Service.</li>
                <li><strong>&quot;Company&quot; / &quot;RamSoft&quot;:</strong> RamSoft Inc., including its subsidiaries, alliances, and affiliates.</li>
                <li><strong>&quot;Affiliate&quot;:</strong> Any entity that controls, is controlled by, or is under common control with RamSoft.</li>
                <li><strong>&quot;Account&quot;:</strong> A unique account created to access the Service.</li>
                <li><strong>&quot;Service(s)&quot;:</strong> Any product, platform, application, or offering provided by RamSoft.</li>
                <li><strong>&quot;Service Provider&quot;:</strong> A third-party entity that processes data on behalf of RamSoft to facilitate, support, or analyze the Service.</li>
                <li><strong>&quot;Personal Data&quot;:</strong> Any information relating to an identified or identifiable natural person.</li>
                <li><strong>&quot;Cookies&quot;:</strong> Small data files placed on your device that store browsing preferences and session details.</li>
                <li><strong>&quot;Usage Data&quot;:</strong> Data collected automatically during your interaction with the Service (e.g., page views, session duration, device identifiers).</li>
                <li><strong>&quot;Website(s)&quot;:</strong> Publicly accessible RamSoft web properties, including ramsoft.com, omegaai.com, blume.omegaai.com, and support.ramsoft.com.</li>
              </ul>

              {/* Collecting and Using Personal Data */}
              <h2 id="collecting-and-using-personal-data">Collecting and Using Personal Data</h2>
              <h3>Personal Data You Provide</h3>
              <p>
                When you register, make a purchase, or interact with our Services,
                we may request personally identifiable information including:
              </p>
              <ul>
                <li>Email address</li>
                <li>First and last name</li>
                <li>Phone number</li>
                <li>Mailing address (including street, city, state/province, ZIP/postal code, and country)</li>
              </ul>
              <h3>Usage Data (Automatically Collected)</h3>
              <p>
                When you access the Service, we automatically collect certain
                technical and behavioral data, including:
              </p>
              <ul>
                <li>Device type and unique device identifiers</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on each page</li>
                <li>Date, time, and duration of visits</li>
                <li>Operating system and platform</li>
                <li>IP address (full and/or anonymized)</li>
                <li>Referring URLs and search queries</li>
                <li>Error diagnostic information</li>
              </ul>
              <h3>Tracking Technologies and Cookies</h3>
              <p>
                The Service uses cookies and similar tracking technologies (such as
                web beacons, pixels, and local storage) to enhance your experience
                and analyze usage patterns. You can configure your browser to refuse
                or limit cookies; however, doing so may restrict certain Service
                functionality. For detailed information, please refer to our Cookie
                Policy.
              </p>

              {/* Use of Personal Data */}
              <h2 id="use-of-personal-data">Use of Personal Data</h2>
              <p>RamSoft processes your Personal Data for the following purposes:</p>
              <ul>
                <li><strong>Service Delivery:</strong> To provide, operate, maintain, and improve our Services.</li>
                <li><strong>Contractual Obligations:</strong> To fulfill agreements with you, including product and service purchases.</li>
                <li><strong>Communication:</strong> To contact you via email, telephone, SMS, push notifications, or other channels regarding service updates, security alerts, and administrative messages.</li>
                <li><strong>Marketing &amp; Promotions:</strong> To send news, special offers, and information about similar goods and services — unless you have opted out of such communications.</li>
                <li><strong>Request Management:</strong> To process and respond to your inquiries and support tickets.</li>
                <li><strong>Analytics &amp; Improvement:</strong> To analyze usage trends, monitor performance, and develop new features.</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and enforceable governmental requests.</li>
                <li><strong>Security &amp; Fraud Prevention:</strong> To detect, investigate, and prevent unauthorized or illegal activity.</li>
              </ul>
              <h3>Data Sharing</h3>
              <p>
                RamSoft does not sell your Personal Data. We may share your
                information in the following circumstances:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> Trusted third-party vendors performing functions such as hosting, analytics, payment processing, and customer support — contractually obligated to use data solely for specified purposes.</li>
                <li><strong>Affiliates:</strong> Information shared with affiliated entities who are required to honor this Privacy Policy.</li>
                <li><strong>Business Partners:</strong> Third parties with whom we offer joint products, services, or promotions.</li>
                <li><strong>With Your Consent:</strong> For any other purpose with your explicit prior consent.</li>
              </ul>

              {/* Retention */}
              <h2 id="retention-of-personal-data">Retention of Personal Data</h2>
              <p>
                RamSoft retains Personal Data only for as long as reasonably
                necessary to fulfill the purposes for which it was collected,
                including to satisfy legal, regulatory, tax, or accounting
                requirements, resolve disputes, and enforce our agreements. Usage
                Data is generally retained for shorter periods unless required for
                Service security, functionality improvements, or legal retention
                mandates. Upon expiration of the retention period, data is securely
                deleted or irreversibly anonymized.
              </p>

              {/* Transfer */}
              <h2 id="transfer-of-personal-data">Transfer of Personal Data</h2>
              <p>
                Your Personal Data may be transferred to and processed in
                jurisdictions outside your country of residence, where data
                protection laws may differ. When transferring data internationally,
                RamSoft implements appropriate safeguards, including:
              </p>
              <ul>
                <li>Transferring data only to countries recognized as providing adequate data protection</li>
                <li>Executing standard contractual clauses (SCCs) or other approved transfer mechanisms</li>
                <li>Relying on specific legal exemptions where applicable</li>
              </ul>
              <p>
                By consenting to this Privacy Policy, you acknowledge and agree to
                such transfers. RamSoft ensures all transferred data is handled
                securely and in accordance with this Policy.
              </p>

              {/* Disclosure */}
              <h2 id="disclosure-of-personal-data">Disclosure of Personal Data</h2>
              <h3>Business Transactions</h3>
              <p>
                In the event of a merger, acquisition, reorganization, or asset
                sale, your Personal Data may be transferred as part of that
                transaction. You will be notified before your data becomes subject
                to a different Privacy Policy.
              </p>
              <h3>Law Enforcement</h3>
              <p>
                RamSoft may disclose Personal Data if required by law or in
                response to valid, binding requests from public authorities (e.g.,
                a court order or government agency).
              </p>
              <h3>Other Legal Requirements</h3>
              <p>
                We may disclose Personal Data in good faith when we believe such
                action is necessary to:
              </p>
              <ul>
                <li>Comply with a legal obligation or regulatory requirement</li>
                <li>Protect and defend the rights, property, or safety of RamSoft</li>
                <li>Prevent or investigate potential wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of users or the public</li>
                <li>Defend against legal liability</li>
              </ul>
              <p>All disclosures are limited to the minimum information reasonably necessary.</p>

              {/* Security */}
              <h2 id="security-of-personal-data">Security of Personal Data</h2>
              <p>
                RamSoft employs commercially reasonable administrative, technical,
                and physical safeguards to protect your Personal Data, including
                SSL/TLS encryption, access controls, regular security assessments,
                and cyber insurance coverage. While we strive to protect your data,
                no method of electronic transmission or storage is 100% secure, and
                absolute security cannot be guaranteed.
              </p>
              <h3>Breach Notification</h3>
              <p>
                In the event of a personal data breach likely to result in a risk
                to individuals&apos; rights and freedoms, RamSoft will:
              </p>
              <ul>
                <li>Notify the relevant supervisory authority without undue delay — ideally within 72 hours — in accordance with applicable laws</li>
                <li>
                  Notify affected individuals when the breach poses a high risk, providing:
                  <ul className="mt-2">
                    <li>A description of the nature of the breach</li>
                    <li>The categories and approximate number of individuals and records affected</li>
                    <li>The likely consequences of the breach</li>
                    <li>The measures taken or proposed to address and mitigate the breach</li>
                  </ul>
                </li>
              </ul>

              {/* Deletion */}
              <h2 id="deletion-of-personal-data">Deletion of Personal Data</h2>
              <p>
                Upon receiving a valid written request to cease processing your
                Personal Data, RamSoft will restrict further active processing and
                initiate appropriate deletion procedures.
              </p>
              <p>
                Note: Complete erasure from backups, archives, disaster recovery
                systems, and infrastructure logs may not be technically feasible in
                all cases. Where full erasure is not possible, RamSoft will:
              </p>
              <ul>
                <li>Extend all confidentiality obligations to the retained data</li>
                <li>Restrict further active processing to only those purposes that make immediate erasure infeasible</li>
                <li>Maintain all applicable security protections for as long as the data is retained</li>
              </ul>
              <p>
                To submit a deletion request, contact{" "}
                <a href="mailto:privacy@ramsoft.com">privacy@ramsoft.com</a>.
                Certain data may be retained where required by applicable legal or
                regulatory obligations.
              </p>

              {/* Children's Privacy */}
              <h2 id="childrens-privacy">Children&apos;s Privacy</h2>
              <p>
                RamSoft is committed to protecting the privacy of minors. Where we
                process personal information of individuals below the legally
                required consent age, we obtain verifiable parent or legal guardian
                consent before collection, implement appropriate safeguards, and
                limit data collection to what is strictly necessary. Parents or
                guardians who believe their child&apos;s information was collected
                without proper consent should contact{" "}
                <a href="mailto:privacy@ramsoft.com">privacy@ramsoft.com</a>{" "}
                immediately for investigation and corrective action.
              </p>

              {/* Additional Jurisdictions */}
              <h2 id="additional-jurisdictions">Additional Information for Certain Jurisdictions</h2>

              {/* CCPA */}
              <h2 id="ccpa">I. California — California Consumer Privacy Act (CCPA)</h2>
              <p>
                California residents exercising CCPA rights should contact us via
                the Contact Us section or email{" "}
                <a href="mailto:privacy@ramsoft.com">privacy@ramsoft.com</a>. We
                will endeavor to respond within 45 days, with a possible 45-day
                extension when reasonably necessary (with prior notice).
              </p>
              <p>Your rights under the CCPA include:</p>
              <ul>
                <li><strong>Right to Know &amp; Access:</strong> Request disclosure of collected Personal Information categories and specific pieces, sources of collection, business purposes, and third-party sharing details.</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate Personal Information we maintain.</li>
                <li><strong>Right to Deletion:</strong> Request deletion of collected Personal Information, subject to legal exceptions.</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
                <li><strong>Right to Opt Out of Sale (&quot;Do Not Sell My Information&quot;):</strong> Opt out of personal information sales by submitting a request to <a href="mailto:privacy@ramsoft.com">privacy@ramsoft.com</a>.</li>
              </ul>

              {/* PIPEDA */}
              <h2 id="pipeda">II. Canada — PIPEDA</h2>
              <p>
                Canadian users may review, access, or request corrections to their
                personally identifiable information by emailing{" "}
                <a href="mailto:privacy@ramsoft.com">privacy@ramsoft.com</a>.
              </p>

              {/* DPDPA */}
              <h2 id="dpdpa">III. India — Digital Personal Data Protection Act (DPDPA), 2023</h2>
              <p>
                Indian users&apos; personal data processing is governed by the
                Digital Personal Data Protection Act, 2023.
              </p>
              <h3>Roles</h3>
              <ul>
                <li><strong>Data Principals:</strong> Individuals whose personal data is processed</li>
                <li><strong>Data Fiduciaries:</strong> Organizations determining the purpose and means of processing</li>
                <li><strong>Data Processors:</strong> RamSoft, processing data per Data Fiduciary instructions</li>
              </ul>
              <h3>Data Principal Rights</h3>
              <ul>
                <li><strong>Right to Access Information:</strong> Request confirmation of processing, categories, purposes, and sharing entities.</li>
                <li><strong>Right to Withdraw Consent:</strong> Revoke consent at any time; prior processing remains lawful.</li>
                <li><strong>Right to Grievance Redressal:</strong> Raise processing concerns; RamSoft will address within a reasonable timeframe.</li>
                <li><strong>Right to Nominate:</strong> Nominate another individual to exercise your rights upon death or incapacity.</li>
              </ul>
              <p>
                <strong>Grievance Redressal:</strong> Contact the Data Protection
                Officer at <a href="mailto:dpo@ramsoft.com">dpo@ramsoft.com</a>.
              </p>

              {/* GDPR */}
              <h2 id="gdpr">IV. European Economic Area — General Data Protection Regulation (GDPR)</h2>

              <h3>A. General</h3>
              <p>
                This section establishes consistent data protection standards for
                all processing of EU/EEA personal data, transfers outside the
                EU/EEA, and safeguards for external transfers.
              </p>

              <h3>1. Contact</h3>
              <p><strong>Data Processor:</strong> RamSoft Inc., 8 King Street East, Toronto, ON, Canada</p>
              <p><strong>EU-GDPR Representative:</strong> AF Pharma Service Europe SL, Muntaner 281, 08021 Barcelona, Spain</p>
              <p><strong>Data Protection Officer:</strong> <a href="mailto:dpo@ramsoft.com">dpo@ramsoft.com</a></p>

              <h3>2. Scope of Data Protection</h3>
              <p>
                Data protection applies to personal data — information relating to
                identified or identifiable natural persons. Contact{" "}
                <a href="mailto:privacy@ramsoft.com">privacy@ramsoft.com</a> with
                questions; identity validation may be required.
              </p>

              <h3>3. Your Rights Under the GDPR</h3>
              <ul>
                <li><strong>Right to Access:</strong> Obtain confirmation of whether your personal data is processed, which data, and for what purposes.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate stored data without undue delay.</li>
                <li><strong>Right to Erasure (&quot;Right to Be Forgotten&quot;):</strong> Request deletion of personal data where legally permissible.</li>
                <li><strong>Right to Restriction of Processing:</strong> Request limitation of processing in certain circumstances.</li>
                <li><strong>Right to Withdraw Consent:</strong> Revoke previously granted consent; prior processing remains lawful.</li>
                <li><strong>Right to Be Informed:</strong> Know how your data is collected, used, and processed in a clear and transparent manner.</li>
                <li><strong>Right to Data Portability:</strong> Request your data in a structured, commonly used, machine-readable format, or request transfer to another controller.</li>
                <li><strong>Right to Object:</strong> Object to personal data processing in certain circumstances, including direct marketing.</li>
              </ul>

              <h3>4. Retention Period</h3>
              <p>
                Data is retained only as long as necessary for collection purposes
                or as legally required. Upon expiry, data is securely deleted or
                anonymized per the limitations described in this Policy.
              </p>

              <h3>5. SSL/TLS Encryption</h3>
              <p>
                This site uses SSL/TLS encryption to protect confidential content
                in transit. An encrypted connection is indicated by
                &quot;https://&quot; and a lock icon in your browser address bar.
              </p>

              <h3>6. Children</h3>
              <p>
                Where we process personal information of individuals below
                consent-required ages, verifiable parent or legal guardian consent
                is obtained. Parents or guardians who believe minor information was
                improperly collected should contact{" "}
                <a href="mailto:privacy@ramsoft.com">privacy@ramsoft.com</a>.
              </p>

              <h3>7. International Transfers from the EU/EEA</h3>
              <p>
                RamSoft transfers personal data from the EU/EEA to third countries
                only when:
              </p>
              <ul>
                <li>The destination country is recognized by the EU Commission as providing adequate data protection</li>
                <li>Transfers are governed by EU Standard Contractual Clauses (SCCs)</li>
                <li>Other approved safeguards under applicable GDPR provisions are in place</li>
                <li>Specific legal exemptions apply (e.g., establishment or defense of legal claims)</li>
              </ul>

              <h3>8. Monitoring and Reporting on Third-Country Regulations</h3>
              <ul>
                <li>Operations outside the primary region must immediately inform the Data Protection Officer if local laws impede data protection obligation fulfillment</li>
                <li>The Company assesses situations to identify practical solutions aligned with Policy objectives</li>
                <li>If compelled to withhold information from supervisory authorities, the Company actively seeks to overturn restrictions and provides annual disclosure request summaries</li>
                <li>Personal data transfers to public authorities must be justified, proportionate, and necessary in an open society</li>
                <li>Data subjects may enforce these provisions</li>
              </ul>

              <h3>B. Data Processing When Using Our Website</h3>

              <h4>1. Technical Website Provision</h4>
              <p>Data transmitted by your device when accessing the website includes:</p>
              <ul>
                <li>Access date and time</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Previously visited website URL</li>
                <li>Data transmission volume</li>
                <li>Requested domain</li>
                <li>Data retrieval success notifications</li>
                <li>Search terms</li>
                <li>Abbreviated/anonymized IP and full IP address</li>
                <li>Error diagnostic information</li>
              </ul>

              <h4>2. Contact Forms</h4>
              <p>
                Contact form, email, and support data is processed based on the
                nature of the inquiry — consent for informational inquiries, or
                pre-contractual obligations for contract-related contact. Salesforce
                Marketing Cloud processes data on our behalf.
              </p>

              <h4>3. Newsletter</h4>
              <p>
                Newsletter registration processes your email address. You may
                withdraw consent via email to{" "}
                <a href="mailto:privacy@ramsoft.com">privacy@ramsoft.com</a> or
                using the unsubscribe link in each newsletter.
              </p>

              <h4>4. Cookies, Statistics, Advertising, Tracking, and Retargeting</h4>
              <p>
                The following services process data on our behalf per their
                respective privacy policies: Google Analytics, Google Web Fonts,
                Google reCAPTCHA, Salesforce Marketing Cloud, LinkedIn, and
                Qualified Chatbot.
              </p>
              <p>
                Twilio Inc. provides communication and notification services. Users
                manage notifications via mobile device settings.
              </p>

              <h3>C. Data Processing When Using Our Service</h3>
              <p>
                Technical operating data enables secure website/app operation and
                contractual service provision. Microsoft Azure hosts the web
                application, processing meta and communication data.
              </p>

              <h4>1. Technical Web Application Provision</h4>
              <p>Technical data is collected as described above to ensure secure and reliable operation.</p>

              <h4>2. Technical Mobile Application Provision</h4>
              <p>
                App downloads transmit personal data to the App Store or Google Play
                Store. We process this data only as necessary for application
                download. Blume&reg; registration requires account creation via the
                web browser/mobile application or through third-party providers
                (Facebook, Apple, Microsoft, Google). Note: Removing a third-party
                login connection does not automatically delete your personal data
                from RamSoft.
              </p>

              <h4>3. Blume&reg; User Account Registration</h4>
              <p><strong>Required Information:</strong></p>
              <ul>
                <li>First and last name</li>
                <li>Email address</li>
                <li>Encrypted password</li>
              </ul>
              <p><strong>Optional Information:</strong></p>
              <ul>
                <li>Middle name, Date of birth, Language preference</li>
                <li>Social Security / Identification Number</li>
                <li>Health status, Mother&apos;s maiden name</li>
                <li>Mailing address (state, province, ZIP/postal code, city, country)</li>
                <li>Phone number, Emergency contact</li>
              </ul>

              <h4>4. Document Management and Sharing</h4>
              <p>
                Users may upload historical reports, medical image data, and patient
                care documents, and optionally share them with healthcare providers.
                RamSoft hosts and stores this data but does not determine the
                purposes for which it is used.
              </p>

              <h4>5. Communication and Notifications</h4>
              <p>
                Twilio Inc. provides communication and notification services. Users
                can manage, enable, or disable notifications via mobile device
                settings.
              </p>

              <h4>6. Data Subject Requests, Contact, and Bug Tracking</h4>
              <p>
                Atlassian Inc.&apos;s Jira ticketing system handles claims and
                inquiries submitted via email or contact forms and serves as the
                primary bug tracking tool.
              </p>

              <h4>7. Search Functionality</h4>
              <p>
                Elasticsearch provides the search, navigation, and filtering
                capabilities within the Service.
              </p>

              <h4>8. Crash Reporting and Troubleshooting</h4>
              <p>
                Datadog collects application logs, crash reports, and user
                interaction records for diagnostic purposes. The legal basis is
                consent, which may be withdrawn at any time.
              </p>

              <h4>9. Browser Refresh Within the App</h4>
              <p>
                Twilio Sync provides real-time page refresh. Twilio Sync stores
                process metadata for 120 days before deletion and does not store
                personal or sensitive Service-generated information.
              </p>

              <h3>D. Data Processing on Behalf of Healthcare Facilities</h3>
              <h4>1. Appointment Booking</h4>
              <p>
                The calendar and appointment booking features process personal data
                on behalf of the healthcare facility to manage patient and user
                accounts, enable appointment scheduling and calendar functionality,
                provide customer support, and share appointment-relevant information
                with the healthcare provider. In these cases, the healthcare
                facility acts as the data controller, and RamSoft processes data
                strictly per their instructions.
              </p>

              {/* Links to Other Websites */}
              <h2 id="links-to-other-websites">Links to Other Websites</h2>
              <p>
                The Service may contain links to websites or services not operated
                or controlled by RamSoft. We strongly encourage you to review the
                privacy policy of every third-party site you visit. RamSoft assumes
                no responsibility for the content, privacy policies, or practices
                of any third-party sites.
              </p>

              {/* Changes */}
              <h2 id="changes">Changes to This Privacy Policy</h2>
              <p>
                RamSoft may periodically update this Privacy Policy. When we make
                changes, we will update the &quot;Last Updated&quot; date at the
                top of this document. For material changes that significantly affect
                your rights, we may provide additional notice through the Service or
                via email. We encourage you to review this Policy periodically. Your
                continued use of the Service after changes constitutes acceptance of
                the updated terms.
              </p>

              {/* Contact Us */}
              <h2 id="contact-us">Contact Us</h2>
              <p>
                For privacy matters:{" "}
                <a href="mailto:privacy@ramsoft.com">privacy@ramsoft.com</a>
              </p>
              <p>
                For GDPR/DPDPA data protection matters:{" "}
                <a href="mailto:dpo@ramsoft.com">dpo@ramsoft.com</a>
              </p>
              <p>
                Your request will be directed to the appropriate compliance
                oversight individuals.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
