import React from 'react';
import './RestaurantList.css';
import RestaurantPage from '../Restaurant page/RestaurantPage2';
// import axios from 'axios';
// import { render } from '@testing-library/react';
// import { ListenOptions } from 'net';


export default function RestaurantList() {
  return(
    <div className="container">
      <div className="post card">
        <div className="card-content">
        <span className="card-title">RestaurantName</span>
        <div className="card-action">
        <p>Cuisine</p><p>Price</p>
        <p>Region</p><p>City</p>
        </div>
        </div>
      </div>
    </div>
 

  /* state = {
    restaurants: []
  }

  //skal dette skje i redux?
    componentDidMount(){
    axios.get('https://...')
      .then(res => {
        console.log(res)
        this.setState({
          restaurants: res.data.slice(0,10) //viser kun de 10 første objektene
        })
      })
  }

  render() {
    const {restaurants} = this.state;
    const restaurantlist = restaurants.length ? (
      restaurants.map(restaurant => {
        return(
          <div className="post card" key={restaurant.id}>
            <div className="card-content">
              <span className="card-title">{restaurant.name}</span>
              <p>{restaurant.cuisine}</p>
            </div>
          </div> 
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )
  }
    return(
      <div className="container">
        <h4 className="center">Home</h4>
        {restaurantList}
      </div>
    ) */
  

  );
};


