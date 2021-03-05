import React, {useState} from "react"

import { AllStyle, Containt } from "./nos.realisations.style"
import Print from "./print"
import ToutComponent from "./tout"

const AllRealisations = () => {
    const [toggleTabs, setTabs] = useState(1)

    const toggleTab = (index) => {
        setTabs(index)
    }

    const donnees = [
        {
            id: "1",
            image: "/images/carte-visit.jpg",
            alt: "carte de visite"
        },
        {
            id: "2",
            image: "/images/carte-de-voeux1.jpg",
            alt: "calendricarte de voeux"
        },
        {
            id: "3",
            image: "/images/bache1.jpg",
            alt: "calendrier"
        },
        {
            id: "4",
            image: "/images/casquette2.jpg",
            alt: "casquette ouvrier"
        },
        {
            id: "5",
            image: "/images/cartes-visites.jpg",
            alt: "carte de visite"
        },
        {
            id: "6",
            image: "/images/stylo2.jpg",
            alt: "calendrier"
        },
        {
            id: "7",
            image: "/images/flyer1.jpg",
            alt: "flyer"
        },
        {
            id: "8",
            image: "/images/flash-disque1.jpg",
            alt: "flash disque"
        },
        {
            id: "9",
            image: "/images/flash-disque2.jpg",
            alt: "flyer"
        },
        {
            id: "10",
            image: "/images/goblet.jpg",
            alt: "recipiants"
        },
        {
            id: "11",
            image: "/images/chapeau.jpg",
            alt: "chapeau"
        },
        {
            id: "12",
            image: "/images/goblet2.jpg",
            alt: "recipiants"
        }
    ]
    return ( 
        <AllStyle>
            <div className={"bloc-onglets"}>
                <div 
                    className={toggleTabs === 1 ? "tabs active-tabs" : "tabs"} 
                    onClick={() => toggleTab(1)}
                >
                    Tout
                </div>
                <div 
                    className={toggleTabs === 2 ? "tabs active-tabs" : "tabs"} 
                    onClick={() => toggleTab(2)}
                >
                    Graphisme
                </div>
                <div 
                    className={toggleTabs === 3 ? "tabs active-tabs" : "tabs"} 
                    onClick={() => toggleTab(3)}
                >
                    Mbote souriez
                </div>
                <div 
                    className={toggleTabs === 4 ? "tabs active-tabs" : "tabs"} 
                    onClick={() => toggleTab(4)}
                >
                    Site internet
                </div>
            </div>
            <div className={"contenu-onglets"}>
                <div className={toggleTabs === 1 ? "contenu active-contenu" : "contenu"}>
                    <ToutComponent/>
                </div>
                <div className={toggleTabs === 2 ? "contenu active-contenu" : "contenu"}>
                    <Print/>
                </div>
                <div className={toggleTabs === 3 ? "contenu active-contenu" : "contenu"}>
                    Pas de contenu pour l'instant
                </div>
                <div className={toggleTabs === 4 ? "contenu active-contenu" : "contenu"}>
                    Pas de contenu pour l'instant
                </div>
            </div>
        </AllStyle>
    )
}

export default AllRealisations;