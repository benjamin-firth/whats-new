import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
  wrapper = shallow(<App />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when changeCurrentPage is called', () => {
    const mockEvent = {target: {id: 'local'}};
    const expected = 'local';

    wrapper.instance().changeCurrentPage(mockEvent);
    expect(wrapper.state('currentPage')).toEqual(expected);
  })
})


