import React from 'react';
// Import any icons you might want to use
import { FaPrayingHands, FaRegLightbulb, FaBullseye } from 'react-icons/fa';
// CORRECT: Added new icons for the information section
import { FiUsers, FiHeart, FiCpu, FiShield, FiClock, FiMapPin, FiCheckSquare } from 'react-icons/fi';
// CORRECT: Link should be imported from 'react-router-dom' in modern projects
import { Link } from 'react-router';

const AboutPage = () => {
  return (
    <div className="bg-white text-slate-700 antialiased">
      {/* 1. Hero Section */}
      <section className="bg-amber-50 py-20 lg:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-4">
            Bridging Devotion with Digital Innovation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600">
            We are a team of technologists, devotees, and heritage enthusiasts dedicated to making every spiritual journey in India safe, serene, and seamless.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
            <img src="https://c9admin.cottage9.com/uploads/5839/somnath-temple.jpg" alt="A serene temple corridor" className="rounded-xl shadow-2xl w-full h-auto object-cover" />
          </div>
          <div className="space-y-6">
          
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
              Our Journey: From a Crowded Lane to a Clear Vision
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The idea for MandirGo was born during a visit to a revered temple on a festive Sunday afternoon. The spiritual energy was immense, but so was the chaos. We saw elderly devotees struggling in long queues, families anxious about losing their children, and temple staff overwhelmed by the sheer volume of people.
            </p>
           
          </div>
          
        </div>
      </section>
      
      {/* 3. Mission & Vision Section */}
      <section className="bg-slate-800 text-white py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start items-center gap-4">
                <FaBullseye className="text-amber-400 text-3xl" />
                <h3 className="text-3xl font-bold">Our Mission</h3>
            </div>
            <p className="text-slate-300">
              To empower temple administrations across India with intelligent, intuitive technology that manages crowds effectively, ensures the safety of every devotee, and preserves the sacred atmosphere of our holy places.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start items-center gap-4">
                <FaRegLightbulb className="text-amber-400 text-3xl" />
                <h3 className="text-3xl font-bold">Our Vision</h3>
            </div>
            <p className="text-slate-300">
              A future where every devotee can experience a peaceful and profound connection with the divine, free from the stress of overcrowding, making India’s sacred sites global benchmarks in smart, respectful management.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Philosophy/Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Our Core Principles</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 <div className="text-center p-6">
                    <FiHeart className="mx-auto text-4xl text-amber-500 mb-4"/>
                    <h4 className="text-xl font-bold text-slate-800">Respect for Tradition</h4>
                    <p className="text-slate-600 mt-2">Our technology complements and supports sacred rituals, never disrupts them.</p>
                </div>
                 <div className="text-center p-6">
                    <FiUsers className="mx-auto text-4xl text-amber-500 mb-4"/>
                    <h4 className="text-xl font-bold text-slate-800">Human-Centric Design</h4>
                    <p className="text-slate-600 mt-2">We build for everyone—from temple staff to the most elderly devotee.</p>
                </div>
                 <div className="text-center p-6">
                    <FiCpu className="mx-auto text-4xl text-amber-500 mb-4"/>
                    <h4 className="text-xl font-bold text-slate-800">Innovation for Good</h4>
                    <p className="text-slate-600 mt-2">We believe in using cutting-edge technology to solve real-world human challenges.</p>
                </div>
                 <div className="text-center p-6">
                    <FiShield className="mx-auto text-4xl text-amber-500 mb-4"/>
                    <h4 className="text-xl font-bold text-slate-800">Partners in MandirGo</h4>
                    <p className="text-slate-600 mt-2">We work collaboratively with temple trusts to create solutions that last.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. NEW: Plan Your Visit Section */}
      <section className="py-24 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Plan Your Visit</h2>
            <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
              An example of how MandirGo helps provide clear information to devotees. (Example: Kashi Vishwanath Temple, Varanasi)
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Timings Card */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                    <FiClock className="text-amber-500 text-3xl"/>
                    <h3 className="text-2xl font-bold text-slate-800">Temple Timings</h3>
                </div>
                <ul className="space-y-2 text-slate-600">
                    <li><span className="font-semibold">General Darshan:</span> 4:00 AM - 11:00 PM</li>
                    <li><span className="font-semibold">Mangala Aarti:</span> 3:00 AM - 4:00 AM</li>
                    <li><span className="font-semibold">Bhog Aarti:</span> 11:15 AM - 12:20 PM</li>
                    <li><span className="font-semibold">Shayan Aarti:</span> 10:30 PM - 11:00 PM</li>
                    <li className="pt-2 text-sm italic">*Timings may vary on festive days.</li>
                </ul>
            </div>
            {/* How to Reach Card */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                    <FiMapPin className="text-amber-500 text-3xl"/>
                    <h3 className="text-2xl font-bold text-slate-800">How to Reach</h3>
                </div>
                <ul className="space-y-2 text-slate-600">
                    <li><span className="font-semibold">By Air:</span> Lal Bahadur Shastri Airport (VNS), 25 km away.</li>
                    <li><span className="font-semibold">By Train:</span> Varanasi Junction (BSB), 4 km away.</li>
                    <li><span className="font-semibold">By Road:</span> Well-connected by bus services to major cities.</li>
                    <li className="pt-2 text-sm italic">*Local auto-rickshaws and taxis are readily available.</li>
                </ul>
            </div>
            {/* Facilities Card */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                    <FiCheckSquare className="text-amber-500 text-3xl"/>
                    <h3 className="text-2xl font-bold text-slate-800">Available Facilities</h3>
                </div>
                <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2"><FiCheckSquare className="text-green-500"/> Cloakroom & Locker Facility</li>
                    <li className="flex items-center gap-2"><FiCheckSquare className="text-green-500"/> Wheelchair Accessibility</li>
                    <li className="flex items-center gap-2"><FiCheckSquare className="text-green-500"/> Prasad & Refreshment Stalls</li>
                    <li className="flex items-center gap-2"><FiCheckSquare className="text-green-500"/> First-Aid & Medical Center</li>
                    <li className="flex items-center gap-2"><FiCheckSquare className="text-green-500"/> Paid Vehicle Parking</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Section */}
      <footer className="bg-gray-800 text-white mt-12">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-4">MandirGo</h3>
                            <p className="text-gray-400">Divine Peace. Managed Intelligently.</p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">About</h3>
                            <a href="#" className="block text-gray-400 hover:text-white">Our Mission</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Careers</a>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Support</h3>
                            <a href="#" className="block text-gray-400 hover:text-white">Contact Us</a>
                            <a href="#" className="block text-gray-400 hover:text-white">FAQs</a>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Legal</h3>
                            <a href="#" className="block text-gray-400 hover:text-white">Privacy Policy</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Terms of Service</a>
                        </div>
                         <div>
                            <h3 className="font-bold mb-4">Contact</h3>
                            <a href="#" className="block text-gray-400 hover:text-white">Ph no.9856123489</a>
                            <a href="#" className="block text-gray-400 hover:text-white">email:MandirGo@gmail.com</a>
                        </div>
                    </div>
                    <div className="text-center text-gray-500 border-t border-gray-700 mt-8 pt-6">
                        © 2025 MandirGo Technologies Pvt. Ltd. All rights reserved.
                    </div>
                </div>
            </footer>
   
    </div>
  );
};

export default AboutPage;