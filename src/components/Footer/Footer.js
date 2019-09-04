import React from "react";
import classes from "./Footer.module.css"
import { HashLink as Link } from 'react-router-hash-link';
import Facebook from "../../assets/icons/FB.png";



const footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.row}>

                <div >
                    <ul className={classes.info}>


                        <li className={classes.homeLink}> <Link to="/Home#top" >Back to Home</Link></li>


                        <li>(970) 240-8400</li>
                        <li><a href="https://goo.gl/maps/EtAhcAFZfrcc2fgJ6" target="_blank" >164 Colorado Ave, Montrose, CO 81401</a></li>

                        <li className={classes.ScheduleLink}><a href="https://clients.mindbodyonline.com/ASP/adm/adm_appt_search.asp?studioid=591688&tg=&view=&sSU=&qParam=&lvl=&catid=&prodid=&date=6%2F17%2F2019&classid=0&trn=0&loc=1&stype=&vt=&justloggedin=&pMode=0&page=&prodGroupId=&optForwardingLink=&nLgIn=" target="_blank"
                        >
                            Make an appointment!</a></li>

                        <li> <a href="https://www.facebook.com/pages/San-Juan-Chiropractic/134235809960084" target="_blank"><img src={Facebook} className={classes.FB} alt="like us on facebook" /></a></li>

                    </ul>

                </div>

                <div>
                    <p className={classes.title}>Hours:</p>
                    <ul className={classes.hours} >
                        <li>
                            Monday: 9:00am - 6:00pm</li>
                        <li>
                            Tuesday: 2:00pm - 8:00pm</li>
                        <li>
                            Wednesday: 9:00am - 6:00pm</li>
                        <li>
                            Thursday: 2:00pm - 8:00pm</li>
                        <li>
                            Friday: 9:00am - 2:00pm</li>
                        <li>
                            Saturday (F/L): 9:00am - 11:00pm</li>
                    </ul>
                </div>
            </div>
            <div className={classes.Byline} >


                
                    <p > &copy; 2019 San Juan Chiropractic  </p>

                    <p> <a href="http://elisabethedrington.com/">Web Design by Boss Lady Design</a></p>

          

            </div>

        </footer>

    )
}
export default footer;