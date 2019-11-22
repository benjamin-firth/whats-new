import React from 'react';
import { shallow  } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let wrapper;
  let mockSearchHandler;
  
  beforeEach(() => {
    mockSearchHandler = jest.fn();
    wrapper = shallow(<SearchForm 
      searchHandler={mockSearchHandler}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is invoked', () => {
    const mockEvent = {target: {value: 'test'}};
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('keyword')).toEqual('test');
  })

  it('should call the the searchHandler method when button is clicked', () => {

    wrapper.find('button').simulate('click');
    expect(mockSearchHandler).toHaveBeenCalled();
  })
})