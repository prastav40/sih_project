import React from 'react';

// CORRECTED: Added the missing FiShield, FiTrendingUp, and FiLogIn icons to the import
import { FiUsers, FiCpu, FiMessageSquare, FiShield, FiTrendingUp, FiLogIn } from 'react-icons/fi';

const FeaturesSection = () => {
 return(
    <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
                    A Complete Platform for Modern Temple Management
                </h2>
                <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                    SevaSetu provides an integrated suite of tools designed to enhance safety, streamline operations, and elevate the devotee experience.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {/* Feature Card 1 */}
                <div className="bg-amber-50 p-8 rounded-xl border border-amber-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-amber-500 text-white p-3 rounded-full">
                            <FiUsers size={22} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Smart E-Darshan System</h3>
                    </div>
                    <p className="text-slate-600">
                        Eliminate long queues with timed, pre-booked slots. Our system uses QR codes for fast entry and sends real-time alerts to manage devotee flow efficiently.
                    </p>
                </div>

                {/* Feature Card 2 */}
                <div className="bg-amber-50 p-8 rounded-xl border border-amber-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-amber-500 text-white p-3 rounded-full">
                            <FiCpu size={22} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">AI Crowd Analytics</h3>
                    </div>
                    <p className="text-slate-600">
                        Leverage your existing CCTV network to monitor crowd density, predict bottlenecks, and detect safety anomalies before they escalate, all from one dashboard.
                    </p>
                </div>

                {/* Feature Card 3 */}
                <div className="bg-amber-50 p-8 rounded-xl border border-amber-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-amber-500 text-white p-3 rounded-full">
                            <FiMessageSquare size={22} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Unified Communication</h3>
                    </div>
                    <p className="text-slate-600">
                        Instantly send announcements or emergency alerts to devotees and staff via SMS and in-app notifications. Coordinate volunteers and manage tasks in real-time.
                    </p>
                </div>

                {/* Feature Card 4 */}
                <div className="bg-amber-50 p-8 rounded-xl border border-amber-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-amber-500 text-white p-3 rounded-full">
                            <FiShield size={22} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Enhanced Safety Protocols</h3>
                    </div>
                    <p className="text-slate-600">
                        Implement digital SOS features for immediate assistance and a "Lost & Found" hub to quickly reunite families, ensuring a safe environment for everyone.
                    </p>
                </div>

                {/* Feature Card 5 */}
                <div className="bg-amber-50 p-8 rounded-xl border border-amber-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-amber-500 text-white p-3 rounded-full">
                            <FiTrendingUp size={22} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Data-Driven Insights</h3>
                    </div>
                    <p className="text-slate-600">
                        Access detailed reports on footfall patterns and operational efficiency. Use predictive analytics to better plan for festivals and special events.
                    </p>
                </div>

                {/* Feature Card 6 */}
                <div className="bg-amber-50 p-8 rounded-xl border border-amber-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-amber-500 text-white p-3 rounded-full">
                            <FiLogIn size={22} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Volunteer Management</h3>
                    </div>
                    <p className="text-slate-600">
                        Efficiently schedule, assign tasks, and communicate with your volunteer workforce through a dedicated portal, ensuring smooth on-ground operations.
                    </p>
                </div>

            </div>
        </div>
    </div>
 )
}

export default FeaturesSection;