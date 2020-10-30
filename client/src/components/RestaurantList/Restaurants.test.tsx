import React from 'react';
import Restaurants from './Restaurants';
import RestaurantObject from './Restaurants';
import { shallow } from 'enzyme';
import { Restaurant } from '../../../../backend/models/Restaurant';

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => mockRestaurant
}));

let mockRestaurant: any;
let component;

test('Check if restaurant is generated correctly', () => {
    mockRestaurant = 
        {
            _id:"5f8d931427a83122bcfdd8c3",
            name:"Credo",
            year:"2019",
            latitude:63.43391,
            longitude:10.39631,
            city:"Trondheim",
            region:"Norway",
            zipCode:"7066",
            cuisine:"Creative",
            price:"$$$$",
            url:"https://guide.michelin.com/no/en/trondelag/trondheim/restaurant/credo",
            ratings:[],
            comments:[],
            stars:1,
            __v:0
        }
    

    component = shallow(<Restaurants />);
    expect(
    component.contains(
      <RestaurantObject
        key={"5f9ac32f95120b7a2cea9218"}
        restaurant ={mockRestaurant}/>)).toBe(true);
});
    

