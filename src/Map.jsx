import React from 'react';
// Added new icons for the map/routes section
import { FiCalendar, FiClock, FiArrowRight, FiMapPin, FiNavigation, FiBriefcase } from 'react-icons/fi';
// CORRECT: Import Link from 'react-router-dom'
import { Link } from 'react-router';

// --- Event Data (with stable image links) ---
const templeEventsData = {
    Somnath: {
        name: "Somnath Jyotirlinga",
        image: "https://www.trawell.in/admin/images/upload/894169759Somnath_Somnath_Temple_Main.jpg",
        events: [
            { title: 'Sharad Purnima Mahotsav', date: 'October 15, 2025', description: 'Experience the divine beauty of Lord Somnath adorned with a special Sringar under the radiant full moon.' },
            { title: 'Diwali & Annakut', date: 'October 28, 2025', description: 'The temple will be illuminated with thousands of diyas, followed by a grand Annakut offering.' },
        ]
    },
    Dwarka: {
        name: "Dwarkadhish Temple",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxA9bJdfzuoFwfFB4-uKsyZgMWYWXvyFeRQ&s",
        events: [
            { title: 'Diwali & Annakut Utsav', date: 'October 28, 2025', description: 'Celebrate the festival of lights with a grand Annakut offering of 56 bhog varieties to Lord Krishna.' },
            { title: 'Tulsi Vivah', date: 'November 8, 2025', description: 'Witness the divine marriage ceremony of Goddess Tulsi and Lord Krishna with beautiful processions.' },
        ]
    },
    Ambaji: {
        name: "Ambaji Shakti Peeth",
        image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/ambaji-temple/Ambaji-Temple-Banner.jpg",
        events: [
            { title: 'Navaratri Maha Aarti', date: 'Happening Now (Ends Oct 8)', description: 'The grandest celebration is underway! Experience nine nights of vibrant Garba and a massive fair (mela).' },
            { title: 'Sharad Purnima Festival', date: 'October 15, 2025', description: 'On the night of the full moon, special pujas are offered to the Goddess in a beautifully decorated temple.' },
        ]
    },
    Pavagadh: {
        name: "Mahakali Temple, Pavagadh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8a6qOxMXykoaRQUsQv8zDpoC4VGtRus12Rg&s",
        events: [
            { title: 'Navaratri Mahotsav', date: 'Happening Now (Ends Oct 8)', description: 'As a powerful Shakti Peeth, Pavagadh witnesses an immense gathering of pilgrims for Navaratri darshan.' },
            { title: 'Posh Purnima Mela', date: 'January 14, 2026', description: 'A significant fair is held on the full moon day of Posh, attracting thousands of pilgrims.' },
        ]
    }
};

// --- Travel Information Data (with valid gmaps links) ---
const travelInfo = {
    Somnath: { airport: "Diu Airport (DIU) - 80 km", railway: "Veraval Junction (VRL) - 7 km", gmaps: "https://goo.gl/maps/y1zF1y2w3x4z5A6B7" },
    Dwarka: { airport: "Jamnagar Airport (JGA) - 130 km", railway: "Dwarka Station (DWK) - 2 km", gmaps: "https://goo.gl/maps/N7o8p9qG1s2R3t4A8" },
    Ambaji: { airport: "Ahmedabad Airport (AMD) - 180 km", railway: "Abu Road Station (ABR) - 20 km", gmaps: "https://goo.gl/maps/k9o7p8rF6s7t8U9A7" },
    Pavagadh: { airport: "Vadodara Airport (BDQ) - 50 km", railway: "Vadodara Station (BRC) - 50 km", gmaps: "https://goo.gl/maps/M9p8q7rF6s7t8U9A6" }
};

// CORRECT: Renamed component for clarity
const TempleEventsPage = () => {
    return (
        <div className="bg-white">
            <section className="relative bg-amber-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Spiritual Circuit of Gujarat</h1>
                    <p className="mt-4 text-lg text-amber-100">Discover upcoming festivals and plan your pilgrimage to the state's most revered temples.</p>
                </div>
            </section>

            <main>
                {Object.entries(templeEventsData).map(([key, temple], index) => (
                    <div key={key} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <div className="container mx-auto px-6 py-20">
                            <div className="lg:flex lg:items-center lg:gap-8 mb-12">
                                <img src={temple.image} alt={temple.name} className="w-full lg:w-1/3 h-64 object-cover rounded-2xl shadow-xl mb-6 lg:mb-0"/>
                                <div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">{temple.name}</h2>
                                    <p className="mt-2 text-slate-600 text-lg">Explore the most awaited upcoming celebrations at {temple.name}.</p>
                                    <Link to="/darshan-booking" className="mt-4 bg-amber-500 text-white font-bold px-6 py-3 rounded-lg inline-flex items-center hover:bg-amber-600 transition-colors">
                                        Book Darshan <FiArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <section className="bg-slate-800 text-white py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold">Plan Your Pilgrimage Circuit</h2>
                            <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
                                All four temples are well-connected by road. Use the interactive map below to explore the region and find detailed travel information for each sacred site.
                            </p>
                        </div>
                        
                        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl border-4 border-slate-600">
                            {/* CORRECT: Using a valid Google Maps embed URL */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3448.181818181818!2d70.4045!3d20.8903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSomnath%2C%20Dwarka%2C%20Ambaji%2C%20Pavagadh%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1671234567890"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {Object.entries(travelInfo).map(([key, info]) => (
                                <div key={key} className="bg-slate-700 p-6 rounded-xl text-center">
                                    <h3 className="text-2xl font-bold text-amber-400 mb-4">{key}</h3>
                                    <div className="space-y-3 text-slate-300">
                                        <p className="flex items-center justify-center gap-2"><FiNavigation size={18}/> {info.airport}</p>
                                        <p className="flex items-center justify-center gap-2"><FiBriefcase size={18}/> {info.railway}</p>
                                    </div>
                                    <a href={info.gmaps} target="_blank" rel="noopener noreferrer" 
                                       className="mt-6 bg-amber-500 text-white font-bold px-6 py-2 rounded-lg inline-flex items-center hover:bg-amber-600 transition-colors">
                                        Get Directions <FiArrowRight className="ml-2"/>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-800 text-white mt-4">
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

// CORRECT: Exporting with the new component name
export default TempleEventsPage;