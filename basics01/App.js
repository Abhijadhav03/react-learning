import React from 'react';
import ReactDOM from 'react-dom/client'

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
const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/25539c29532269.55f7d6a0a8c71.jpg'/>
            </div>
           <div className='nav-items'>
              <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li className='cart-logo'><img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/cart-icon-download-in-svg-png-gif-file-formats--shopping-online-trolley-pack-e-commerce-icons-1597724.png?f=webp&w=512'/></li>
              </ul>
           </div>
            </div>
    )
};

const styleCard = {
    backgroundcolor: "pink"
}

const RestaurantCard = ({ resData }) => {
    if (!resData || !resData.info) {
        return <div className='res-card'>No data available</div>;
    }
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        locality
    } = resData?.info || {};
    console.log(name); 
    return (
        <div className='res-card'>
            <img 
                className='res-img' 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
                alt={resData.info.name}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{locality}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

const resobj = [
    {
        info: {
            id: "528523",
            name: "New Ambur Biryani Point",
            cloudinaryImageId: "2b6b93195cd8e50f9e393692cf91ed7d",
            locality: "Koramangala",
            areaName: "Adugodi",
            costForTwo: "₹250 for two",
            cuisines: ["Biryani", "Chinese", "North Indian"],
            avgRating: "4.5",
            parentId: "318345",
            avgRatingString: "4.3",
            totalRatingsString: "3.4K+"
        }
    },
    {
        info: {
            id: "690730",
            name: "Omm Nom Nomm",
            cloudinaryImageId: "0b6ccedf0af57a82ecea2910397bb947",
            locality: "BTM Layout",
            areaName: "Koramangala",
            costForTwo: "₹600 for two",
            cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
            avgRating: 4.9,
            parentId: "21184",
            avgRatingString: "4.9",
            totalRatingsString: "1.8K+"
        }
    },
    {
        info: {
            id: "671928",
            name: "KFC",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG",
            locality: "7th Block",
            areaName: "Koramangala",
            costForTwo: "₹400 for two",
            cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
            avgRating: 4.3,
            parentId: "547",
            avgRatingString: "4.3",
            totalRatingsString: "3.2K+"
        }
    },
    {
        info: {
            id: "621512",
            name: "The Belgian Waffle Co.",
            cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
            locality: "K.H.B Colony",
            areaName: "Koramangala",
            costForTwo: "₹200 for two",
            cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
            avgRating: 4.6,
            veg: true,
            parentId: "2233",
            avgRatingString: "4.6",
            totalRatingsString: "1.7K+"
        }
    },
    {
        info: {
            id: "613421",
            name: "Kwality Walls Ice Cream and More",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b3739937-c8ca-40ea-96cd-03b049b4600e_613421.JPG",
            locality: "6th Block",
            areaName: "Koramangala",
            costForTwo: "₹200 for two",
            cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
            avgRating: 4.8,
            veg: true,
            parentId: "582",
            avgRatingString: "4.8",
            totalRatingsString: "196"
        }

    },
 {
            info: {
                id: "38634",
                name: "Third Wave Coffee",
                cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
                locality: "Koramangala",
                areaName: "Koramangala",
                costForTwo: "₹400 for two",
                cuisines: [
                    "Beverages",
                    "Bakery",
                    "Continental"
                ],
                avgRating: 4.6,
                parentId: "274773",
                avgRatingString: "4.6",
                totalRatingsString: "6.5K+",
                promoted: true
            }
        },
        {
            info: {
                id: "796015",
                name: "Deccan Platters",
                cloudinaryImageId: "c375613ed110e0124b2d7cf03f4a2838",
                locality: "6th Cross, 6th Block",
                areaName: "Koramangala",
                costForTwo: "₹600 for two",
                cuisines: [
                    "South Indian",
                    "Andhra",
                    "Seafood",
                    "Chinese",
                    "Biryani",
                    "Snacks"
                ],
                avgRating: 4.3,
                parentId: "475812",
                avgRatingString: "4.3",
                totalRatingsString: "364"
            }
        },
        {
            info: {
                id: "286156",
                name: "Sour House",
                cloudinaryImageId: "cihuy7nxa3lhf0qj1eom",
                locality: "Koramangala",
                areaName: "Koramangala",
                costForTwo: "₹400 for two",
                cuisines: [
                    "Bakery"
                ],
                avgRating: 4.8,
                parentId: "191275",
                avgRatingString: "4.8",
                totalRatingsString: "2.5K+"
            }
        },
        {
            info: {
                id: "269402",
                name: "The Tea Brewery",
                cloudinaryImageId: "v4s7ectlujr8325ejrnc",
                locality: "1st Block",
                areaName: "Koramangala",
                costForTwo: "₹100 for two",
                cuisines: [
                    "Beverages",
                    "Snacks",
                    "Bakery",
                    "Desserts",
                    "Fast Food",
                    "Chaat",
                    "Healthy Food"
                ],
                avgRating: 4.6,
                parentId: "21147",
                avgRatingString: "4.6",
                totalRatingsString: "11K+"
            }
        },
        {
            info: {
                id: "780124",
                name: "BOX8 - Desi Meals",
                cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/0c229536-b5d8-4749-8531-7393395e38c4_780124.jpg",
                locality: "1ST MAIN, JAKKASANDRA",
                areaName: "KORAMANGALA",
                costForTwo: "₹200 for two",
                cuisines: [
                    "Biryani",
                    "Thalis",
                    "Home Food"
                ],
                avgRating: 4.5,
                parentId: "10655",
                avgRatingString: "4.5"
            }
        }
    
];

console.log(name); 


const Bodyone = () => {
    return (
        <div className='body'>
            <div className='search' > search </div>
            <div className='restaurant-container'> 
                {/* <RestaurantCard 
                resData={resobj[0]}
                // resName="Meghana foods" 
                // cuisine="Biriyani, North Indian, Asian"
                // ratings="4.2"
                />
             {/* <RestaurantCard 
                resName="KFC"
                 cuisine="Fast food, burger"
                 ratings="4.5"/> */}
                {/* <RestaurantCard resData={resobj[1]}/>
                 <RestaurantCard resData={resobj[2]}/>
                   <RestaurantCard resData={resobj[3]}/> */}
                   {resobj.map((Restaurant) => (<RestaurantCard resData={Restaurant}/>))}
            </div>
        </div>
    );
};


 const AppLayout = () => {
    return (
        <div className="app">
         <Header/>
         <Bodyone/>
        </div>
    )
 }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppLayout />)
