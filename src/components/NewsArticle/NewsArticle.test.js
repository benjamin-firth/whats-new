import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsArticle 
      img={'image'}
      headline={'headline'}
      description={'my mock description'}
      url={'www.google.com'}
    />);
    expect(wrapper).toMatchSnapshot();
  })
})