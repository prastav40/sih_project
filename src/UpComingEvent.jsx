import React from 'react';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router';

// --- Event Data (Same as before, structured for easy use) ---
const templeEventsData = {
    Somnath: {
        name: "Somnath Jyotirlinga",
        image: "https://c9admin.cottage9.com/uploads/5839/somnath-temple.jpg",
        events: [
            {
                title: 'Sharad Purnima Mahotsav',
                date: 'October 15, 2025',
                description: 'Experience the divine beauty of Lord Somnath adorned with a special Sringar under the radiant full moon.'
            },
            {
                title: 'Diwali & Annakut',
                date: 'October 28, 2025',
                description: 'The temple will be illuminated with thousands of diyas, followed by a grand Annakut offering.'
            },
        ]
    },
    Dwarka: {
        name: "Dwarkadhish Temple",
        image: "https://thrillingtravel.in/wp-content/uploads/2021/03/Shree-Dwarkadhish-temple.jpg",
        events: [
            {
                title: 'Diwali & Annakut Utsav',
                date: 'October 28, 2025',
                description: 'Celebrate the festival of lights with a grand Annakut offering of 56 bhog varieties to Lord Krishna.'
            },
            {
                title: 'Tulsi Vivah',
                date: 'November 8, 2025',
                description: 'Witness the divine marriage ceremony of Goddess Tulsi and Lord Krishna with beautiful processions.'
            },
        ]
    },
    Ambaji: {
        name: "Ambaji Shakti Peeth",
        image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/ambaji-temple/Ambaji-Temple-Banner.jpg",
        events: [
            {
                title: 'Navaratri Maha Aarti',
                date: 'Happening Now (Ends Oct 8)',
                description: 'The grandest celebration is underway! Experience nine nights of vibrant Garba and a massive fair (mela).'
            },
            {
                title: 'Sharad Purnima Festival',
                date: 'October 15, 2025',
                description: 'On the night of the full moon, special pujas are offered to the Goddess in a beautifully decorated temple.'
            },
        ]
    },
    Pavagadh: {
        name: "Mahakali Temple, Pavagadh",
        image: "https://static.gujaratsamachar.com/content_image/content_image_13fadffd-83fb-4d7a-9e53-48cbd0781a23.jpeg",
        events: [
            {
                title: 'Navaratri Mahotsav',
                date: 'Happening Now (Ends Oct 8)',
                description: 'As a powerful Shakti Peeth, Pavagadh witnesses an immense gathering of pilgrims for Navaratri darshan.'
            },
            {
                title: 'Posh Purnima Mela',
                date: 'January 14, 2026',
                description: 'A significant fair is held on the full moon day of Posh, attracting thousands of pilgrims.'
            },
        ]
    }
};

const TempleEventsPageAlt = () => {
    return (
        <div className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative bg-amber-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Spiritual Circuit of Gujarat</h1>
                    <p className="mt-4 text-lg text-amber-100">Discover the upcoming festivals at the state's most revered temples.</p>
                </div>
            </section>

            {/* Main Content: Loop through each temple */}
            <main>
                {Object.entries(templeEventsData).map(([key, temple], index) => (
                    <div key={key} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <div className="container mx-auto px-6 py-20">
                            {/* Temple Header */}
                            <div className="lg:flex lg:items-center lg:gap-8 mb-12">
                                <img src={temple.image} alt={temple.name} className="w-full lg:w-1/3 h-64 object-cover rounded-2xl shadow-xl mb-6 lg:mb-0"/>
                                <div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">{temple.name}</h2>
                                    <p className="mt-2 text-slate-600 text-lg">
                                        Explore the most awaited upcoming celebrations at {temple.name}.
                                    </p>
                                    <Link to="/darshan-booking" className="mt-4 bg-amber-500 text-white font-bold px-6 py-3 rounded-lg inline-flex items-center hover:bg-amber-600 transition-colors">
                                        Plan Your Visit <FiArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                            
                            {/* Events Grid for the Temple */}
                            <div className="grid md:grid-cols-2 gap-8">
                                {temple.events.map(event => (
                                    <div key={event.title} className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                                        <h3 className="text-2xl font-bold text-slate-800">{event.title}</h3>
                                        <div className="flex items-center text-slate-500 my-3">
                                            <FiCalendar className="mr-2 text-amber-500" /> 
                                            <span className={event.date.includes('Now') ? 'font-bold text-green-600' : ''}>
                                                {event.date}
                                            </span>
                                        </div>
                                        <p className="text-slate-600">{event.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default TempleEventsPageAlt;