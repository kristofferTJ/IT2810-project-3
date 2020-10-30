import React from 'react';
import Comment from './Comment';
import { mount } from 'enzyme'

jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: () => ({
    })
}));

let mockData: string = "god mat"; //commentobject
let component;


test('Check if comment-component recieve props', () => {
    component = mount(
        <Comment commentObject={"god mat"}></Comment>
    )
    expect(component.props()).toStrictEqual({commentObject: mockData})
});




    
