import React, { useState, useEffect } from 'react';
import { FiUsers, FiClock, FiZap, FiMap, FiAlertCircle, FiArrowUp, FiArrowDown } from 'react-icons/fi';

// --- Simulated Live Data (in a real app, this would come from an API) ---
const crowdData = {
    status: 'Very High',
    waitTime: {
        general: 150, // in minutes
        special: 45,  // in minutes
    },
    liveFootfall: 55780,
    footfallTrend: 'increasing', // 'increasing', 'decreasing', 'stable'
    heatmap: {
        'Main Entrance (Gate A)': 'High',
        'Queue Complex': 'Very High',
        'Sanctum Sanctorum': 'Very High',
        'Prasad Counter': 'Moderate',
        'Exit Area (Gate D)': 'Low',
    },
    gateStatus: [
        { gate: 'A - Main Entry', status: 'Heavy Rush', recommendation: 'Expect long queues.' },
        { gate: 'B - Side Entry', status: 'Heavy Rush', recommendation: 'Consider using Gate C if eligible.' },
        { gate: 'C - Special Entry', status: 'Moderate Rush', recommendation: 'Recommended for special ticket holders.' },
        { gate: 'D - Main Exit', status: 'Open', recommendation: 'Clear path for exiting.' },
    ],
    announcements: [
        'Queue temporarily paused for special Aarti. Expected to resume in 15 minutes.',
        'Please keep your belongings safe. Beware of pickpockets in crowded areas.',
    ]
};

// --- Helper function for color coding ---
const getStatusColor = (status) => {
    switch (status) {
        case 'Very High': return 'bg-red-600';
        case 'High': return 'bg-orange-500';
        case 'Moderate': return 'bg-yellow-400';
        case 'Low': return 'bg-green-500';
        default: return 'bg-slate-400';
    }
};


const LiveCrowdStatusPage = () => {
    const [lastUpdated, setLastUpdated] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setLastUpdated(new Date());
        }, 5000); // Update every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-slate-100 min-h-screen">
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">Live Crowd Status</h1>
                    <p className="text-slate-500 mt-2">
                        Last Updated: {lastUpdated.toLocaleTimeString()} IST
                    </p>
                </div>

                {/* Main Status & Key Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Overall Status Gauge */}
                    <div className={`col-span-1 lg:col-span-1 p-6 rounded-2xl shadow-lg text-white flex flex-col justify-center items-center ${getStatusColor(crowdData.status)}`}>
                        <h2 className="text-2xl font-bold mb-2">Overall Crowd Level</h2>
                        <p className="text-5xl font-extrabold">{crowdData.status}</p>
                    </div>

                    {/* Key Metrics */}
                    <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                            <FiClock className="mx-auto text-4xl text-amber-500 mb-2" />
                            <h3 className="text-lg font-bold text-slate-700">General Wait Time</h3>
                            <p className="text-4xl font-bold text-slate-900">{crowdData.waitTime.general}<span className="text-xl"> min</span></p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                            <FiUsers className="mx-auto text-4xl text-amber-500 mb-2" />
                            <h3 className="text-lg font-bold text-slate-700">Live Footfall</h3>
                            <div className="flex items-center justify-center">
                                <p className="text-4xl font-bold text-slate-900">{crowdData.liveFootfall.toLocaleString()}</p>
                                {crowdData.footfallTrend === 'increasing' && <FiArrowUp className="text-red-500 ml-2 text-2xl" />}
                                {crowdData.footfallTrend === 'decreasing' && <FiArrowDown className="text-green-500 ml-2 text-2xl" />}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Heatmap and Gate Status */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Heatmap Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center"><FiMap className="mr-3 text-amber-500"/>Congestion Heatmap</h2>
                        <div className="space-y-3">
                            {Object.entries(crowdData.heatmap).map(([area, status]) => (
                                <div key={area} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                    <span className="font-semibold text-slate-700">{area}</span>
                                    <span className={`px-3 py-1 text-sm font-bold text-white rounded-full ${getStatusColor(status)}`}>{status}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gate Status Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center"><FiZap className="mr-3 text-amber-500"/>Gate Status & Recommendations</h2>
                        <div className="space-y-4">
                            {crowdData.gateStatus.map(gate => (
                                <div key={gate.gate} className="p-3 border-l-4 rounded-r-lg bg-slate-50"
                                     style={{ borderLeftColor: gate.status.includes('Rush') ? '#f97316' : '#22c55e' }}>
                                    <p className="font-bold text-slate-800">{gate.gate}: <span className="font-semibold">{gate.status}</span></p>
                                    <p className="text-sm text-slate-600">{gate.recommendation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Live Announcements */}
                <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center"><FiAlertCircle className="mr-3 text-amber-500"/>Live Announcements</h2>
                    <div className="space-y-3">
                        {crowdData.announcements.map((text, index) => (
                           <p key={index} className="text-slate-700 bg-amber-50 p-3 rounded-lg animate-pulse">{text}</p>
                        ))}
                    </div>
                </div>
            </div>
            
                 <footer className="bg-gray-800 text-white">
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

export default LiveCrowdStatusPage;