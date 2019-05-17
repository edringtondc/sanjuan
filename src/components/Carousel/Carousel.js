import React, {Component}from "react";
import Slider from "react-slick";
import classes from "./carousel.module.css";

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
        <div className={classes.Wrapper}>
      <Slider {...settings}>
        <div>
          <p className={classes.Quote}>"I love the way that Dr. Tori adjusts me! And she listens to everything I say to make sure she gives me the best care possible!"</p>
          <p className={classes.Patient}>-Elisabeth E.</p>
        </div>
        <div>
        <p className={classes.Quote}>"I love the way that Dr. Tori adjusts me! And she listens to everything I say to make sure she gives me the best care possible! 
        I also love the acupucture and reflexology. and the location is amazing"</p>
          <p className={classes.Patient}>-Elisabeth E.</p>
        </div>
        <div>
        <p className={classes.Quote}>"I love the way that Dr. Tori adjusts me! And she listens to everything I say to make sure she gives me the best care possible!"</p>
          <p className={classes.Patient}>-Elisabeth E.</p>
        </div>
        <div>
        <p className={classes.Quote}>"I love the way that Dr. Tori adjusts me! And she listens to everything I say to make sure she gives me the best care possible!"</p>
          <p className={classes.Patient}>-Elisabeth E.</p>
        </div>
        <div>
        <p className={classes.Quote}>"I love the way that Dr. Tori adjusts me! And she listens to everything I say to make sure she gives me the best care possible!"</p>
          <p className={classes.Patient}>-Elisabeth E.</p>
        </div>
        <div>
        <p className={classes.Quote}>"I love the way that Dr. Tori adjusts me! And she listens to everything I say to make sure she gives me the best care possible!"</p>
          <p className={classes.Patient}>-Elisabeth E.</p>
        </div>
      </Slider>
      </div>
    );
  }
}

export default TestimonialCarousel;