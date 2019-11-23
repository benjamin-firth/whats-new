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

  it('should update state when searchHandler is invoked', () => {
    const wrapper = shallow(<App />);

    const mockState = {
      currentPage: 'local',
      allData: {
        local: [
          {
            id: 1,
            headline: "The Who postpones Denver Concert at the Pepsi Center",
            img: "https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg",
            description: "Classic-rock band The Who has postponed its Denver concert.",
            url: "https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/"
          },
          {
            id: 2,
            headline: "Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner",
            img: "https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376",
            description: "The 24-foot-tall chicken skeleton towers over the people who pass through the main hall of the Denver Central Library.",
            url: "https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/"
          }
        ]
      }
    };

    const expected = [{
      id: 2,
      headline: "Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner",
      img: "https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376",
      description: "The 24-foot-tall chicken skeleton towers over the people who pass through the main hall of the Denver Central Library.",
      url: "https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/"
    }]
    
    wrapper.setState(mockState);
    wrapper.instance().searchHandler('towers');
    expect(wrapper.state('allData').filteredData).toEqual(expected);
  })
})


