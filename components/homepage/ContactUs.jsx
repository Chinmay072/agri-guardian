import React from 'react';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Left side - Contact Form */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <Image
                src="/farmer-illustration.svg"
                alt="Farmer"
                width={150}
                height={200}
                className="absolute -left-20 bottom-0 hidden lg:block"
              />
              <h3 className="text-green-600 font-semibold mb-2">Have Questions?</h3>
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form>
                <div className="mb-4">
                  <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4 flex space-x-4">
                  <input type="email" placeholder="Email" className="w-1/2 p-2 border border-gray-300 rounded" />
                  <input type="tel" placeholder="Phone" className="w-1/2 p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <textarea placeholder="Tell Us About Project" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <button type="submit" className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition duration-300">
                  Get In Touch
                </button>
              </form>
            </div>
          </div>

          {/* Right side - Contact Information */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="bg-green-800 text-white p-8 rounded-lg relative overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="mb-6">Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Hotline</h3>
                <p>+4753378901</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Our Location</h3>
                <p>55 Main Street, The Grand Avenue 2nd Block, New York City</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Official Email</h3>
                <p>info@agri.com</p>
              </div>
              <Image
                src="/plant-decoration.svg"
                alt="Plant Decoration"
                width={100}
                height={100}
                className="absolute bottom-0 right-0 opacity-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;