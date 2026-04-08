import React, { useEffect } from "react";
import Navbar from "../component/Navbar";

export default function PrivacyPolicy() {
  useEffect(() => {
      window.scroll(0, 0);
    }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white py-16 px-4 md:px-20 pt-32">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-8 md:p-12 rounded-lg">
          
          <h1 className="text-3xl font-bold mb-2">PRIVACY POLICY</h1>
          <p className="mb-6 text-gray-700">Effective Date: April 8, 2026 | Website: Trackplacer.online</p>

          <div className="space-y-6 text-gray-800 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
              <p>Welcome to Trackplacer.online, your trusted online platform for accessing train ticket booking information and travel-related services. At Trackplacer.online, we understand the importance of privacy in today’s digital environment, and we are fully committed to protecting the personal information of our users while delivering a seamless and reliable browsing experience.</p>
              <p className="mt-2">This Privacy Policy explains in detail how we collect, use, store, process, and protect your personal and non-personal information when you visit or interact with our website. Whether you are browsing for train ticket options, exploring travel routes, or being redirected to third-party booking platforms, your data privacy remains one of our top priorities.</p>
              <p className="mt-2">We strive to maintain transparency in our data practices. This means clearly informing you about what data we collect, why we collect it, how it is used, and under what circumstances it may be shared. By doing so, we aim to build trust and ensure that users can make informed decisions while using our services.</p>
              <p className="mt-2">By accessing or using Trackplacer.online, you acknowledge that you have read, understood, and agreed to the terms outlined in this Privacy Policy. If you do not agree with any part of this policy, we recommend that you discontinue use of our website.</p>
              <p className="mt-2">We may update this Privacy Policy from time to time to reflect changes in legal requirements, technology, or our business operations. We encourage users to review this page periodically to stay informed about how their information is being protected.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <p className="mt-2 font-semibold">Personal Information:</p>
              <ul className="list-disc ml-6">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
              </ul>
              <p className="mt-2 font-semibold">Non-Personal Information:</p>
              <ul className="list-disc ml-6">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Location data (approximate)</li>
              </ul>
              <p className="mt-4 font-semibold">Cookies & Tracking Technologies:</p>
              <p>We use cookies, pixels, and similar tracking technologies to enhance user experience and analyze traffic.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. How We Use Your Information</h2>
              <p>We use the collected data to:</p>
              <ul className="list-disc ml-6">
                <li>Provide and improve our services</li>
                <li>Respond to customer inquiries</li>
                <li>Share booking-related updates</li>
                <li>Send promotional or marketing communications</li>
                <li>Analyze website performance and user behavior</li>
                <li>Ensure website security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Business Model Disclosure</h2>
              <p>Trackplacer.online operates as an information and redirection platform. We do not directly sell train tickets. Instead, we may:</p>
              <ul className="list-disc ml-6">
                <li>Redirect users to third-party booking platforms</li>
                <li>Connect users with service providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Sharing of Information</h2>
              <p>We may share your information with:</p>
              <p className="mt-2 font-semibold">Service Providers:</p>
              <p>Hosting providers, Analytics tools, Marketing platforms</p>
              <p className="mt-2 font-semibold">Third-Party Booking Platforms:</p>
              <p>When you are redirected, your interaction is governed by their policies.</p>
              <p className="mt-2 font-semibold">Legal Authorities:</p>
              <p>If required by law, regulation, or legal process.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">6. Third-Party Services</h2>
              <p>Our website may include integrations such as:</p>
              <ul className="list-disc ml-6">
                <li>Analytics tools (e.g., Google Analytics)</li>
                <li>Advertising platforms (e.g., Meta Ads)</li>
              </ul>
              <p className="mt-2">These third parties may collect data according to their own privacy policies.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">7. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your data. However, no online transmission is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">8. Data Retention</h2>
              <p>We retain your personal data only as long as necessary for: Business purposes, Legal compliance, Dispute resolution.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">9. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc ml-6">
                <li>Access your data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="mt-4">To exercise these rights, contact us at: support@trackplacer.com</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">10. Children’s Privacy</h2>
              <p>Our website is not intended for users under the age of 18. We do not knowingly collect data from children.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">11. External Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">12. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date.</p>
            </section>

            <section className="pt-6 border-t border-gray-100">
              <h2 className="text-xl font-bold mb-3">Contact Information</h2>
              <p>Email: support@trackplacer.com</p>
              <p>Phone: +18663250204</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Grievance Officer</h2>
              <p>Name: Trackplacer.online</p>
              <p>Email: support@trackplacer.com</p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}