import React, {Component}from "react";
import Slider from "react-slick";

class TestimonialCarousel extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
      <Slider {...settings}>
        <div>
          <h3>TESTIIMONIAL</h3>
        </div>
        <div>
          <h3>as,dkflaskjdflaksdjflkasjdflkasdjflaksdjf2</h3>
        </div>
        <div>
          <h3>sdljfalskdjflasdjflaksdjflaksdjflkajsdf</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default TestimonialCarousel;