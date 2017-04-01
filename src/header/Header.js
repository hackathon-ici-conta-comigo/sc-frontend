import React from 'react';
import Carousel from './Carousel';
import TopNavigation from './TopNavigation'

class Header extends React.Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <Carousel />
      </div>
    )
  }
}


export default Header;
