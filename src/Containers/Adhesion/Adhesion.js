import React from 'react';
import classes from './Adhesion.module.css'




const Adhesion =()=> {
  
    
    return(
        <>
        < div className={classes.containerAdhesion}>
        <div className={classes.sectionAdhesion}>
        <h3 className={classes.titreAdhesion}> Où trouver le bulletin d'adhésion? </h3>
        <p>
            Envoyez un mail à  <a href= "mailto:contact@sp2d.fr"> sp2d </a>, pour recevoir le bulletin d'adhésion ainsi que tous les renseignements nécessaires à votre adhésion.
        </p>
        </div>

        <div className={classes.sectionAdhesion}>
        <h3 className={classes.titreAdhesion}> Comment adhérer? </h3>
        <p>
        Chaque dentiste adhère en nom propre quelque soit son mode d'exercice. En cas d'exercice en société, celle-ci pourra commander à la condition que chaque membre de la société soit membre de la coopérative.
        L'adhésion se fait par l'acquisition d'un minimum de 25 parts à 20€ (la part) par adhérent qui devient actionnaire de la coopérative dans la limite de 500 parts par adhérent.
        L'adhésion, quelle que soit le nombre de parts, permet l'ouverture d'un droit de vote unique par adhérent.

        </p>
        </div>
        
        <div className={classes.sectionAdhesion}>
        <h3 className={classes.titreAdhesion}> Quelles sont les justificatifs à fournir?</h3>
        <ul className={classes.listeAdhesion}>
            <li>Une photocopie la carte professionnelle à jour et de la carte d'identité;</li>
            <li>Pour les adhésions en société, joindre un extrait Kbis de moins de 3 mois;</li>
            <li>Un exemplaire des statuts de SP2D signés.</li>
        </ul>
        </div>
        <div className={classes.sectionAdhesion}>
        <h3 className={classes.titreAdhesion}> Où renvoyer sa demande d'adhésion?</h3>
        <ul>
            <li>
             Par mail : contact@sp2d.fr  
            </li>
            <li>
             Par voie postale :SP2D, 4 rue d Irlande 35510 Cesson Sévigné
            </li>
        </ul>
        </div>
        </div>

        </>
        
    )
}


export default Adhesion