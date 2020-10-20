import React, { Dispatch } from 'react';
import './RestaurantList.css';
import { useDispatch } from 'react-redux';
import * as types from '../../type';

type Props = {
  restaurant: types.IRestaurant
}

export const RestaurantList: React.FC<Props> = ({ restaurant }) => {
  const dispatch: Dispatch<any> = useDispatch()

  return(
    <div className="post card">
    <div className="card-content">
    <span className="card-title">{restaurant.name}</span>
    <div className="card-action">
      <p>{restaurant.cuisine}</p><p>Price</p>
      <p>Region <i className="material-icons">location_on</i></p><p>City</p>
    </div>
    </div>
  </div>

  )
}


 
/*
    state = {
    restaurants: []
  }

  //skal dette skje i redux?
    componentDidMount(){
    axios.get('https://')
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
    ) 
  */

  