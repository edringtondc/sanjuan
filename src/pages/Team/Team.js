import React from "react";
import TeamMember from "./TeamMember/TeamMember"
import classes from "./team.module.css";
import Footer from "../../components/Footer/Footer";
const Team = () => {
    return (
        <div>
            <div className={classes.Team}>
                <h3>Team</h3>
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