import React from 'react';
import { shallow  } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<SearchForm 
      searchHandler={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot();
  });
})