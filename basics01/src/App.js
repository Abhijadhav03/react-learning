import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/footer';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ErrorBoundary from './components/Error'; // Custom ErrorBoundary component
import RestaurantMenu from './components/RestaurantMenu';
import ResCart from './components/cart';

//import ErrorPage from './components/Errorpage';
/*
* Header
* - Logo
* - nav Items
*Body
* - search
* - RestaurantContainer
* - - Restaurant Card
*----- img
*     -- name of res, star rating, cuisine, delivery time
* footer
* - copyright
* - - links
* - address
* -contact
*/

// Main layout component
const AppLayout = () => {
  return (
    <div className="app">
   <Header />
   <Outlet /> {/* Renders child routes dynamically */}
    <Footer />
    </div>
  );
};

// Application router
const AppRouter = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          {/* Parent route */}
          <Route path="/" element={<AppLayout />}>
            {/* Child routes */}
            <Route index element={<Body />} /> {/* Default child route */}
            <Route path="about" element={<About />} />
            <Route path="contactus" element={<Contact />} />
            <Route path="restaurants/:resId" element={<RestaurantMenu />} />
            <Route path='cart'element={<ResCart />}/>
          </Route>
          {/* Catch-all route for unmatched paths */}
          <Route path="*" element={<h2>Page not found, please try again later</h2>} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter />);
