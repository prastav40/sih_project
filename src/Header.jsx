import { FaPrayingHands } from 'react-icons/fa';
import { Link } from 'react-router';
import { FiLogIn } from 'react-icons/fi';
import DarshanBookingPage from './Booking.jsx';
const Header=()=>{
    return(
        <div>
                   {/* 1. Navigation Bar */}
                    <nav className="bg-white shadow-md sticky top-0 z-300">
                        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                            <Link to="/" className="flex items-center text-2xl font-bold text-gray-800">
                                <FaPrayingHands className="text-orange-500 mr-2" />
                                MandirGo
                            </Link>
                            <div className="hidden md:flex space-x-6 items-center">
                                <Link to="./Features" className="text-gray-600 hover:text-orange-500">Features</Link>
                                <Link to="./livestatus" className="text-gray-600 hover:text-orange-500">Live Crowd Status</Link>
                                <Link to="/About" className="text-gray-600 hover:text-orange-500">About us</Link>
                                <Link to="/Map" className="text-gray-600 hover:text-orange-500">Map and Directions</Link>
                                <Link to="/Login"><button className="flex items-center text-gray-600 hover:text-orange-500">
                                    <FiLogIn className="mr-1" /> Login
                                </button></Link>
                                 <Link to="/upcomingevent" className="text-gray-600 hover:text-orange-500">UpComing Event</Link>
                              
                                <Link to="Booking"><button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                                    Darshan Booking
                                </button></Link>
                            </div>
                            <div className="md:hidden">
                                {/* Mobile menu button can be added here */}
                                <button>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                                </button>
                            </div>
                        </div>
                        
                    </nav>
                    </div>
    )
}

export default Header;