import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body';
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
//not using keys (not acccesible) <<<<< index as key <<<<<unique id (best practice)
 const AppLayout = () => {
    console.log(<body/>);
    
    return (
        <div className="app">
         <Header/>
         <Body/>
        </div>
    )
 }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppLayout />)
