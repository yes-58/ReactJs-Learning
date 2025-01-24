import React from "react";
import ReactDOM from "react-dom";

const Header =()=>{
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}
const resList=[{
    "info": {
"id": "393840",
"name": "Chinese Wok",
"cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
"locality": "Chikka Lakshmaiah Layout",
"areaName": "Adugodi",
"costForTwo": "₹250 for two",
"cuisines": [
"Chinese",
"Asian",
"Tibetan",
"Desserts"
],
"avgRating": 4.3,
"parentId": "61955",
"avgRatingString": "4.3",
"totalRatingsString": "5.3K+",
"sla": {
"deliveryTime": 41,
"lastMileTravel": 2.6,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "2.6 km",
"iconType": "ICON_TYPE_EMPTY"
}}},{"info": {
"id": "10576",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
"locality": "6th Block",
"areaName": "Koramangala",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"," Fast Food"
],
"avgRating": 4.2,
"parentId": "721",
"avgRatingString": "4.2",
"totalRatingsString": "21K+",
"sla": {
"deliveryTime": 41,
"lastMileTravel": 0.7,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "0.7 km",
"iconType": "ICON_TYPE_EMPTY"
}
}}]

const RestaurantCard=(props)=>{
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData.info
    return (
        <div className="res-card" style={{backgroundColor:'#f0f0f0'}}>
            <img className="res-logo" alt="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>Rating: {avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>

    )

}
const Body =()=>{
    return(
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-container" >
                {
                    resList.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData = {restaurant} />))
                }
            </div>
            
        </div>
    )
}
const AppLayout =()=>{
    return (
    <div className="app">
        <Header />
        <Body />
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)