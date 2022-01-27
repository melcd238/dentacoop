import React from 'react'
import classes from './Membre.module.css'


function Membre (props){
    return(
        <div className={classes.membre}>

                <h3 className={classes.nomMembre}>{props.nom}</h3>

            <div className={classes.membreContent}>
                <p className={classes.roleMembre}> {props.role}</p>
                <div> 
                    {props.children}</div>
              <blockquote className={classes.citation}>
                 {props.citation}
              </blockquote>
              </div>

              <div>
               <button className={classes.btnMembre} onClick={props.click}  >Qui suis-je?</button>     
              </div>
              {props.done ?  
             
             <div className={classes.bio}>
            <p className={classes.bio}> <strong> Age : </strong> <span className={classes.colorBio}>{props.age} </span>  </p> 
            <p className={classes.bio}> <strong> Etudes:</strong> <span className={classes.colorBio}>{props.etude} </span>  </p> 
            <p className={classes.bio}> <strong>Situation familliale: </strong>  <span className={classes.colorBio}>{props.situationFamille} </span>  </p>
            <p className={classes.bio}> <strong>Passions: </strong> <span className={classes.colorBio}>{props.passion} </span>  </p>
            
           </div>
           :
           null
               } 
              
           
              </div>
                
       
    )
}

export default Membre