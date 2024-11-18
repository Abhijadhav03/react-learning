import RestaurantCard from "./RestaurantCard";
import {resobj} from "../utils/constants";
import React, { useEffect, useState } from 'react';
import { CDN_URL } from "../utils/constants";
const initialResobj = [
   
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
const initialResobj2 = [
    {
        "statusCode": 0,
        "data": {
            "tid": "ea572023-0aa0-45c8-bcca-18cb91bfcc58",
            "sid": "hb9f8014-c28b-4232-b0ec-5e934efd8dae",
            "success": {
                "cards": [
                    {
                        "relevance": {},
                        "gridWidget": {
                            "header": {
                                "action": {},
                                "headerStyling": {
                                    "padding": {}
                                }
                            },
                            "layout": {
                                "rows": 1,
                                "columns": 3,
                                "itemSpacing": 10,
                                "widgetPadding": {},
                                "containerStyle": {
                                    "containerPadding": {
                                        "left": 12,
                                        "top": 16,
                                        "right": 12,
                                        "bottom": 12
                                    }
                                },
                                "scrollBar": {
                                    "scrollStyling": {
                                        "padding": {}
                                    }
                                },
                                "autoScrollConfig": {},
                                "separatorConfig": {}
                            },
                            "imageGridCards": {
                                "info": [
                                    {
                                        "id": "410097",
                                        "imageId": "rng/md/carousel/production/cxde8vxsoywq2hxnhljd",
                                        "action": {
                                            "link": "swiggy://restaurantList",
                                            "text": "Restaurant",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "RESTAURANT",
                                            "altTextCta": "Click to know more about Restaurants."
                                        }
                                    },
                                    {
                                        "id": "409959",
                                        "imageId": "rng/md/carousel/production/iudaqlpxqyigjgrlmtho",
                                        "action": {
                                            "link": "swiggy://stores/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
                                            "text": "Night",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "INSTAMART",
                                            "altTextCta": "Click to know more about Instamart."
                                        }
                                    },
                                    {
                                        "id": "1696042",
                                        "imageId": "rng/md/carousel/production/8aedd81fc69a9e57e7748ac2649618d7",
                                        "action": {
                                            "link": "swiggy://stores/go",
                                            "text": "Genie",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "GENIE",
                                            "altTextCta": "Click to know more about Restaurants."
                                        }
                                    }
                                ],
                                "style": {
                                    "width": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 0.33,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                    },
                                    "height": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 1.3394495,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                    }
                                }
                            },
                            "id": "ScrollNavTrichicletP2_latebinding",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                                    "info": [
                                        {
                                            "id": "410097",
                                            "imageId": "rng/md/carousel/production/cxde8vxsoywq2hxnhljd",
                                            "action": {
                                                "link": "swiggy://restaurantList",
                                                "text": "Restaurant",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "RESTAURANT",
                                                "altTextCta": "Click to know more about Restaurants."
                                            },
                                            "entityId": "swiggy://restaurantList",
                                            "frequencyCapping": {},
                                            "externalMarketing": {}
                                        },
                                        {
                                            "id": "409959",
                                            "imageId": "rng/md/carousel/production/iudaqlpxqyigjgrlmtho",
                                            "action": {
                                                "link": "swiggy://stores/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
                                                "text": "Night",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "INSTAMART",
                                                "altTextCta": "Click to know more about Instamart."
                                            },
                                            "entityId": "swiggy://stores/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
                                            "frequencyCapping": {},
                                            "externalMarketing": {}
                                        },
                                        {
                                            "id": "1696042",
                                            "imageId": "rng/md/carousel/production/8aedd81fc69a9e57e7748ac2649618d7",
                                            "action": {
                                                "link": "swiggy://stores/go",
                                                "text": "Genie",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "GENIE",
                                                "altTextCta": "Click to know more about Restaurants."
                                            },
                                            "entityId": "swiggy://stores/go",
                                            "frequencyCapping": {},
                                            "externalMarketing": {}
                                        }
                                    ],
                                    "style": {
                                        "width": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 0.33,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                        },
                                        "height": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 1.3394495,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                        }
                                    }
                                }
                            },
                            "footer": {
                                "labelWrapper": {}
                            }
                        }
                    },
                    {
                        "relevance": {
                            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                            "sectionId": "MENU_RETURN"
                        },
                        "gridWidget": {
                            "header": {
                                "title": "Top Picks For You",
                                "action": {},
                                "imageId": "sl9oogwe7n5dusolt5xe",
                                "headerStyling": {
                                    "padding": {
                                        "left": 16,
                                        "top": 15,
                                        "bottom": 24
                                    }
                                }
                            },
                            "layout": {
                                "rows": 1,
                                "columns": 16,
                                "horizontalScrollEnabled": true,
                                "shouldSnap": true,
                                "itemSpacing": 12,
                                "widgetPadding": {},
                                "containerStyle": {
                                    "containerPadding": {
                                        "left": 16,
                                        "right": 16,
                                        "bottom": 12
                                    }
                                },
                                "scrollBar": {
                                    "scrollStyling": {
                                        "padding": {}
                                    }
                                },
                                "autoScrollConfig": {},
                                "separatorConfig": {}
                            },
                            "imageGridCards": {
                                "style": {
                                    "width": {},
                                    "height": {}
                                }
                            },
                            "id": "Updated_4_favourites_SimRestoRelevance",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                                    "restaurants": [
                                        {
                                            "info": {
                                                "id": "660675",
                                                "name": "Cafe Amudham",
                                                "cloudinaryImageId": "384d020ad18d2752ddd119cb585024d7",
                                                "locality": "5th Block Kormangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹200 for two",
                                                "cuisines": [
                                                    "South Indian",
                                                    "Snacks"
                                                ],
                                                "avgRating": 4.6,
                                                "parentId": "396620",
                                                "avgRatingString": "4.6",
                                                "totalRatingsString": "14K+",
                                                "promoted": true,
                                                "adTrackingId": "cid=21511692~p=0~adgrpid=21511692#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=660675~eid=4744d96e-cc5d-4cde-8229-6c4ebd4858a2~srvts=1731954390376~collid=45995",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 0.7,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "0.7 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-18 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "imageBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "₹100 OFF",
                                                    "subHeader": "ABOVE ₹499",
                                                    "discountTag": "FLAT DEAL",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                                "campaignId": "21511692"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=660675",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "10576",
                                                "name": "Pizza Hut",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
                                                "locality": "6th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Pizzas"
                                                ],
                                                "avgRating": 4.2,
                                                "parentId": "721",
                                                "avgRatingString": "4.2",
                                                "totalRatingsString": "21K+",
                                                "sla": {
                                                    "deliveryTime": 31,
                                                    "lastMileTravel": 0.9,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "30-35 mins",
                                                    "lastMileTravelString": "0.9 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 04:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.6",
                                                        "ratingCount": "3.1K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=10576",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "671928",
                                                "name": "KFC",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/a64ce30a-7492-444b-a485-1b7e2804e091_671928.JPG",
                                                "locality": "7th Block",
                                                "areaName": "Koramangla",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "Fast Food",
                                                    "Rolls & Wraps"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "547",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "3.3K+",
                                                "sla": {
                                                    "deliveryTime": 26,
                                                    "lastMileTravel": 1.2,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "1.2 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=671928",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "23678",
                                                "name": "McDonald's",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg",
                                                "locality": "5th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "Beverages",
                                                    "Cafe",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "630",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "63K+",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 1.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "1.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:55:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                            "description": "Delivery!"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                                        "description": "Delivery!"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "ITEMS",
                                                    "subHeader": "AT ₹99",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=23678",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "769775",
                                                "name": "Nahdi Mandi Restaurant",
                                                "cloudinaryImageId": "8e82f6e42f5e5bde0649f1f8f48209d8",
                                                "locality": "BTM Layout",
                                                "areaName": "BTM Layout",
                                                "costForTwo": "₹450 for two",
                                                "cuisines": [
                                                    "Biryani",
                                                    "Arabian",
                                                    "North Indian"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "459711",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "4.9K+",
                                                "promoted": true,
                                                "adTrackingId": "cid=20661962~p=1~adgrpid=20661962#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=769775~eid=4007eb51-0c01-44a2-aad4-86a5493e648b~srvts=1731954390376~collid=45995",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 1.9,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "1.9 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-18 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {},
                                                        "textBased": {},
                                                        "imageBased": {}
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.4",
                                                        "ratingCount": "3.5K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                                "campaignId": "20661962"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=769775",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "65797",
                                                "name": "Leon's - Burgers & Wings (Leon Grill)",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "American",
                                                    "Snacks",
                                                    "Turkish",
                                                    "Portuguese",
                                                    "Continental"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "371281",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "53K+",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 1.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "1.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 04:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textExtendedBadges": {},
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.5",
                                                        "ratingCount": "4.2K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=65797",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "390057",
                                                "name": "NH1 Bowls - Highway To North",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/b1e9f652-dc8d-4789-9710-6485ec06846e_390057.jpg",
                                                "locality": "6th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "North Indian",
                                                    "Punjabi",
                                                    "Home Food"
                                                ],
                                                "avgRating": 4.6,
                                                "parentId": "22452",
                                                "avgRatingString": "4.6",
                                                "totalRatingsString": "895",
                                                "sla": {
                                                    "deliveryTime": 15,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "10-20 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "description": "",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "imageBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=390057",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "643665",
                                                "name": "WeFit - Protein Bowls, Salads & Sandwiches",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/b85b2484-a283-4550-8603-cb8f00cc7757_643665.JPG",
                                                "locality": "Patel Narayana Reddy Layout",
                                                "areaName": "Ejipura",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Healthy Food",
                                                    "Salads",
                                                    "Keto",
                                                    "Snacks"
                                                ],
                                                "avgRating": 4.6,
                                                "parentId": "355285",
                                                "avgRatingString": "4.6",
                                                "totalRatingsString": "395",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-30 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "brand",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "description": "",
                                                                        "shortDescription": "brand",
                                                                        "fontColor": "#7E808C"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=643665",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "733092",
                                                "name": "Caterspoint",
                                                "cloudinaryImageId": "be3c347a3ff9e54393083264ebb9228f",
                                                "locality": "Hosur Road",
                                                "areaName": "HSR",
                                                "costForTwo": "₹500 for two",
                                                "cuisines": [
                                                    "Salads",
                                                    "Healthy food",
                                                    "Snacks",
                                                    "pastas",
                                                    "Lebanese",
                                                    "Mexican",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "11011",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "1.5K+",
                                                "promoted": true,
                                                "adTrackingId": "cid=21409114~p=2~adgrpid=21409114#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=733092~eid=d5e9bf27-25d2-4270-871d-3d05da5941d0~srvts=1731954390376~collid=45995",
                                                "sla": {
                                                    "deliveryTime": 26,
                                                    "lastMileTravel": 1.7,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "1.7 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 01:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "newg.png",
                                                            "description": "Gourmet"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {},
                                                        "textBased": {},
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "imageId": "newg.png",
                                                                        "description": "Gourmet"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                                "campaignId": "21409114"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=733092",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "750225",
                                                "name": "Daily Kitchen - Homely Meals",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750225.JPG",
                                                "locality": "6TH BLOCK",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Home Food",
                                                    "Indian",
                                                    "North Indian",
                                                    "Thalis"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "444382",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "417",
                                                "sla": {
                                                    "deliveryTime": 15,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "10-20 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "description": "",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=750225",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "681439",
                                                "name": "LeanCrust Pizza- ThinCrust Experts",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/02dd8027-a849-4cc5-9411-ea8e8cc767f9_681439.jpg",
                                                "locality": "6TH BLOCK",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "Pizzas",
                                                    "Italian",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.7,
                                                "parentId": "11216",
                                                "avgRatingString": "4.7",
                                                "totalRatingsString": "303",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-30 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "description": "",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=681439",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "622030",
                                                "name": "MOJO Pizza - 2X Toppings",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/39cb95eb-d5ec-43d5-bd0b-e3f7b65a7d94_622030.JPG",
                                                "locality": "Patel Narayana Reddy Layout",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Pizzas",
                                                    "Italian",
                                                    "Fast Food",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "11329",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "943",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-30 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "description": "",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=622030",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "523888",
                                                "name": "Biryani Blues",
                                                "cloudinaryImageId": "97377e54937c079fe269d744aa66274a",
                                                "locality": "7th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Biryani",
                                                    "Hyderabadi",
                                                    "Lucknowi",
                                                    "Kebabs"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "13813",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "2.0K+",
                                                "promoted": true,
                                                "adTrackingId": "cid=21405554~p=4~adgrpid=21405554#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=523888~eid=954ee6d5-0f1e-4aed-8e6e-39252a0fc0b6~srvts=1731954390376~collid=45995",
                                                "sla": {
                                                    "deliveryTime": 24,
                                                    "lastMileTravel": 1.1,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "1.1 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 03:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹75",
                                                    "discountTag": "POCKET HERO",
                                                    "discountCalloutInfo": {
                                                        "message": "Free Delivery",
                                                        "logoCtx": {
                                                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                                                        }
                                                    },
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "3.8",
                                                        "ratingCount": "195"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                                "campaignId": "21405554"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=523888",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "793210",
                                                "name": "Aattutheeram Kerala Restaurant",
                                                "cloudinaryImageId": "7dad18ba53a7f5fd4df728f9173ad706",
                                                "locality": "Thippiah Layout",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Kerala",
                                                    "Biryani",
                                                    "Chinese",
                                                    "Snacks",
                                                    "Seafood",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "21348",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "537",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "0.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-18 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {},
                                                        "textBased": {},
                                                        "imageBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "15% OFF",
                                                    "subHeader": "UPTO ₹45",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=793210",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "108097",
                                                "name": "Ambur Star Briyani Since 1890",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/12/bee2f2d5-6a39-477a-b669-c9df142ed5d0_108097.jpg",
                                                "locality": "2nd Stage",
                                                "areaName": "BTM Layout",
                                                "costForTwo": "₹500 for two",
                                                "cuisines": [
                                                    "Biryani",
                                                    "Chettinad",
                                                    "Andhra",
                                                    "Beverages",
                                                    "Seafood"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "21400",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "20K+",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "3.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=108097",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "534235",
                                                "name": "Cheesecake & Co.",
                                                "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Bakery"
                                                ],
                                                "avgRating": 4.6,
                                                "parentId": "387417",
                                                "avgRatingString": "4.6",
                                                "totalRatingsString": "2.8K+",
                                                "sla": {
                                                    "deliveryTime": 23,
                                                    "lastMileTravel": 1.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "1.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "newg.png",
                                                            "description": "Gourmet"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {},
                                                        "textBased": {},
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "imageId": "newg.png",
                                                                        "description": "Gourmet"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "₹100 OFF",
                                                    "subHeader": "ABOVE ₹299",
                                                    "discountTag": "FLAT DEAL",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "3.3",
                                                        "ratingCount": "107"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=534235",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        }
                                    ],
                                    "theme": "RESTAURANT_GROUP_FAVOURITE_THEME",
                                    "widgetType": "WIDGET_TYPE_FAVOURITES",
                                    "style": {},
                                    "collectionId": "45995"
                                }
                            },
                            "footer": {
                                "labelWrapper": {}
                            }
                        }
                    },
                    {
                        "relevance": {},
                        "gridWidget": {
                            "header": {
                                "title": "Offers For You",
                                "action": {},
                                "headerStyling": {
                                    "padding": {
                                        "left": 16,
                                        "top": 24,
                                        "bottom": 24
                                    }
                                }
                            },
                            "layout": {
                                "rows": 1,
                                "columns": 5,
                                "horizontalScrollEnabled": true,
                                "itemSpacing": 4,
                                "widgetPadding": {
                                    "top": 8
                                },
                                "containerStyle": {
                                    "containerPadding": {
                                        "left": 16,
                                        "bottom": 24
                                    }
                                },
                                "scrollBar": {
                                    "scrollStyling": {
                                        "padding": {}
                                    }
                                },
                                "autoScrollConfig": {},
                                "separatorConfig": {}
                            },
                            "imageGridCards": {
                                "info": [
                                    {
                                        "id": "410105",
                                        "imageId": "rng/md/carousel/production/ngjatt8hwriaytmugmqz",
                                        "action": {
                                            "link": "swiggy://collectionV2?collection_id=54793&tags=layout_ux4,DISCOUNTING_COUPON_DEAL60",
                                            "text": "DEAL60",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "DEAL60",
                                            "altTextCta": "Tap to grab best deals from best restaurant"
                                        }
                                    },
                                    {
                                        "id": "410104",
                                        "imageId": "rng/md/carousel/production/dzm1eo2punmiqd1idyzn",
                                        "action": {
                                            "link": "swiggy://collectionV2?collection_id=54802&tags=DISCOUNTING_COUPON_TRYNEW",
                                            "text": "TRYNEW",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "TRYNEW",
                                            "altTextCta": "explore Unique tastes from new eateries"
                                        }
                                    },
                                    {
                                        "id": "410121",
                                        "imageId": "rng/md/carousel/production/skp6dyt64rxasxs3bqse",
                                        "action": {
                                            "link": "swiggy://collectionV2?collection_id=54908&tags=layout_ux4,DISCOUNTING_COUPON_SWIGGYIT",
                                            "text": "TRYNEW",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "SWIGGYIT",
                                            "altTextCta": "Offers for 1 Upto 50% off"
                                        }
                                    },
                                    {
                                        "id": "410109",
                                        "imageId": "rng/md/carousel/production/mbcjw5tiuemimw1pfjli",
                                        "action": {
                                            "link": "swiggy://collectionV2?collection_id=54797&tags=layout_ux4,DISCOUNTING_COUPON_JUMBO",
                                            "text": "JUBO",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "JUMBO",
                                            "altTextCta": "DEALS FOR TWO - UPTO Rs.200 OFF"
                                        }
                                    },
                                    {
                                        "id": "410114",
                                        "imageId": "rng/md/carousel/production/glitfsp43tqn8rsfq23a",
                                        "action": {
                                            "link": "swiggy://collectionV2?collection_id=50880&tags=layout_ux4,DISCOUNTING_COUPON_PARTY",
                                            "text": "PARTY",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "PARTY",
                                            "altTextCta": "Party Steals upto 300/- off"
                                        }
                                    }
                                ],
                                "style": {
                                    "width": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 0.35714287,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                    },
                                    "height": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 1.1916667,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                    }
                                }
                            },
                            "id": "Home_P2_Food_Offerwidget_MainComponent_Scrollcards",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                                    "info": [
                                        {
                                            "id": "410105",
                                            "imageId": "rng/md/carousel/production/ngjatt8hwriaytmugmqz",
                                            "action": {
                                                "link": "swiggy://collectionV2?collection_id=54793&tags=layout_ux4,DISCOUNTING_COUPON_DEAL60",
                                                "text": "DEAL60",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "DEAL60",
                                                "altTextCta": "Tap to grab best deals from best restaurant"
                                            },
                                            "entityId": "54793",
                                            "frequencyCapping": {},
                                            "externalMarketing": {}
                                        },
                                        {
                                            "id": "410104",
                                            "imageId": "rng/md/carousel/production/dzm1eo2punmiqd1idyzn",
                                            "action": {
                                                "link": "swiggy://collectionV2?collection_id=54802&tags=DISCOUNTING_COUPON_TRYNEW",
                                                "text": "TRYNEW",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "TRYNEW",
                                                "altTextCta": "explore Unique tastes from new eateries"
                                            },
                                            "entityId": "54802",
                                            "frequencyCapping": {},
                                            "externalMarketing": {}
                                        },
                                        {
                                            "id": "410121",
                                            "imageId": "rng/md/carousel/production/skp6dyt64rxasxs3bqse",
                                            "action": {
                                                "link": "swiggy://collectionV2?collection_id=54908&tags=layout_ux4,DISCOUNTING_COUPON_SWIGGYIT",
                                                "text": "TRYNEW",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "SWIGGYIT",
                                                "altTextCta": "Offers for 1 Upto 50% off"
                                            },
                                            "entityId": "54908",
                                            "frequencyCapping": {},
                                            "externalMarketing": {}
                                        },
                                        {
                                            "id": "410109",
                                            "imageId": "rng/md/carousel/production/mbcjw5tiuemimw1pfjli",
                                            "action": {
                                                "link": "swiggy://collectionV2?collection_id=54797&tags=layout_ux4,DISCOUNTING_COUPON_JUMBO",
                                                "text": "JUBO",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "JUMBO",
                                                "altTextCta": "DEALS FOR TWO - UPTO Rs.200 OFF"
                                            },
                                            "entityId": "54797",
                                            "frequencyCapping": {},
                                            "externalMarketing": {}
                                        },
                                        {
                                            "id": "410114",
                                            "imageId": "rng/md/carousel/production/glitfsp43tqn8rsfq23a",
                                            "action": {
                                                "link": "swiggy://collectionV2?collection_id=50880&tags=layout_ux4,DISCOUNTING_COUPON_PARTY",
                                                "text": "PARTY",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "PARTY",
                                                "altTextCta": "Party Steals upto 300/- off"
                                            },
                                            "entityId": "50880",
                                            "frequencyCapping": {},
                                            "externalMarketing": {}
                                        }
                                    ],
                                    "style": {
                                        "width": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 0.35714287,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                        },
                                        "height": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 1.1916667,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                        }
                                    }
                                }
                            },
                            "footer": {
                                "labelWrapper": {}
                            }
                        }
                    },
                    {
                        "relevance": {},
                        "gridWidget": {
                            "header": {
                                "title": "All Restaurants Nearby",
                                "subtitle": "Discover unique tastes near you",
                                "action": {},
                                "imageId": "rng/md/production/ipai4xhkoy9ovshdnyn6",
                                "headerStyling": {
                                    "padding": {
                                        "left": 16,
                                        "top": 24,
                                        "bottom": 24
                                    }
                                }
                            },
                            "layout": {
                                "rows": 25,
                                "columns": 1,
                                "lineSpacing": 24,
                                "widgetPadding": {},
                                "containerStyle": {
                                    "containerPadding": {
                                        "right": 12,
                                        "bottom": 8
                                    }
                                },
                                "scrollBar": {
                                    "scrollStyling": {
                                        "padding": {}
                                    }
                                },
                                "autoScrollConfig": {},
                                "separatorConfig": {}
                            },
                            "imageGridCards": {
                                "style": {
                                    "width": {},
                                    "height": {}
                                }
                            },
                            "id": "restaurantCollectionDeliveringNowTheme",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantInfoWithStyle",
                                    "restaurants": [
                                        {
                                            "info": {
                                                "id": "660675",
                                                "name": "Cafe Amudham",
                                                "cloudinaryImageId": "384d020ad18d2752ddd119cb585024d7",
                                                "locality": "5th Block Kormangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹200 for two",
                                                "cuisines": [
                                                    "South Indian",
                                                    "Snacks"
                                                ],
                                                "avgRating": 4.6,
                                                "parentId": "396620",
                                                "avgRatingString": "4.6",
                                                "totalRatingsString": "14K+",
                                                "promoted": true,
                                                "adTrackingId": "cid=21511692~p=0~adgrpid=21511692#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=660675~eid=06629d18-08c6-44ce-9502-de7d017cb5c7~srvts=1731954390383~collid=45826",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 0.7,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "0.7 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-18 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "description": ""
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "₹100 OFF",
                                                    "subHeader": "ABOVE ₹499",
                                                    "discountTag": "FLAT DEAL",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                                "campaignId": "21511692"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=660675",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "10576",
                                                "name": "Pizza Hut",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
                                                "locality": "6th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Pizzas"
                                                ],
                                                "avgRating": 4.2,
                                                "parentId": "721",
                                                "avgRatingString": "4.2",
                                                "totalRatingsString": "21K+",
                                                "sla": {
                                                    "deliveryTime": 31,
                                                    "lastMileTravel": 0.9,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "30-35 mins",
                                                    "lastMileTravelString": "0.9 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 04:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textExtendedBadges": {},
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.6",
                                                        "ratingCount": "3.1K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=10576",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "671928",
                                                "name": "KFC",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/a64ce30a-7492-444b-a485-1b7e2804e091_671928.JPG",
                                                "locality": "7th Block",
                                                "areaName": "Koramangla",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "Fast Food",
                                                    "Rolls & Wraps"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "547",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "3.3K+",
                                                "sla": {
                                                    "deliveryTime": 26,
                                                    "lastMileTravel": 1.2,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "1.2 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {},
                                                        "textBased": {},
                                                        "imageBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=671928",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "769775",
                                                "name": "Nahdi Mandi Restaurant",
                                                "cloudinaryImageId": "8e82f6e42f5e5bde0649f1f8f48209d8",
                                                "locality": "BTM Layout",
                                                "areaName": "BTM Layout",
                                                "costForTwo": "₹450 for two",
                                                "cuisines": [
                                                    "Biryani",
                                                    "Arabian",
                                                    "North Indian"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "459711",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "4.9K+",
                                                "promoted": true,
                                                "adTrackingId": "cid=20661962~p=1~adgrpid=20661962#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=769775~eid=a590dbc7-0cbb-46fe-8b96-5202abe22dbb~srvts=1731954390383~collid=45826",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 1.9,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "1.9 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-18 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.4",
                                                        "ratingCount": "3.5K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                                "campaignId": "20661962"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=769775",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "23678",
                                                "name": "McDonald's",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg",
                                                "locality": "5th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "Beverages",
                                                    "Cafe",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "630",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "63K+",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 1.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "1.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:55:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                            "description": "Delivery!"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                                        "description": "Delivery!"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textExtendedBadges": {},
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "ITEMS",
                                                    "subHeader": "AT ₹99",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=23678",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "65797",
                                                "name": "Leon's - Burgers & Wings (Leon Grill)",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "American",
                                                    "Snacks",
                                                    "Turkish",
                                                    "Portuguese",
                                                    "Continental"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "371281",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "53K+",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 1.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "1.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 04:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.5",
                                                        "ratingCount": "4.2K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=65797",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "733092",
                                                "name": "Caterspoint",
                                                "cloudinaryImageId": "be3c347a3ff9e54393083264ebb9228f",
                                                "locality": "Hosur Road",
                                                "areaName": "HSR",
                                                "costForTwo": "₹500 for two",
                                                "cuisines": [
                                                    "Salads",
                                                    "Healthy food",
                                                    "Snacks",
                                                    "pastas",
                                                    "Lebanese",
                                                    "Mexican",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "11011",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "1.5K+",
                                                "promoted": true,
                                                "adTrackingId": "cid=21409114~p=2~adgrpid=21409114#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=733092~eid=9d05c8d9-b01b-45e3-9e4c-83312d5a36e8~srvts=1731954390383~collid=45826",
                                                "sla": {
                                                    "deliveryTime": 26,
                                                    "lastMileTravel": 1.7,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "1.7 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 01:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "newg.png",
                                                            "description": "Gourmet"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "imageId": "newg.png",
                                                                        "description": "Gourmet"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                                "campaignId": "21409114"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=733092",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "390057",
                                                "name": "NH1 Bowls - Highway To North",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/b1e9f652-dc8d-4789-9710-6485ec06846e_390057.jpg",
                                                "locality": "6th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "North Indian",
                                                    "Punjabi",
                                                    "Home Food"
                                                ],
                                                "avgRating": 4.6,
                                                "parentId": "22452",
                                                "avgRatingString": "4.6",
                                                "totalRatingsString": "895",
                                                "sla": {
                                                    "deliveryTime": 15,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "10-20 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "description": "",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=390057",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "643665",
                                                "name": "WeFit - Protein Bowls, Salads & Sandwiches",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/b85b2484-a283-4550-8603-cb8f00cc7757_643665.JPG",
                                                "locality": "Patel Narayana Reddy Layout",
                                                "areaName": "Ejipura",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Healthy Food",
                                                    "Salads",
                                                    "Keto",
                                                    "Snacks"
                                                ],
                                                "avgRating": 4.6,
                                                "parentId": "355285",
                                                "avgRatingString": "4.6",
                                                "totalRatingsString": "395",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-30 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "brand",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "description": "",
                                                                        "shortDescription": "brand",
                                                                        "fontColor": "#7E808C"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=643665",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "523888",
                                                "name": "Biryani Blues",
                                                "cloudinaryImageId": "97377e54937c079fe269d744aa66274a",
                                                "locality": "7th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Biryani",
                                                    "Hyderabadi",
                                                    "Lucknowi",
                                                    "Kebabs"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "13813",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "2.0K+",
                                                "promoted": true,
                                                "adTrackingId": "cid=21405554~p=4~adgrpid=21405554#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=523888~eid=ce8074c3-a044-492a-8505-e8024e80e33f~srvts=1731954390383~collid=45826",
                                                "sla": {
                                                    "deliveryTime": 24,
                                                    "lastMileTravel": 1.1,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "1.1 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 03:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textExtendedBadges": {},
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹75",
                                                    "discountTag": "POCKET HERO",
                                                    "discountCalloutInfo": {
                                                        "message": "Free Delivery",
                                                        "logoCtx": {
                                                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                                                        }
                                                    },
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "3.8",
                                                        "ratingCount": "195"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                                "campaignId": "21405554"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=523888",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "750225",
                                                "name": "Daily Kitchen - Homely Meals",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750225.JPG",
                                                "locality": "6TH BLOCK",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Home Food",
                                                    "Indian",
                                                    "North Indian",
                                                    "Thalis"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "444382",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "417",
                                                "sla": {
                                                    "deliveryTime": 15,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "10-20 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "description": ""
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=750225",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "681439",
                                                "name": "LeanCrust Pizza- ThinCrust Experts",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/02dd8027-a849-4cc5-9411-ea8e8cc767f9_681439.jpg",
                                                "locality": "6TH BLOCK",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "Pizzas",
                                                    "Italian",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.7,
                                                "parentId": "11216",
                                                "avgRatingString": "4.7",
                                                "totalRatingsString": "303",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-30 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "description": "",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "imageBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=681439",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "976638",
                                                "name": "Mercely's Ice Cream",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/21/e11b810e-c7d2-400f-8eb1-6045e2464f65_976638.jpg",
                                                "locality": "KHB Colony",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹299 for two",
                                                "cuisines": [
                                                    "Ice Cream"
                                                ],
                                                "avgRating": 5,
                                                "parentId": "331788",
                                                "avgRatingString": "5.0",
                                                "totalRatingsString": "6",
                                                "promoted": true,
                                                "adTrackingId": "cid=21539353~p=5~adgrpid=21539353#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=976638~eid=b58cbd82-76e2-4f10-aefa-8acc4c5f011f~srvts=1731954390383~collid=45826",
                                                "sla": {
                                                    "deliveryTime": 26,
                                                    "lastMileTravel": 0.2,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "0.2 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "20% OFF",
                                                    "subHeader": "UPTO ₹50",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "isNewlyOnboarded": true,
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                                "campaignId": "21539353"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=976638",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "622030",
                                                "name": "MOJO Pizza - 2X Toppings",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/39cb95eb-d5ec-43d5-bd0b-e3f7b65a7d94_622030.JPG",
                                                "locality": "Patel Narayana Reddy Layout",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Pizzas",
                                                    "Italian",
                                                    "Fast Food",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "11329",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "943",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-30 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=622030",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "793210",
                                                "name": "Aattutheeram Kerala Restaurant",
                                                "cloudinaryImageId": "7dad18ba53a7f5fd4df728f9173ad706",
                                                "locality": "Thippiah Layout",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Kerala",
                                                    "Biryani",
                                                    "Chinese",
                                                    "Snacks",
                                                    "Seafood",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "21348",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "537",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "0.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-18 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "15% OFF",
                                                    "subHeader": "UPTO ₹45",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=793210",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "111667",
                                                "name": "The Reservoire",
                                                "cloudinaryImageId": "aaytv5nhjtsnyvbqmfi3",
                                                "locality": "5th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "Chinese",
                                                    "Continental",
                                                    "American",
                                                    "Desserts",
                                                    "Italian",
                                                    "Beverages",
                                                    "Seafood",
                                                    "Tandoor"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "20977",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "1.8K+",
                                                "promoted": true,
                                                "adTrackingId": "cid=21510786~p=6~adgrpid=21510786#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=111667~eid=50d0466c-4611-4bfa-a88a-7d3f33f752a3~srvts=1731954390383~collid=45826",
                                                "sla": {
                                                    "deliveryTime": 27,
                                                    "lastMileTravel": 1,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "1.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-18 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "20% OFF",
                                                    "subHeader": "UPTO ₹50",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.3",
                                                        "ratingCount": "13K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                                "campaignId": "21510786"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=111667",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "108097",
                                                "name": "Ambur Star Briyani Since 1890",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/12/bee2f2d5-6a39-477a-b669-c9df142ed5d0_108097.jpg",
                                                "locality": "2nd Stage",
                                                "areaName": "BTM Layout",
                                                "costForTwo": "₹500 for two",
                                                "cuisines": [
                                                    "Biryani",
                                                    "Chettinad",
                                                    "Andhra",
                                                    "Beverages",
                                                    "Seafood"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "21400",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "20K+",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "3.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "description": "",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=108097",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "534235",
                                                "name": "Cheesecake & Co.",
                                                "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Bakery"
                                                ],
                                                "avgRating": 4.6,
                                                "parentId": "387417",
                                                "avgRatingString": "4.6",
                                                "totalRatingsString": "2.8K+",
                                                "sla": {
                                                    "deliveryTime": 23,
                                                    "lastMileTravel": 1.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "1.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "newg.png",
                                                            "description": "Gourmet"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "imageId": "newg.png",
                                                                        "description": "Gourmet"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textExtendedBadges": {},
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "₹100 OFF",
                                                    "subHeader": "ABOVE ₹299",
                                                    "discountTag": "FLAT DEAL",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "3.3",
                                                        "ratingCount": "107"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=534235",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "955129",
                                                "name": "Delhi Thali & Bowl",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/53340de8-fb70-467f-a81f-0bfc7f6f9c0c_955129 (1).jpg",
                                                "locality": " btm layout",
                                                "areaName": "BTM",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "Thalis"
                                                ],
                                                "avgRating": 4.2,
                                                "veg": true,
                                                "parentId": "559898",
                                                "avgRatingString": "4.2",
                                                "totalRatingsString": "57",
                                                "promoted": true,
                                                "adTrackingId": "cid=21413354~p=7~adgrpid=21413354#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=955129~eid=9c72848d-a3e6-48d4-9092-ee3141c3f09f~srvts=1731954390383~collid=45826",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 3.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "3.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 05:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textExtendedBadges": {},
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "isNewlyOnboarded": true,
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                                "campaignId": "21413354"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=955129",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "11211",
                                                "name": "Taco Bell",
                                                "cloudinaryImageId": "d3b3db238b6448c3f297c851e9d0b96b",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "Mexican",
                                                    "Fast Food",
                                                    "Snacks"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "1557",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "25K+",
                                                "sla": {
                                                    "deliveryTime": 20,
                                                    "lastMileTravel": 0.9,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "0.9 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 01:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.2",
                                                        "ratingCount": "5.8K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=11211",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "812616",
                                                "name": "Beyondburg Inc",
                                                "cloudinaryImageId": "cbf725cf7f6e603aa14893125098466c",
                                                "locality": "BTM Layout",
                                                "areaName": "Central Bangalore",
                                                "costForTwo": "₹200 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "Fast Food",
                                                    "American",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.6,
                                                "parentId": "43816",
                                                "avgRatingString": "4.6",
                                                "totalRatingsString": "548",
                                                "promoted": true,
                                                "adTrackingId": "cid=20662004~p=8~adgrpid=20662004#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=812616~eid=3b971c8a-38a0-4829-be20-181fd0e44c06~srvts=1731954390383~collid=45826",
                                                "sla": {
                                                    "deliveryTime": 23,
                                                    "lastMileTravel": 1,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "1.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 04:45:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "ITEMS",
                                                    "subHeader": "AT ₹299",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                                "campaignId": "20662004"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=812616",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "330996",
                                                "name": "Savoury Seashell Restaurant - Kerala Style",
                                                "cloudinaryImageId": "134015e074c8776c3c4872e3384c6aa4",
                                                "locality": "Maruti Nagar",
                                                "areaName": "Btm Layout",
                                                "costForTwo": "₹450 for two",
                                                "cuisines": [
                                                    "Arabian",
                                                    "Indian",
                                                    "Chinese",
                                                    "Tandoor",
                                                    "Biryani",
                                                    "Seafood",
                                                    "Kerala"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "472352",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "4.5K+",
                                                "sla": {
                                                    "deliveryTime": 26,
                                                    "lastMileTravel": 2,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "2.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textExtendedBadges": {},
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "10% OFF",
                                                    "subHeader": "UPTO ₹40",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=330996",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "656392",
                                                "name": "Subway",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/028cd410-8376-4db2-aae3-0a34de711943_656392.JPG",
                                                "locality": "1st Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Salads",
                                                    "Snacks",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "2",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "3.0K+",
                                                "sla": {
                                                    "deliveryTime": 20,
                                                    "lastMileTravel": 1.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "1.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 03:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                                                            "description": "Delivery!"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {},
                                                        "textBased": {},
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                                                                        "description": "Delivery!"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "ITEMS",
                                                    "subHeader": "AT ₹119",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=656392",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "413824",
                                                "name": "Al Taza",
                                                "cloudinaryImageId": "e0a2deada3fd2737b6e3924b731a66b3",
                                                "locality": "4th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "Arabian",
                                                    "Lebanese",
                                                    "Fast Food"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "405299",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "4.8K+",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 1.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "1.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 01:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "60% OFF",
                                                    "subHeader": "UPTO ₹120",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=413824",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "235843",
                                                "name": "Say Cheese Cake",
                                                "cloudinaryImageId": "ciqll0gtoxgq9nevyste",
                                                "locality": "6th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹175 for two",
                                                "cuisines": [
                                                    "Desserts",
                                                    "Beverages",
                                                    "Bakery"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "179289",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "3.5K+",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "0.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2024-11-19 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "60% OFF",
                                                    "subHeader": "UPTO ₹120",
                                                    "logoCtx": {
                                                        "text": "BENEFITS"
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=235843",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        }
                                    ],
                                    "theme": "DELIVERING_NOW",
                                    "collectionId": "45826",
                                    "style": {}
                                }
                            },
                            "footer": {
                                "labelWrapper": {
                                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.Label",
                                    "text": "See all restaurants",
                                    "textColor": "#ffffff",
                                    "fontSize": 17,
                                    "fontName": "FONT_NAME_BOLD",
                                    "alignment": "ALIGNMENT_CENTER",
                                    "borderRadius": 6,
                                    "margin": {
                                        "left": 16,
                                        "top": 16,
                                        "right": 16,
                                        "bottom": 16
                                    },
                                    "padding": {
                                        "top": 18,
                                        "bottom": 18
                                    },
                                    "backgroundColor": "#e46d47",
                                    "cta": {
                                        "link": "swiggy://restaurantList",
                                        "text": "See all restaurants",
                                        "type": "DEEPLINK"
                                    },
                                    "maxLines": 1
                                }
                            }
                        }
                    }
                ],
                "firstOffsetRequest": true,
                "cacheExpiryTime": {
                    "value": 600
                },
                "nextFetch": 3
            },
            "requestId": "164c51d1-943e-4a57-8bcb-fb0e2317ea8f"
        },
        "tid": "ea572023-0aa0-45c8-bcca-18cb91bfcc58",
        "sid": "hb9f8014-c28b-4232-b0ec-5e934efd8dae",
        "deviceId": "651a0a28-ddd6-5689-7646-93ed2f2adec0",
        "csrfToken": "ShHIxsglPJRh-BS4sBXN-3Rqe6LKiq6DKcw8mpg4"
    }
]
const Body = () => {
    const [restaurants, setRestaurants] = useState(initialResobj);
    const [searchText, setSearchText] = useState("");
   
    useEffect(() =>{
        console.log("useeffect called");
        fetchData();      
    }, []);
   console.log("Body Rendred");
   
   const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9352403&lng=77.624532");
      const json = await response.json();
      console.log(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
      setRestaurants(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
  };
  
    const filterData = (searchText, restaurants) => {
        return restaurants.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
    };
    
    const filterTopRated = () => {
        const filteredRestaurants = restaurants.filter(res => parseFloat(res.info.avgRating) > 4.6);
        setRestaurants(filteredRestaurants); 
        console.log(filteredRestaurants);
    };
    
    return (
        <div className='body'>
            <div className='search' >
            <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            const data = filterData(searchText, initialResobj);
                            setRestaurants(data);
                        }
                    }}
                     />
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchText, initialResobj);
                        setRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            <button className="filter-btn" onClick={filterTopRated}>
            Top Rated Restaurant
    </button> 
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
                   {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))} </div>
        </div>
    );
};

export default Body
//1. monolith 
//--2. microservices
//2.API - loads -API - RENDER
//3. Loads - render - api - render again // this is good for react //
//4. 