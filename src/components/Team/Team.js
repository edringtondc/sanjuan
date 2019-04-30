import React from "react";
import TeamMember from "./TeamMember/TeamMember"
import classes from "./Team.module.css"
import Aux from "../../hoc/Aux/Aux"

const team = () => {
    const teamData = [
        {
            provider: "Dr. Tori",
            title: "Chiropractor",
            about: "laksdjflaksjdf alsdjflaksdjf laksd faskdjflaksjd flaksjdf alksjdf lkasjdflkasdjf lasjdf"
        },
        {
            provider: "Dr. Darrin",
            title: "Chiropractor",
            about: "laksdjflaksjdf alsdjflaksdjf laksd faskdjflaksjd flaksjdf alksjdf lkasjdflkasdjf lasjdf"
        },
        {
            provider: "Dr. Mandy",
            title: "Chiropractor",
            about: "laksdjflaksjdf alsdjflaksdjf laksd faskdjflaksjd flaksjdf alksjdf lkasjdflkasdjf lasjdf"
        },
    ]

    return (

        <container className={classes.team}>
       
                {teamData.map(member => {
                    return <TeamMember provider={member.provider} title={member.title} about={member.about} key={member.provider} />

                })}
          
        </container>
    )
}

export default team;