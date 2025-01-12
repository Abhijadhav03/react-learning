import { useEffect } from "react";
const RestaurantMenu = ()=> {
    useEffect(() => { 
       fetchMenu();
    },[]);
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9783692&lng=77.6408356&restaurantId=15898&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        
    };
    return(
        <div className="menu">
           <h1> Name of the Restaurant</h1>
           <h2>menu</h2>
           <ul>
            <li>Biriyani</li>
            <li>Burgers</li>
            <li> Diet coke</li> 
            </ul> 
        </div>
    );
};

export default RestaurantMenu;