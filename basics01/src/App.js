import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/footer';
import Contact from './components/Contact';
//import About from './components/About';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ErrorBoundary from './components/Error'; // Custom ErrorBoundary component
import RestaurantMenu from './components/RestaurantMenu';
import ResCart from './components/cart';
import user from './components/user';
import { CartProvider } from './context/CartContext';
import { lazy } from 'react';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';


const About = lazy(()=> import("./components/About"));

/*
* chunking 
* codesplitting
 *dynamic bundling
 * lazy loading
 * *on demand loading
*/
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
    <Provider store={appStore}>
    {/* CartProvider wraps the entire application to provide cart context */}
    <CartProvider>
      <ErrorBoundary>
        <Routes>
          {/* Parent route */}
          <Route path="/" element={<AppLayout />}>
            {/* Child routes */}
            <Route index element={<Body />} /> {/* Default child route */}
            <Route path="about" element={ <Suspense fallback={<h2>Loading About Page...</h2>}>
                    <About />
                  </Suspense>} />
            <Route path="contactus" element={<Contact />} />
            <Route path="restaurants/:resId" element={<RestaurantMenu />} />
            <Route path='cart'element={<ResCart />}/>
          </Route>
            <Route path='cart' element={<ResCart />}/>
          <Route path="*" element={<h2>Page not found, please try again later</h2>} />
        </Routes>
      </ErrorBoundary>
      </CartProvider>
      </Provider>
    </BrowserRouter>
     
  );
};

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter />);
