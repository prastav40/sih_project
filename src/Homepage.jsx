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
            <div className='absolute inset-0 w-full h-full opacity-90 z-10'> {/* Use inset-0 for top/left/right/bottom */}
                <img className="w-full h-[600px]" src="https://i.pinimg.com/originals/d3/ab/69/d3ab69a13d1babafa373cf2f6e081ba8.jpg" />
            </div>

            {/* 2. Hero Section */}
            <header className="relative bg-cover bg-center h-[60vh] md:h-[80vh] flex items-center z-300 " >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative container mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-left">
                        Welcome to MandirGo
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-left">
                        we are introducing the
                        innovative solution to
                        Efficient Devotee
                        Flow Management
                    </p>

                </div>
            </header>

            <main>
                {/* 3. The Challenge Section */}
                <section className="py-20 bg-orange-50">
                    <div className="container mx-auto px-6 text-center">
                        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Aim to reduce congestion, ensure safety and provide a smooth and peaceful spiritual experience.</p>
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
                            <FeatureCard icon={<FiMessageSquare />} title="OnTime Communication">Send broadcast messages to devotees and manage staff from a central dashboard.</FeatureCard>
                            <FeatureCard icon={<FiTrendingUp />} title="forecast data Insights">Use predictive analytics to anticipate footfall and plan resources effectively.</FeatureCard>
                        </div>
                    </div>
                </section>

                {/* 5. How It Works Section */}

                {/* 6. Testimonials Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Gujarat's Most Revered Temples</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <TestimonialCard
                                quote="Managing the immense flow of pilgrims during Mahashivratri has been streamlined thanks to SevaSetu. Their system for online darshan and aarti booking is a blessing for devotees worldwide."
                                author="Shri P.K. Laheri"
                                role="Chairman, Shree Somnath Trust"
                            />
                            <TestimonialCard
                                quote="For a sacred place like Dwarka, ensuring a peaceful darshan is our priority. SevaSetu has brilliantly organized our pooja bookings and crowd management, especially during Janmashtami."
                                author="Dhanraj Nathwani"
                                role="Vice Chairman, Dwarkadhish Temple Trust"
                            />
                            <TestimonialCard
                                quote="We visit Ambaji for the Bhadarvi Poonam mela every year. This time, we booked our slot through SevaSetu and had the most peaceful darshan ever, avoiding the huge rush. A wonderful service for families."
                                author="Rina Mehta"
                                role="Devotee from Vadodara"
                            />
                            <TestimonialCard
                                quote="With the redevelopment of Pavagadh, visitor numbers have surged. SevaSetu's platform has been crucial in managing the devotee flow, significantly reducing wait times and enhancing the pilgrimage experience."
                                author="Surendra Patel"
                                role="President, Shree Mahakali Mandir Trust, Pavagadh"
                            />
                        </div>
                    </div>
                </section>


            </main>

            {/* 8. Footer */}
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

export default HomePage;
