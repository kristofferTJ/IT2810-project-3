import React from 'react';
import Comment from './Comment';
import Reviews from './Reviews';
import { mount, shallow } from 'enzyme'


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


test('Check that comment is not generated if it does not exist', () => {
    component = shallow(<Reviews></Reviews>)
    expect(component.contains(<Comment commentObject={""}/>)).toBe(false)
});

 test('Check if comments exist on button click', () => {
    component = shallow(<Reviews></Reviews>)
    const button = component.find('button');
    button.simulate('click');
    expect(component.contains(<Comment commentObject={""}/>)).toBe(true)
});


    
