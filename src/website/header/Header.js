import React from 'react';
import HeaderSlider from './header-slider/HeaderSlider';
import TopNavigation from './top-navigation/TopNavigation';

export default class Header extends React.Component {
  render() {
    return (
      <section>
        <TopNavigation />
        <HeaderSlider />
      </section>
    );
  }
};
