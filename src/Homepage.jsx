import React from 'react';
// Importing icons from react-icons
import { FiClock, FiShield, FiUsers, FiCpu, FiMessageSquare, FiTrendingUp, FiLogIn, FiArrowRight } from 'react-icons/fi';

// Main HomePage Component
const HomePage = () => {

    // A reusable feature card component
    const FeatureCard = ({ icon, title, children }) => (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-orange-500 mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{children}</p>
        </div>
    );

    // A reusable testimonial card component
    const TestimonialCard = ({ quote, author, role }) => (
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <p className="text-gray-600 italic">"{quote}"</p>
            <p className="mt-4 font-bold text-orange-600">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
        </div>
    );

    return (
        <div className="bg-gray-50 text-gray-700">

            {/* This div now spans the full screen and acts as the container */}
            <div className='absolute inset-0 w-full h-full opacity-70 z-10'> {/* Use inset-0 for top/left/right/bottom */}
                <iframe
                    className="w-full h-[600px] " // Make iframe fill the container
                    src="https://www.youtube.com/embed/ym4o5F8ncY0?autoplay=1&mute=1&loop=1&playlist=ym4o5F8ncY0&controls=0" // Modified URL for autoplay
                    title="Background Video"
                  
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* 2. Hero Section */}
            <header className="relative bg-cover bg-center h-[60vh] md:h-[80vh] flex items-center z-300 " >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative container mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                        Experience Divine Peace. Manage Devotion with Intelligence.
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        As India prepares for the festive season, we empower temples to transform overwhelming crowds into serene spiritual journeys.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-orange-500 text-white font-bold px-8 py-3 rounded-lg text-lg hover:bg-orange-600 transition-colors">
                            Schedule a Free Demo
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-orange-500 transition-colors">
                            Plan Your Visit
                        </button>
                    </div>
                </div>
            </header>

            <main>
                {/* 3. The Challenge Section */}
                <section className="py-20 bg-orange-50">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">The Festival Rush is Here. Is Your Temple Ready?</h2>
                        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">This Sunday, October 5th, 2025, thousands face challenges that diminish their spiritual experience. SevaSetu is here to change that.</p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <FeatureCard icon={<FiClock />} title="Endless Waiting Times">
                                Devotees, especially the elderly and families, spend hours in disorganized queues.
                            </FeatureCard>
                            <FeatureCard icon={<FiShield />} title="Overlooked Safety Risks">
                                Unmanaged crowds lead to bottlenecks and increase risks during peak festive days like the upcoming Navaratri.
                            </FeatureCard>
                            <FeatureCard icon={<FiUsers />} title="Operational Strain">
                                Temple staff and volunteers are overburdened, leading to a reactive, rather than proactive, approach to safety.
                            </FeatureCard>
                        </div>
                    </div>
                </section>

                {/* 4. The Solution Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold">The All-in-One Platform for Seamless Darshan</h2>
                            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">We blend tradition with technology to preserve sanctity while ensuring modern standards of safety and efficiency.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <FeatureCard icon={<FiUsers />} title="Smart e-Darshan Queuing">Book timed slots via app or kiosks with real-time SMS and push notifications.</FeatureCard>
                            <FeatureCard icon={<FiCpu />} title="AI Crowd Analytics">Live heatmaps from existing CCTV feeds with instant alerts on bottlenecks.</FeatureCard>
                            <FeatureCard icon={<FiMessageSquare />} title="Unified Communication">Send broadcast messages to devotees and manage staff from a central dashboard.</FeatureCard>
                            <FeatureCard icon={<FiTrendingUp />} title="Data-Driven Insights">Use predictive analytics to anticipate footfall and plan resources effectively.</FeatureCard>
                        </div>
                    </div>
                </section>

                {/* 5. How It Works Section */}
                <section className="py-20 bg-gray-100">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-12">A Serene Experience in 3 Simple Steps</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
                            <div className="flex-1 text-center">
                                <div className="bg-orange-500 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                                <h3 className="font-bold text-xl mb-2">Book Your Slot</h3>
                                <p>Devotees book a free time slot via app and receive a QR code.</p>
                            </div>
                            <FiArrowRight className="text-orange-400 text-4xl hidden md:block mx-4" />
                            <div className="flex-1 text-center">
                                <div className="bg-orange-500 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                                <h3 className="font-bold text-xl mb-2">Monitor The Flow</h3>
                                <p>Admins watch the live dashboard and manage staff proactively.</p>
                            </div>
                            <FiArrowRight className="text-orange-400 text-4xl hidden md:block mx-4" />
                            <div className="flex-1 text-center">
                                <div className="bg-orange-500 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                                <h3 className="font-bold text-xl mb-2">Peaceful Darshan</h3>
                                <p>Visitors arrive, scan their code, and enjoy a smooth, timely experience.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Testimonials Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Temples and Devotees</h2>
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <TestimonialCard
                                quote="SevaSetu has transformed our Navaratri festival management. Our staff is less stressed, and we've received wonderful feedback from devotees about the organized system."
                                author="Shri. K. V. Prasad"
                                role="Trustee, Panchavati Temple, Nashik"
                            />
                            <TestimonialCard
                                quote="Booking a slot for my elderly parents was so easy. We avoided the long Sunday queue and had a truly blessed darshan. A wonderful initiative."
                                author="Anjali Sharma"
                                role="Devotee from Delhi"
                            />
                        </div>
                    </div>
                </section>

                {/* 7. Final CTA Section */}
                <section className="bg-orange-600 text-white">
                    <div className="container mx-auto px-6 py-20 text-center">
                        <h2 className="text-4xl font-bold mb-4">Ready to Embrace a Smarter Way to Manage Devotion?</h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">Join leading temples in ensuring every visitor's experience is safe, serene, and spiritual.</p>
                        <button className="bg-white text-orange-600 font-bold px-10 py-4 rounded-lg text-xl hover:bg-orange-100 transition-colors">
                            Schedule My Free Demo
                        </button>
                    </div>
                </section>
            </main>

            {/* 8. Footer */}
            <footer className="bg-gray-800 text-white">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-4">SevaSetu</h3>
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
                    </div>
                    <div className="text-center text-gray-500 border-t border-gray-700 mt-8 pt-6">
                        © 2025 SevaSetu Technologies Pvt. Ltd. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
