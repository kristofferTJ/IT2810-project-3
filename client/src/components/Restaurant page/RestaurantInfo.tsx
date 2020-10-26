import React, { useEffect } from "react";
import "./RestaurantInfo.css";
import star from "../../images/star.svg";
import location from "../../images/location.svg";
import { IRestaurant } from "../../../../backend/models/Restaurant";
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from '../../store/ducks/restaurantDuck';
import { updateSearch } from "../../store/ducks/searchDuck";

interface IParams {
  name: string;
}


function RestaurantInfo() {

  const params: IParams = useParams()  

  const dispatch = useDispatch();

  const search = useSelector((state: any)  => state.search)
  const restaurant = useSelector((state: any)  => state.restaurant)

  useEffect(() => {dispatch(updateSearch(params.name.toString()))})

  useEffect(() => {
      dispatch(
          fetchRestaurants(0, [], [], [] , search , "" , true)
      );
  }, [search])


  return (
    
    
    <div>

    <Header></Header>
    <div>
    {restaurant?.map((restaurant: IRestaurant) => (
      <div className="main">
      <h1>{restaurant.name}</h1>
      {restaurant!.stars === 1 ? (
        <img src={star} width="30" height="30"></img>
      ) : (
        ""
      )}
      {restaurant!.stars === 2 ? (
        <div>
          <img src={star} width="30" height="30"></img>
          <img src={star} width="30" height="30"></img>
        </div>
      ) : (
        ""
      )}
      {restaurant!.stars === 3 ? (
        <div>
          <img src={star} width="30" height="30"></img>
          <img src={star} width="30" height="30"></img>
          <img src={star} width="30" height="30"></img>
        </div>
      ) : (
        ""
      )}
      <div className="content">
        <div className="picture">
          {/* <img
            src={require("../../images/Italian.jpg")}
            alt="Italian"
            style={{ marginTop: 10 }}
          ></img> */}
        </div>
        <div className="info">
          <div className="attribute">
            <div className="font">
              <img src={location} width="20px" height="20px"></img>
            </div>
            {restaurant!.region}
          </div>
          <div className="attribute">
            <div className="font">
              <img src={location} width="20px" height="20px"></img>
            </div>
            {restaurant!.city}
          </div>
          <div className="attribute">
            <div className="font">Cuisine: </div>
            {restaurant!.cuisine}
          </div>
          <div className="attribute">
            <div className="font">Price: </div>
            {restaurant!.price}
          </div>
          <div className="attribute">
            <a href={restaurant!.url}>Hjemmeside</a>
          </div>
        </div>
      </div>
    </div>     
    ))}
    </div>
    
    </div>

  );
}

export default RestaurantInfo;
