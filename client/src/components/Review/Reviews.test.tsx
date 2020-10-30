import React from 'react';
import Comment from './Comment';
import Reviews from './Reviews';
import { mount, shallow } from 'enzyme'
import { string } from 'prop-types';


jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: () => ({
    }),
    useParams: () => { Credo : String }
  }));

let mockData: string = "god mat"; //commentobject
let component;


test('Check if comment-component recieve props', () => {
    component = mount(
        <Comment commentObject={"god mat"}></Comment>
    )
    expect(component.props()).toStrictEqual({commentObject: mockData})
});

