import React from 'react';
import HeaderSlider from './header-slider/HeaderSlider';
import TopNavigation from './TopNavigation';

class Header extends React.Component {
  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <TopNavigation />
        <HeaderSlider {...settings}/>
      </div>
    );
  }
}

export default Header;
