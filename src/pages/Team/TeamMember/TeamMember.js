import React from "react";
import headshot from "../../../assets/images/professional.jpg";
import classes from "./teamMember.module.css";

const TeamMember = (props) => {

   
    return (
        <div className={classes.Wrapper} >


            <div className={classes.TeamMember}>

                {/* <img src={headshot} className={classes.headshot}></img> */}
                <div className={classes.Bio}>

                    <h3 className={classes.Practitioner}>{props.practitioner}</h3>
                    <p> {props.bio}
                </p>
                </div>
            </div>
        </div>
    )
}

export default TeamMember;