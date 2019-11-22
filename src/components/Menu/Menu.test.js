import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  let wrapper;
  let mockClickHandler;

  beforeEach(() => {
    mockClickHandler = jest.fn();
    wrapper = shallow(<Menu 
      clickHandler={mockClickHandler}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call the clickHandler prop method when button is clicked', () => {

    wrapper.find('button').at(0).simulate('click');
    expect(mockClickHandler).toHaveBeenCalled();

    wrapper.find('button').at(1).simulate('click');
    expect(mockClickHandler).toHaveBeenCalled();

    wrapper.find('button').at(2).simulate('click');
    expect(mockClickHandler).toHaveBeenCalled();

    wrapper.find('button').at(3).simulate('click');
    expect(mockClickHandler).toHaveBeenCalled();

    wrapper.find('button').at(4).simulate('click');
    expect(mockClickHandler).toHaveBeenCalled();

  })
})