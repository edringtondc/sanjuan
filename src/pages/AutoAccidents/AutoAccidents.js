import React from "react";


import PainPic from "../../assets/images/pain.webp"
import classes from './autoAccidents.module.css';
import Footer from "../../components/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar.js"




const Treatments = () => {

    return (
        <div>
            <Toolbar />
            <div className={classes.Wrapper} id="AutoWrapper">
                <div className={classes.Space}></div>
                <div className={classes.Banner}>
                    <h1>Auto Injuries</h1>
                </div>
                <div className={classes.Body}>
                    <div >
                        <h3 className={classes.Title}>Auto Accident Injuries </h3>
                        <p className={classes.Info}> Car Accidents happen often, and many auto accident injuries do not show symptoms until weeks or even months after the crash occurs. Although these symptoms may appear invisible, there can be internal damage to the musculoskeletal system and soft tissues. At San Juan Chiropractic in Montrose, Colorado, our entire wellness team has helped many patients safely recover from whiplash and other car accident injuries.</p>
                    </div>
                    <div>
                        <h3 className={classes.Title} >San Juan Chiropractic Care for Car Accident Injuries</h3>
                        <p className={classes.Info}>Our specialized care is often an ideal treatment of choice for victims of car crashes. Our unique team and multiple modalities of care involves the treatment of soft tissue injuries and joint damage, especially those in the spine. Most injuries that result from car accidents are sprains and strains of the spinal muscles and ligaments, so our care is naturally a viable form of treatment after an accident. San Juan Chiropractic routinely evaluates and treats auto accident victims and makes any appropriate referrals to other health care providers if necessary. Call San Juan Chiropractic today or schedule an appointment using our online form to get help in finding relief for your recent auto accident injury.</p>
                    </div>
                    <div>
                        <h3 className={classes.Title} >What are common auto accident injuries?</h3>
                        <p className={classes.Info}>Could you be suffering pain from a whiplash or spinal injury? Often, crash victims are jolted and do not feel like themselves. Chiropractic and manual therapy for auto injury is the most effective way to manage these symptoms and support the body’s natural healing process. Below are some common symptoms of auto accident injuries:</p>
                        <div className={classes.Section}>
                            <ul>

                                <li>Neck & Back Pain</li>
                                <li>Whiplash</li>
                                <li>Headaches & Migraines</li>
                                <li>Shoulder Pain</li>
                                <li>Fatigue</li>
                                <li>Weakness in Upper or Lower Limb</li>
                                <li>Jaw Pain</li>
                                <li>Face Pain</li>
                                <li>Sleep Disturbances</li>
                                <li>Blurred Vision</li>
                                <li>Irritability</li>
                                <li>Dizziness</li>
                                <li>Forgetfulness</li>
                            </ul>
                            <img className={classes.Pain} src={PainPic} alt="women in pain" />
                        </div>

                    </div>


                </div>

            </div>

            <Footer></Footer>
        </div>
    )
}

export default Treatments;