import Img from "next/image"
import ButtonDevis from "../button.devis"

import {PrintStyle, ImageText, Left, Grid, Topbar, TopPrint} from "./print.ui.style"

const PrintUI = () => {
    const items = [
        {
            id: "1",
            titre: "carte de visite",
            image: "/images/cartes-visites.jpg",
            alt: "image carte de visite"
        },
        {
            id: "2",
            titre: "brochure",
            image: "/images/flyer2.jpg",
            alt: "image brochure"
        },
        {
            id: "3",
            titre: "dépliant",
            image: "/images/flyer3.png",
            alt: "image "
        },
        {
            id: "4",
            titre: "impression menu",
            image: "/images/flyer1.jpg",
            alt: "image flyer"
        },
        {
            id: "5",
            titre: "grand format affiche",
            image: "/images/carte-de-voeux1.jpg",
            alt: "image carte de visit"
        },
        {
            id: "6",
            titre: "calendrier agendas",
            image: "/images/cal1-min.jpeg",
            alt: "image calendrier"
        },
        {
            id: "7",
            titre: "impression magazine",
            image: "/images/vita-cover.jpg",
            alt: "image livre"
        },
    ]
    const prints = [
        {id: "1", image: "/images/print1-min.jpg", alt: "imprimente"},
        {id: "1", image: "/images/print2-min.jpg", alt: "imprimente"},
        {id: "1", image: "/images/print3-min.jpg", alt: "imprimente"}
    ]
    return (
        <PrintStyle>
            <div className={"main-print"}>
                <img src={"/images/carte-de-voeux1.jpg"} alt={"image de picto print"}/>
                <div className={"texts"}>
                    <h2>
                        Picto Print
                    </h2>
                    <TopPrint/>
                    <p>
                        Une communication efficace exige que votre marque assure une présence à la fois virtuelle 
                        et physique en alliant supports papier et digital. Il est important d’investir les méthodes
                        traditionnelles de communication qui permettent de toucher de nombreux publics, 
                        c’est pourquoi notre agence de print vous accompagne dans la création et l’impression 
                        de vos supports physiques.
                    </p>
                    <div className={"imprimentes"}>
                        {prints.map((print, i) => (
                            <img
                                key={i}
                                src={print.image}
                                alt={print.alt}
                            />
                        ))}
                    </div>
                </div>
            </div><br/>
            <div className={"prestations"}>
                <h3>NOS PRESTATIONS PRINT</h3>
                <Topbar/><br/>
                <div className={"grid-prest"}>
                    {items.map((item, i) => (
                        <div className={"element"} key={i}>
                            <h4>{item.titre}</h4>
                            <img
                                src={item.image} 
                                alt={item.alt}
                            />
                        </div>
                    ))}
                </div>
            </div><br/>
            <ButtonDevis/>
        </PrintStyle>
    )
}

export default PrintUI;