import React from 'react';
import { FiBell, FiCalendar } from 'react-icons/fi';

// --- UPDATED: Sample Data for Specific Temples ---
const announcements = [
    {
        id: 1,
        title: 'Kartik Purnima Mahotsav at Somnath Temple',
        category: 'Special Event',
        date: 'October 12, 2025',
        content: 'Join us for the grand Kartik Purnima Mahotsav from November 1st to November 5th, 2025. There will be a special \'Maha Aarti\' every evening, followed by the spectacular light and sound show depicting the temple\'s history.'
    },
    {
        id: 2,
        title: 'Arrangements for Bhadarvi Poonam Fair at Ambaji',
        category: 'Special Event',
        date: 'October 9, 2025',
        content: 'The annual Bhadarvi Poonam Mela will be held from October 20th to October 26th. Special arrangements for \'padayatris\' (pilgrims on foot), including rest stops and medical aid, have been made. The temple will be open 24 hours during this period.'
    },
    {
        id: 3,
        title: 'Pavagadh Ropeway Maintenance for Navratri',
        category: 'Important Notice',
        date: 'October 5, 2025',
        content: 'In preparation for the Navratri festival rush, the Udan Khatola (ropeway) at Kalika Mata Temple, Pavagadh, will be closed for mandatory maintenance from October 15th to October 17th, 2025. Please plan your visit accordingly.'
    },
    {
        id: 4,
        title: 'Live Webcast of Janmashtami from Dwarkadhish Temple',
        category: 'General',
        date: 'October 1, 2025',
        content: 'Devotees worldwide can witness the glorious Janmashtami celebrations live from the Dwarkadhish Temple. The webcast will be available on the temple\'s official website and YouTube channel. Festivities will begin at 11:00 PM on October 28th.'
    }
];

// --- UPDATED: Helper for Category Tag Colors ---
const getCategoryStyle = (category) => {
    switch (category) {
        case 'Special Event':
            return 'bg-rose-100 text-rose-800';
        case 'Important Notice':
            return 'bg-amber-100 text-amber-800';
        case 'General':
            return 'bg-sky-100 text-sky-800';
        default:
            return 'bg-slate-100 text-slate-800';
    }
};

// --- Main Announcement Page Component ---
const AnnouncementPage = () => {
    return (
        <div className="min-h-screen bg-amber-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                
                {/* --- Header --- */}
                <div className="text-center mb-12">
                    <FiBell className="mx-auto text-5xl text-amber-500 mb-4" />
                    <h1 className="text-4xl font-extrabold text-slate-800">
                        Temple Announcements
                    </h1>
                    <p className="mt-3 text-lg text-slate-600">
                        Stay updated with the latest news and schedules.
                    </p>
                </div>

                {/* --- Announcements List --- */}
                <div className="space-y-6">
                    {announcements.map((announcement) => (
                        <div key={announcement.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                            <div className="p-6 md:p-8">
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                    {/* Category Tag */}
                                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getCategoryStyle(announcement.category)}`}>
                                        {announcement.category}
                                    </span>
                                    {/* Date */}
                                    <div className="flex items-center text-sm text-slate-500">
                                        <FiCalendar className="mr-2" />
                                        <span>{announcement.date}</span>
                                    </div>
                                </div>
                                
                                {/* Title */}
                                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                                    {announcement.title}
                                </h2>
                                
                                {/* Content */}
                                <p className="text-slate-600 leading-relaxed">
                                    {announcement.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            
        </div>
    );
};

export default AnnouncementPage;