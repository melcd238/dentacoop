import React from 'react'
import classes from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom'



function NavigationItem (props){
    return(
        <li className={classes.li}>
           <NavLink exact to={props.to} className={classes.navLink} activeStyle={{color:"#0097c1"}}> {props.children} </NavLink>
        </li>
    )
}

export default NavigationItem