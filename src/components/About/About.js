import React from "react";
import classes from "./about.module.css"
import team from "../../assets/images/team.jpg"

const About = () => {
    return (
        <div className={classes.about}>
            <h3>Welcome to the Wellness Center at San Juan Chiropractic</h3>
            <div >Macaroon tart jelly marshmallow. Marzipan dessert bonbon. Sugar plum jelly cake lollipop. Jujubes biscuit fruitcake jujubes marzipan. Marzipan macaroon toffee soufflé sesame snaps. Tootsie roll chocolate bar wafer fruitcake macaroon soufflé danish. Cupcake tiramisu cookie. Candy canes danish candy candy canes. Candy sweet sesame snaps marshmallow sweet pastry sweet roll lollipop. Ice cream marzipan chocolate bar. Jelly-o candy danish bonbon cotton candy biscuit. Dragée dragée liquorice tiramisu apple pie ice cream gingerbread halvah.</div>
            <img src={team} alt="Our team"/>
        </div>
    )
}

export default About;