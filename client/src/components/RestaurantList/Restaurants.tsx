import React, { useEffect } from 'react';
import './RestaurantList.css';
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../store/actionCreators';
import { IRestaurant, IRestaurantList, IRestaurantReduxProps } from '../../type';
import * as types from '../../type';
import {RestaurantList} from './RestaurantList';

function Restaurants() {

      
   useEffect(() => {
     getRestaurants();
   }, [getRestaurants]);

   getRestaurants()


    const restaurants: readonly types.IRestaurant[] = useSelector(
        (state: any)=> state.restaurants.restaurants,
        shallowEqual
    );

    console.log("restaurants:"+JSON.stringify(restaurants))

    return(
        <div>
            {restaurants?.map((restaurant: types.IRestaurant) => (
                <RestaurantList
                key={restaurant._id}
                restaurant={restaurant}
                ></RestaurantList>
            ))}
        </div>
    )



}

export default Restaurants;
// const RestaurantList = ({getRestaurants, restaurant}: IRestaurantList) => {
  
  
//   useEffect(() => {
//     getRestaurants();
//   }, [getRestaurants]);


//   //const restaurants: IRestaurant[] = getRestaurants();
//   const dispatch = useDispatch();
//   const restaurants: readonly types.IRestaurant[] = useSelector((state)=> state, shallowEqual);

//   return(
//     <div className="container">
//       <div>
//        <input className='searchbar'
//                 placeholder='Search for restaurants . . .'>
//       </input>
//     </div>
//       <div className="post card">
//         <div className="card-content">
//         <span className="card-title">RestaurantName</span>
//         <div className="card-action">
//           <p>Cuisine</p><p>Price</p>
//           <p>Region <i className="material-icons">location_on</i></p><p>City</p>
//         </div>
//         </div>
//         <div>
//           {restaurants?.map((restaurant: types.IRestaurant) => (
//             restaurant.name
//           ))}
//         </div>
//       </div>
//     </div>
//   );

// };