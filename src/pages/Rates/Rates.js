import React from "react";


import KidPic from "../../assets/images/kids.jpg"

import RatesPic from "../../assets/images/Darrinsroom.webp"
import classes from './rates.module.css';
import Footer from "../../components/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar.js"




const Rates = () => {

    return (
        <div>
            <Toolbar />
            <div className={classes.Wrapper} id="RatesWrapper">
                <div className={classes.Space}></div>
                <div className={classes.Banner}>
                    <h1>Rates</h1>
                </div>

                <div className={classes.Body}>
                    <div className={classes.topRow} >
                        <h3 className={classes.Title}>Initial Consultation Including Treatment</h3>
                        <div className={classes.Initial} >
                            <ul className={classes.RatesUL}>
                                <li><span className={classes.Bold}>Chiropractic</span> - ADULT - 30 min - 60 min $130</li>

                                <li> <span className={classes.Bold}>Chiropractic</span> - CHILD (age 0-12) - 30 min - 60 min $75</li>

                                <li><span className={classes.Bold}>Chiropractic</span> - CHILD (age 13-18) - 30 min - 60 min $100</li>

                                <li><span className={classes.Bold}>Acupuncture or Cupping  or Bodywork</span> - 45 min - $70</li>

                                <li><span className={classes.Bold}>Acupuncture with Cupping Session</span>  - 45 min - 60 min - $70</li>
                                <li><span className={classes.Bold}>Traditional Chinese Medicine  Consultation</span>- 30 min - $30</li>

                                <li><span className={classes.Bold}>Biofeedback</span> - 90 min - 120 min  - $125</li>

                                <li><span className={classes.Bold}>Far Infrared Sauna</span> - 30 min - $20</li>

                                <li><span className={classes.Bold}>Massage</span> -  30 min - $40</li>

                                <li><span className={classes.Bold}>Massage</span> - 60 min - $70</li>

                                <li><span className={classes.Bold}>Massage</span> - 75 min - $90</li>

                                <li><span className={classes.Bold}>Massage</span> - 90 min - $115</li>

                                <li><span className={classes.Bold}>Reflexology</span> - 30 min - $45</li>

                            </ul>
                            <img src={RatesPic} alt="picture of room" />
                        </div>
                    </div>

                    <div className={classes.secondRow}>
                        <h3 className={classes.Title}>Regular Treatment Rates</h3>
                        <p className={classes.Subtitle}>We offer prepaid packages offering a 20% discount</p>
                        <div className={classes.Regular}>
                            <img src={RatesPic} alt="another clinic pic" />

                            <ul className={classes.RatesUL}>

                                <li><span className={classes.Bold}>Chiropractic</span> - ADULT - 15/30 min $70</li>

                                <li> <span className={classes.Bold}>Chiropractic</span> - CHILD (age 0-12) - 15/30 min - $35</li>

                                <li><span className={classes.Bold}>Chiropractic</span> - CHILD (age 13-18) - 15/30 min - $75</li>

                                <li><span className={classes.Bold}>Acupuncture or Cupping  or Bodywork</span> - 30 min - $70</li>

                                <li><span className={classes.Bold}>Acupuncture with Cupping Session</span>  - 45 min - $70</li>
                                <li><span className={classes.Bold}>Traditional Chinese Medicine (Acupuncture and Herbal Mixtures)</span>- 60 min - $75</li>

                                <li><span className={classes.Bold}>Biofeedback</span> - 90 min - $125</li>

                                <li><span className={classes.Bold}>Far Infrared Sauna</span> - 30 min - $20</li>

                                <li><span className={classes.Bold}>Massage</span> -  30 min - $40</li>

                                <li><span className={classes.Bold}>Massage</span> - 60 min - $70</li>

                                <li><span className={classes.Bold}>Massage</span> - 75 min - $90</li>

                                <li><span className={classes.Bold}>Massage</span> - 90 min - $115</li>

                                <li><span className={classes.Bold}>Reflexology</span> - 30 min - $45</li>

                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className={classes.Title} >KIDS</h2>
                        <p className={classes.Info}>Kids often benefit from regular chiropractic and wellness care. At San Juan Chiropractic we offer specialized care for kids of all ages. Parents seek care for their children for many things including wellness, sports injuries, ear infections, sleeping issues, bed-wetting, processing disorders, latch issues and trouble walking/crawling. </p>
                        <div className={classes.Section}>
                            <h3>1st Tuesday of the Month</h3>
                            <h4>Ages 0-12: $20</h4>
                            <h4>Ages 13-18: $25</h4>

                            <img className={classes.Pain} src={KidPic} alt="kids playing tug of war" />
                        </div>

                    </div>
                


                </div>

            </div>

            <Footer></Footer>
        </div>
    )
}

export default Rates;