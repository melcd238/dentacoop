import React from 'react'
import classes from './Contact.module.css'
import logodentacoop from '../../Images/logoHeader.svg'



function Contact () { 
    return(
        <>
           <h1 className={classes.titreContact}>Nous contacter</h1>
           <div className={classes.contactContainer} >
           <p className={classes.contactInfo} >Vous souhaitez un renseignement, vous êtes chirurgien-dentiste, fabriquant... <br/>
           N'hésitez plus et contactez nous: <a href= "mailto:infos.dentacoop@gmail.com"> Info dentacoop</a>. </p>
           <p className={classes.contactInfo}> Vous avez besoin de contacter le service comptabilité pour une facture ou autre...<br/>
           Contactez nous ici: <a href= "mailto:dentacoop.compta@gmail.com"> Service comptabilité dentacoop</a>.  </p>
           <div>
           <img src={logodentacoop} style={{width:"300px"}} alt="dentacoop" ></img>
           </div>
           </div>
          
        </>

    )
 }

 export default Contact