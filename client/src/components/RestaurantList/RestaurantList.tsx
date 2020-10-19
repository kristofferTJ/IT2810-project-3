import React, { Component } from 'react';
import './RestaurantList.css';
import RestaurantPage from '../Restaurant page/RestaurantPage2';
import axios from 'axios';
import { render } from '@testing-library/react';
//import { ListenOptions } from 'net';


// export default function RestaurantList() {

  export default function RestaurantList(){

  return(
    <div className="container">
      <div className="post card">
        <div className="card-content">
        <span className="card-title">restaurant.name</span>
        <div className="card-action">
          <p>restaurant.cuisine</p><p>Price</p>
          <p>Region<i className="material-icons">location_on</i></p><p>City</p>
        </div>
        </div>
      </div>
    </div>

  /*
    state = {
    restaurants: []
  }

  useEffect(() => {
    const getRestaurants = () => {
      axios.get('http://localhost:8000/api/restaurant')
      .then(res => {
        console.log(res)
        this.setState({
          restaurants: JSON.parse(res)
        })
      })
}
    getRestaurants();
}, [])


  //skal dette skje i redux?
    componentDidMount(){
    axios.get('http://localhost:8000/api/restaurant')
      .then(res => {
        console.log(res)
        this.setState({
          restaurants: JSON.parse(res) 
        })
      })
  }

  render() {
    const {restaurants} = this.state;
    const restaurantlist = restaurants.length ? (
      restaurants.map(restaurant => {
        return(
          <div className="container">
            <div className="post card" key={restaurant.id}>
              <div className="card-content">
              <span className="card-title">{restaurant.name}</span>
              <div className="card-action">
                <p>{restaurant.cuisine}</p><p>Price</p>
                <p>Region <i className="material-icons">location_on</i></p><p>City</p>
              </div>
              </div>
            </div>
          </div>
      })
    ) : (
      <div className="center">No posts yet</div>
    )
  }
  

    return(
      <div className="container">
        {restaurantlist}
      </div>
    */

  )
};


