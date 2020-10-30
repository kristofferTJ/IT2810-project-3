import React from 'react';
import MainPage from './MainPage';
import Restaurants from '../components/RestaurantList/Restaurants';
import Filtermenu from '../components/Filtermenu/Filtermenu';
import { shallow } from 'enzyme'

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => mockData
}));

let mockData: any;
let component;

test('Check if restaurantList is loaded and hidden correctly', () => {
    mockData = true;
    component = shallow(<MainPage/>);
    expect(component.contains(<Restaurants/>)).toBe(true);
})

test('Check if filtermenu is loaded and hidden correctly', () => {
    mockData = true;
    component = shallow(<MainPage/>);
    expect(component.contains(<Filtermenu/>)).toBe(true);
})
