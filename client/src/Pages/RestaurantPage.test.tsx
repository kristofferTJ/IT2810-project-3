import React from 'react';
import RestaurantPage from './RestaurantPage';
import RestaurantInfo from '../components/Restaurant page/RestaurantInfo';
import Reviews  from "../components/Review/Reviews";

import { shallow } from 'enzyme'

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => mockData
}));

let mockData: any;
let component;

 test('Check if RestaurantInfo is loaded correctly', () => {
     mockData = true;
     component = shallow(<RestaurantPage/>);
     expect(component.contains(<RestaurantInfo/>)).toBe(true);
 })

test('Check if Reviews is loaded correctly', () => {
    mockData = true;
    component = shallow(<RestaurantPage/>);
    expect(component.contains(<Reviews/>)).toBe(true);
})
