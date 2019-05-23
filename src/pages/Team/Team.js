import React from "react";
import TeamMember from "./TeamMember/TeamMember"
import classes from "./team.module.css";
import Footer from "../../components/Footer/Footer";
const Team = () => {
    return (
        <div>
            <div className={classes.Team}>
            <div className={classes.Banner}> 
                <h1>Our Practitioners</h1>
            </div>
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />

            </div>
            <Footer />
        </div>
    )
}

export default Team;