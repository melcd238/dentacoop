import React from 'react'
import classes from './Footer.module.css'


function Footer (){
    return(
        <footer className={classes.footer}>
             <p style={{margin:"0px",color:"white",fontWeight:"bolder"}}> Nous suivre sur les réseaux sociaux</p>
            <div className={classes.containerFooter}>
               <div className={classes.social} style={{background:"#3b5998" }}>
                   <a href="https://www.facebook.com/Dentacoop-105695301271080" target="_blank" rel="noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
               </div> 
               <div className={classes.social} style={{background:"#F46F30"}}>
                   <a href="https://www.instagram.com/dentacoop/?hl=fr" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
               </div>
               <div className={classes.social} style={{background:"#00aced"}}>
                   <a href="https://twitter.com/dentacoop?lang=fr" target="_blank" rel="noreferrer"><i className="fab fa-twitter-square fa-2x"></i></a>
               </div>
               <div className={classes.social} style={{background:"#bb0000"}}>
                   <a href="https://www.youtube.com/channel/UCavkdcmvefw-Vx4SXKnu_CA" target="_blank" rel="noreferrer"><i className="fab fa-youtube fa-2x"></i></a>
               </div>
               <div className={classes.social} style={{background:"#007BB5"}}>
                   <a href="https://www.linkedin.com/company/dentacoop-officiel/?viewAsMember=true" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
               </div>
      
               
            
      
               </div>
               <p style={{margin:"4px",color:"white",fontWeight:"bolder"}}> © DentaCoop 2021</p>
           
        </footer>
    )
}

export default Footer