import React from 'react'
import classes from './Shop.module.css'



function Shop () { 
    return(
        <div className={classes.shopContainer}>
            <p className={classes.paraShop}> 
             Encore un peu de patience, notre site de vente en ligne sera bientôt disponible. <br/>
            En attendant, vous pouvez continuer de nous suivre sur les réseaux sociaux</p>
        </div>

    )
 }

 export default Shop