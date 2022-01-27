import React from 'react'
import classes from './Navigation.module.css'

import NavigationItem from './NavigationItem'



function Navigation (){
    return(
        <ul className={classes.ul}>
          <NavigationItem to="/"> Accueil </NavigationItem>
          <NavigationItem to="/adhesion"> Adhésion </NavigationItem>
          <NavigationItem to="/informations"> Informations </NavigationItem>
          <NavigationItem to="/equipe"> Equipe </NavigationItem>
          <NavigationItem to="/contact"> Contact </NavigationItem>
        </ul>
    )
}

export default Navigation