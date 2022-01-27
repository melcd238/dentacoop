import React from 'react'
import logodentacoop from '../../Images/logoHeader.svg'



function NotFound () { 
    return(
        <>
           <h1>Erreur 404 </h1>
           <div style={{margin:"auto"}}>
               <img src={logodentacoop} style={{width:"300px"}} alt="dentacoop" ></img>
               <p style={{fontSize:"1.4rem"}}>Cette page n'existe pas!</p>
           </div>
        </>

    )
 }

 export default NotFound