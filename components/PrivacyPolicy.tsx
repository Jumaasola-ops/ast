import { Check } from 'lucide-react';

export default function PrivacyPolicy() {
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
            Privacy <span className="italic">Policy</span>
          </h1>
          <p className="text-gray-600 text-sm">Last updated: January 2, 2026</p>
        </div>

        <div className="prose prose-sm max-w-none text-gray-600 font-light space-y-6">
          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">1. Introduction</h2>
            <p>
              AsolaSMART-Tech (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">2. Information Collection and Use</h2>
            <p>
              We collect various types of information in connection with the services we provide, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Technical information (IP address, browser type, access times)</li>
              <li>Usage information (pages visited, links clicked, actions taken)</li>
              <li>Communication preferences and feedback</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">3. Use of Data</h2>
            <p>
              AsolaSMART-Tech uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">4. Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">5. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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
