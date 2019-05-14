import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "../../assets/images/team.jpg";
// import image2 from "../assets/images/neck.jpg";
// import image3 from "../assets/images/front.webp";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


class TestimonialCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default TestimonialCarousel;
// ReactDOM.render(<TestimonialCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>