import React from 'react';
import HeaderSlider from './header-slider/HeaderSlider';
import TopNavigation from './top-navigation/TopNavigation';

export default class Header extends React.Component {
  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <section>
        <TopNavigation />
        <HeaderSlider {...settings}/>
      </section>
    );
  }
};
