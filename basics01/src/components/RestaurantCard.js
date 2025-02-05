import { CDN_URL } from "../utils/constants";
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
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${resData.info.cloudinaryImageId}`}
                alt={resData.info.name}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>✳️{avgRating} stars</h4>
            <h4>{locality}</h4>
            <h4>{costForTwo}</h4>
            <button className='btn-buy'>Menu</button>
        </div>
    );
};
export default RestaurantCard;