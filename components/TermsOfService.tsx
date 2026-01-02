import { Check } from 'lucide-react';

export default function TermsOfService() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-8">
            <div className="w-4 h-4 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0">
              <Check size={10} className="text-teal-700" />
            </div>
            <span className="text-teal-700 text-xs font-medium">Legal</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight font-light">
            Terms of <span className="italic">Service</span>
          </h1>
          <p className="text-gray-600 text-sm">Last updated: January 2, 2026</p>
        </div>

        <div className="prose prose-sm max-w-none text-gray-600 font-light space-y-6">
          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">1. Agreement to Terms</h2>
            <p>
              By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on AsolaSMART-Tech&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">3. Disclaimer</h2>
            <p>
              The materials on AsolaSMART-Tech&apos;s website are provided on an &apos;as is&apos; basis. AsolaSMART-Tech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">4. Limitations</h2>
            <p>
              In no event shall AsolaSMART-Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AsolaSMART-Tech&apos;s website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on AsolaSMART-Tech&apos;s website could include technical, typographical, or photographic errors. AsolaSMART-Tech does not warrant that any of the materials on its website are accurate, complete, or current. AsolaSMART-Tech may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">6. Links</h2>
            <p>
              AsolaSMART-Tech has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AsolaSMART-Tech of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">7. Modifications</h2>
            <p>
              AsolaSMART-Tech may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Kenya, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">Email: <a href="mailto:info@asolasmarttech.co.ke" className="text-teal-600 hover:text-teal-700">info@asolasmarttech.co.ke</a></p>
              <p className="text-gray-700">Phone: <a href="tel:+254707907000" className="text-teal-600 hover:text-teal-700">+254707907000</a></p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
