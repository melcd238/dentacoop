import React from 'react'
import classes from './Informations.module.css'
import dentistes from '../../Images/info/dentistes.svg'
import fournisseur from '../../Images/info/fournisseur.svg'
import transparence from '../../Images/info/transparence.svg'
import independance from '../../Images/info/independance.svg'
import solidarite from '../../Images/info/solidarite.svg'
import santePub from '../../Images/info/santePub.svg'
import Process from '../../Images/process.png'



function Informations () { 
    return(
        <div className={classes.informationsContainer}>
            <h2 className={classes.titreHinfo}> Les 6 piliers de Dentacoop</h2>
            
           <div className={classes.infoContent}>
              
               <div className={classes.imgContent}>
                   <img src={dentistes} alt="logo dentistes"></img>
                   <h2 className={classes.h2Info}>CRÉÉE ET GÉRÉE PAR ET POUR LES DENTISTES</h2>
                   <p className={classes.explication}>
                   Dentacoop est inspirée du modèle des coopérative créée par les dentistes et gérée par les
                    dentistes qui y adhèrent. 
                   </p>
                </div>
                <div className={classes.imgContent}>
                    <img src={fournisseur} alt="logo fournisseur"></img>
                    <h2 className={classes.h2Info}>FOURNISSEUR DE MATÉRIEL ET SERVICES</h2>
                    <p className={classes.explication}>Dentacoop a pour but de permettre l’achat de matériel et
                     consommable à un coût juste et propose également des services innovants.</p>

                </div>
                <div className={classes.imgContent}>
                    <img src={transparence} alt="logo transparence"></img>
                    <h2 className={classes.h2Info}>TRANSPARENCE</h2>
                    <p className={classes.explication}>Dentacoop s’engage à fournir à ses adhérents tous les documents nécessaires
                     à comprendre les tarifs proposés et un accès aux résultats de compte.</p>

                </div>
                <div className={classes.imgContent}>
                    <img src={independance} alt="logo indepandence"></img>
                    <h2 className={classes.h2Info} >INDÉPENDANCE</h2>
                    <p className={classes.explication}>Sans contrat d’exclusivité ni partenariats avec les laboratoires,
                     Dentacoop garde une indépendance dans le choix du matériel et des services proposés.</p>

                </div>
                <div className={classes.imgContent}>
                    <img src={solidarite} alt="logo solidarite"></img>
                    <h2 className={classes.h2Info}>SOLIDARITÉ</h2>
                    <p className={classes.explication}>Dentacoop c’est aussi l’union de toute une profession.</p>

                </div>
                <div className={classes.imgContent}>
                    <img src={santePub} alt="logo sante publique"></img>
                    <h2 className={classes.h2Info}>MISSION DE SANTÉ PUBLIQUE</h2>
                    <p className={classes.explication}>Dentacoop veut permettre à tous les patients de France d’être enfin sur un même pied
                     d’égalité en assurant un accès identique à la métropole et aux DOM-TOM.</p>

                </div>

           </div>
              <h2 className={classes.titreHinfo}> La naissance de Dentacoop: process</h2>
              <div className={classes.infoContent}>
                  <div  className={classes.imgProcess}>
                      <img src={Process} alt="process dentacoop" className={classes.imgProcessdiag} ></img>
                  </div>

              </div>
        </div>

    )
 }

 export default Informations