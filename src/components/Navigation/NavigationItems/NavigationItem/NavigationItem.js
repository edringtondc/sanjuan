import React from "react"
import classes from "./NavigationItem.module.css"
// import {Link} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


const navigationItem = (props) => (
        <li className={classes.NavigationItem}>
                <Link
                        to={props.link}
                        
                        className={props.active ? classes.active : null}>
                        {props.children}
                </Link>
        </li>
       
)

export default navigationItem;