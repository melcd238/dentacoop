import React from 'react'
import classes from './Header.module.css'
import logoHeader from '../../Images/logoHeader.svg'

import Navigation from './Navigation'



function Header (){
    return(
      <header className={classes.header}>
           <div className={classes.logo_header}>
                <img src={logoHeader} alt="logo dentacoop" className={classes.logoImg} ></img>
                <span className={classes.titreLogo}>DentaCoop </span>
           </div>
           
           <nav className={classes.navigation}>
           <Navigation/>
           </nav>

      </header>

       


    )

}

export default Header