import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import AboutPage from './About';
// CORRECT: Import from react-router-dom
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"; 
import LoginPage2 from './Login';
// Import your page components
import HomePage from './Homepage'; 
// CORRECT: Use PascalCase for component names
import FeaturesSection from './features'; 
import SignUpPage from './SignUp';
import DarshanBookingPage from './Booking.jsx';
import TempleEventsPageAlt from './UpComingEvent.jsx';
import Map from './Map.jsx';
import LiveCrowdStatusPage from './LiveCrowdStatus.jsx';
import AnnouncementPage from './Announcemet.jsx';
// This App component now acts as the main layout for your entire site.
// The <Outlet /> component will render the specific page (HomePage, FeaturesSection, etc.)
const App = () => {
    return (
        <div>
            {/* You can add a shared Navbar and Footer here if you move them out of HomePage */}
            <main>
                <Header />
                <Outlet /> {/* This is where the child routes will be rendered */}
            </main>
        </div>
    );
};

// Create the router configuration
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // The App component is the root layout
        children: [ // Child routes render inside the <Outlet />
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/features",
                // CORRECT: Use the capitalized component name
                element: <FeaturesSection />,
            },
            {
                path: "/About",
                // CORRECT: Use the capitalized component name
                element: <AboutPage />,
            },
               {
                path: "/Login",
                // CORRECT: Use the capitalized component name
                element: <LoginPage2 />,
            },
                {
                path: "/SignUp",
                // CORRECT: Use the capitalized component name
                element: <SignUpPage />,
            },
            {
                path: "/Booking",
                // CORRECT: Use the capitalized component name
                element: <DarshanBookingPage/>,
            },
            {
                path: "/upcomingevent",
                // CORRECT: Use the capitalized component name
                element: <TempleEventsPageAlt/>,
            },
              {
                path: "/Map",
                // CORRECT: Use the capitalized component name
                element:<Map/>,
            },
                 {
                path: "/livestatus",
                // CORRECT: Use the capitalized component name
                element:<LiveCrowdStatusPage/>,
            },
                 {
                path: "/announcement",
                // CORRECT: Use the capitalized component name
                element:<AnnouncementPage/>,
            },
            
           
        ]
    },
]);

// Get the root element from your HTML
const rootElement = document.getElementById("root");

// Create a React root
const root = ReactDOM.createRoot(rootElement);

// Render the app using the RouterProvider
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

export default App;