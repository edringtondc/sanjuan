import React from 'react';
import classes from './banner.module.css';
import Logo from "../Logo/Logo"


const Banner = (props) => {
    return (
        <div className={classes.Banner} >
              <div className={classes.logo} >
                <Logo />
                <h1>{props.title}</h1>
            </div>
           
        </div>
    )
}

export default Banner;
