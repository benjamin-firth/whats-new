import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  const mockProps = [{
    img:'image',
    headline:'headline',
    description:'my mock description',
    url:'www.google.com',
    id:'1234'
  }]

  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsContainer 
      props={mockProps}
    />)
    expect(wrapper).toMatchSnapshot();
  })
})