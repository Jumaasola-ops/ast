import { Check, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-8">
            <div className="w-4 h-4 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0">
              <Check size={10} className="text-teal-700" />
            </div>
            <span className="text-teal-700 text-xs font-medium">Get In Touch</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight font-light">
            Contact <span className="italic">Us</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed font-light mx-auto">
            Have a question or ready to start your digital transformation journey? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100">
                <Phone size={24} className="text-teal-600" />
              </div>
            </div>
            <h3 className="text-lg font-serif text-gray-900 mb-2 font-light">Phone</h3>
            <a href="tel:+254707907000" className="text-teal-600 hover:text-teal-700 transition font-light">
              +254707907000
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100">
                <Mail size={24} className="text-teal-600" />
              </div>
            </div>
            <h3 className="text-lg font-serif text-gray-900 mb-2 font-light">Email</h3>
            <a href="mailto:info@asolasmarttech.co.ke" className="text-teal-600 hover:text-teal-700 transition font-light">
              info@asolasmarttech.co.ke
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100">
                <MapPin size={24} className="text-teal-600" />
              </div>
            </div>
            <h3 className="text-lg font-serif text-gray-900 mb-2 font-light">Location</h3>
            <p className="text-gray-600 font-light">
              Tech Hub, Innovation Park<br />
              Nairobi, Kenya
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-12">
          <h2 className="text-2xl font-serif text-gray-900 mb-8 font-light">Send us a Message</h2>
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-light text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 font-light"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 font-light"
                placeholder="your@email.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-light text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 font-light"
                placeholder="How can we help?"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-light text-gray-700 mb-2">Message</label>
              <textarea 
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 font-light"
                placeholder="Tell us more about your project..."
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-3 transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
