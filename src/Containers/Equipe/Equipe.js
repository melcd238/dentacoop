import React, { useState } from 'react'
import classes from './Equipe.module.css'


import Membre from '../../Components/Membres/Membre'




function Equipe () {
        
        const [membres,setMembres] = useState([
                {nom:"Nathalie Croiseaux ",
    role:"Responsable du service achats.",
    age:"52 ans",
    etude:"Diplômé à Reims, puis partie s’installer en Bretagne. A du arrêter d’exercer pour motif médical et s’est reconvertie dans la vente de matériel/consommable dentaire",
    situationFamille:"Conjoint retraité de la gendarmerie – 4 enfants âgés de 13 à 25 ans (l’ainée vient de finir sa 6ème année dentaire)",
    passion:"Très sportive.",
    citation: "Je veux être présente pour mes confrères comme ceux-ci ont pu l’être pour moi.",
    image:require('../../Images/photos/nathalie.jpg').default,
    item:"nathalie dentacoop",
    done: false},

     {nom:"Eva Bigotti",
     role:"Responsable du service logistique-qualité.",
     age:"33 ans",
     etude:"Initialement sage-femme libérale, a entamé une reconversion après 8 ans d’exercice, dans le secteur de la qualité gestion des risques (obtention d’un master). A ensuite à la direction industrielle de Thales DMS à cheval sur la supply chain, le service achats et les méthodes",
     situationFamille:"Conjoint dentiste qui lui a donné goût au projet, 1 enfant de 2 ans",
     passion:"Passionnée de yoga, pilâtes et de gastronomie",
     citation:"Je souhaite aider le projet Dentacoop convaincue par les valeurs d’entraides et m’y consacre aujourd’hui à temps plein. ",
     image:require('../../Images/photos/eva.jpg').default,
     item:"eva dentacoop",
     done: false
    },
    {nom:"Olivier Gros",
    age:"34 ans",
    etude:"Diplômé de la faculté de Lyon, exerce aujourd’hui en Haute-Savoie",
    situationFamille:"Conjointe infirmière – 2 enfants: 3 ans et 1 mois",
    passion:"Passionné par la montagne et tout ce qui y a attrait (ski, randos, parapente), a pour loisir le théâtre d'impro, le Handball, et le travail du bois",
    role:"Responsable du service gestion comptable.",
    citation:" Dentacoop c’est l’évolution vers une meilleure maitrise de nos cabinets, un retour d'une main mise sur nos fournitures et la porte  solidarité retrouvée. ",
    image:require('../../Images/photos/olivier.jpg').default,
    item:"olivier dentacoop",
    done: false
    },
    {nom:"Antoine Gorjus",
    age:"37 ans",
    etude:"Diplômé de Paris V et exerce à Paris",
    situationFamille:"Conjointe Infirmière et 2 enfants de 2 et 4 ans",
    passion:"A pour loisir la pratique du fitness et le golf",
    role:"Responsable du service administratif-juridique.",
    citation:"Ma participation à Dentacoop a été une évidence car je  désire plus de transparence dans les tarifs des produits.",
    image:require('../../Images/photos/antoineG.jpg').default,
    item:"antoineG dentacoop",
    done: false
    },
    {nom:"Maelle Le Bolay",
    age:"30 ans",
    etude:"Diplômée à Toulouse et exerçant dans le piémont pyrénéen au sud de Toulouse",
    situationFamille:"Conjoint dentiste et 2 enfants de 2 et 4 ans",
    passion:"Côté passions/loisirs, elle aime le rugby (et plus précisément le stade toulousain), elle s’investi dans l’association des parents d’élèves et pratique le pilâtes",
    role:"Responsable du service communication.",
    citation:"Mon investissement dans Dentacoop est motivé par le fait que ce projet est essentiel à notre profession et qu’il faut bien des dentistes pour le mener à bien.",
    image:require('../../Images/photos/maelle.jpg').default,
    item:"maelle dentacoop",
    done: false
    },
    {nom:"Clarisse Huchon",
    age:"37 ans",
    etude:"A fait ses études à Paris Descartes, où elle a été AHU en odontologie pédiatrique. Exerce en Martinique où elle est pédodontiste",
    situationFamille:"Conjoint skipper - 1 enfant de 7 ans (mais bientôt 3 !)",
    passion:"Passionnée de voyages et d’Asie, joueuse de harpe",
    role:"Responsable du service DROM-COM.",
    citation:"J'ai rejoint Dentacoop pour ses valeurs de confraternité et d’entraide.",
    image:require('../../Images/photos/clarisse.jpg').default,
    item:"clarisse dentacoop",
    done: false
    },
    {nom:"Dov Derman",
    age:"34 ans",
    etude:"A fait ses études à Paris Diderot puis l’internat en odontologie à Lille. A ensuite travaillé en libéral et à l’hôpital en tant qu’attaché. Actuellement titulaire de son cabinet et AHU en prothèse",
    situationFamille:"Conjointe opticienne – 4 enfants âgés de 5 mois à 10 ans",
    passion:"Passionné de dentisterie mais moins d’administratif",
    role:"Co-responsable du service Tech-Design.",
    citation:"J'ai rejoint Dentacoop pour participer à l’aventure qui rendra les dentistes maîtres de leurs achats.",
    image:require('../../Images/photos/dov.jpg').default,
    item:"dov dentacoop",
    done: false
    },
    {nom:"Isabelle Fouilloux",
    age:"48 ans",
    etude:"A fait ses études à Paris Descartes, où elle a été AHU en Prothèses, et actuellement MCU-PH à temps partiel en prothèses à l'Université de Paris et dentiste en libéral",
    situationFamille:"Conjoint ingénieur Telecom - 4 enfants de 9 à 15 ans",
    passion:"Sportive, bricoleuse, passionnée de musique, tromboniste, fait partie d'un big band intergénérationnel",
    role:"Co-responsable du service Tech-design.",
    citation:"J'ai rejoint Dentacoop pour ses valeurs de confraternité et d’entraide.",
    image:require('../../Images/photos/Isabelle.jpg').default,
    item:"isabelle dentacoop",
    done: false

    }


        ])
        // Methode 
        const bioHandler= (index)=>{
                const newMembres = [...membres];
                newMembres[index].done = !membres[index].done;
                setMembres(newMembres);
                
                
                
            }

      
         // Variable
         const displayMembre = membres.map((membre,index)=>{
                 return(
                        <Membre nom={membre.nom}
                        key={index}
                        role={membre.role}
                        citation={membre.citation}
                        done={membre.done}
                        age={membre.age}
                        situationFamille={membre.situationFamille}
                        etude={membre.etude}
                        passion={membre.passion}
                        click={()=>bioHandler(index)}
                        
                        >
                        <img src={membre.image} style={{width:"80px"}} alt={membre.item}></img> 
                               
                </Membre>  
                 )
                

         })
         
       

    return(
         
       <section>
              
              
           <h1 className={classes.equipeTitre}>Notre équipe</h1>
           <p className={classes.paraEquipe}>
           Notre équipe est composée de plus de 30 dentistes qui ont rejoint le mouvement afin de révolutionner la profession et son rapport avec les entreprises qui y sont liées.
           Elle s’organise en différents services dont voici les représentants.
           </p>

           <div className={classes.equipe}>
           {displayMembre}

           </div>
          
        </section>
       

    )
 }

 export default Equipe