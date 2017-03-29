import React from 'react';
import Slider from 'react-slick';


var Carousel = React.createClass({
  render: function() {
  	var settings = {
    	dots: true
    }
    var style= {
      marginBottom: '20px'
    }
    return (
    	<div style={style}>
      	<Slider {...settings}>
        	<div><h1>Teste</h1></div>
          <div><h1>Teste</h1></div>
          <div><h1>Teste</h1></div>
        </Slider>
      </div>
    );
  }
});


export default Carousel;