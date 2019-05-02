import React from "react";
import TeamMember from "./TeamMember/TeamMember"
import classes from "./Team.module.css"
import Aux from "../../hoc/Aux/Aux"

const team = () => {
    const teamData = [
        {   
            headline: "Dr. Darrin",
            provider: "Darrin Robertson, D.C., C.C.S.P.",
            title: "San Juan Chiropractic, LLC, owner"
        },

        {
            headline: "Dr. Tori",
            provider: "Victoria Bourgeois Stegmann, D.C., CAc",
            title: "Back to Balance, LLC, owner"
        },
        {
            headline: "Dr. Mandy",
            title: "Chiropractor"
        },
        {
            headline: "Dr. Drew",
            title: "Chiropractor"
        },
        {
            headline: "Ted",
            title: "NCTMB"
        },
        {
            headline: "Michaela",
            title: "Massage Therapy"
        },
        {
            headline: "Porsche",
            title: "BioFeedback"
        },
    ]

    return (



        <div className={classes.teamblock} >

            <h2 className={classes.headline}>Meet the Team</h2>
            <div className={classes.team}>  
                {teamData.map(member => {
                return <TeamMember provider={member.provider} title={member.title} about={member.about} key={member.provider} />

            })}
            </div>




        </div>
    )
}

export default team;