
import React from 'react'
import schema from '../Images/shema.svg'
import classes from './Home.module.css'



function Home () { 
    return(
        < div className={classes.Home}>
           <h1 className={classes.titreHome}>DentaCoop <br/> Par et pour les dentistes </h1>
           <p className={classes.paraTitreHome}>Inspirée du modèle des coopératives, Dentacoop entend révolutionner le monde dentaire en
                proposant
            enfin des fournitures à un coût juste et en toute transparence.<br/>
            Créée par les dentistes, pour les dentistes, Dentacoop, l’avenir, maintenant.
            </p>

            <div className={classes.actuadhesion}>
                <h2 className= {classes.titreActuHome}> Campagne d'adhésion ouverte jusqu'au 11/07/2021</h2>
                   <p>
                       La campagne d'adhésion de SP2D, la coopérative de Dentacoop, vient de démarrer!! <br/>
                       Pour adhérer, rendez-vous dans la rubrique Adhésion. Vous y trouverez toutes les informations utiles.
                   </p>

               </div>

           <div className={classes.homeContainer}>

              

               <div className={classes.shemacontainer}>
                   <img src={schema} alt="shema dentacoop" ></img>
               </div>

               <div className={classes.paragrapheHome}>
                   <p className={classes.paraHome}> 
                      <span> Une petite histoire de Dentacoop</span> <br/>
                      Dentacoop est un peu l'envie secrète de chaque dentiste. Certains ont déjà tenté des projets
                      qui ont finalement changé de philosophie ou ont avorté...<br/>
                      En 2020, durant le confinement, l'idée germe à nouveau et fait des émules. C'est ainsi qu'une
                      trentaine de dentistes décide de consacrer bénévolement de son temps, de son énergie et de 
                      ses compétences pour permettre à ce projet de voir le jour.<br/>
                      Dentacoop c'est l'avenir des dentistes, inspiré par le passé tourné vers le futur. 
                      La philosophie tiré des modèles de coopérative a su rapidement convaincre plus d'un millier 
                      de dentistes et de nombreux fabricants de soutenir cette magnifique aventure.
                       

                   </p>
               </div>
           </div>
        </div>

    )
 }

 export default Home