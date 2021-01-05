import Img from "next/image"
import ButtonDevis from "../button.devis"

import {PrintStyle, ImageText, Left, Grid, Topbar} from "./print.ui.style"

const PrintUI = () => {
    const items = [
        {
            id: "1",
            titre: "carte de visite",
            image: "/images/visitcard.png",
            alt: "image carte de visite"
        },
        {
            id: "2",
            titre: "brochure",
            image: "/images/brochure.png",
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
            image: "/images/visitcard.png",
            alt: "image flyer"
        },
        {
            id: "5",
            titre: "grand format affiche",
            image: "/images/visitcard.png",
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
            titre: "impression livres",
            image: "/images/cover.jpg",
            alt: "image livre"
        },
        {
            id: "8",
            titre: "impression magazine",
            image: "/images/mbotesrz-min.jpg",
            alt: "image magazine"
        },
    ]
    const prints = [
        {id: "1", image: "/images/print1-min.jpg", alt: "imprimente"},
        {id: "1", image: "/images/print2-min.jpg", alt: "imprimente"},
        {id: "1", image: "/images/print3-min.jpg", alt: "imprimente"}
    ]
    return (
        <PrintStyle>
            <Left>
                <h2>
                    Picto Print
                </h2>
                <p>
                    Une communication efficace exige que votre marque assure une présence à la fois virtuelle 
                    et physique en alliant supports papier et digital. Il est important d’investir les méthodes
                    traditionnelles de communication qui permettent de toucher de nombreux publics, 
                    c’est pourquoi notre agence de print vous accompagne dans la création et l’impression 
                    de vos supports physiques.
                </p>
                <ImageText>
                    {prints.map((print) => (
                        <Img
                            key={print.id}
                            src={print.image}
                            layout={"responsive"}
                            width={110}
                            height={100}
                            quality={100}
                            alt={print.alt}
                        />
                    ))}
                </ImageText>
                <h3>NOS PRESTATIONS PRINT</h3>
                <Topbar/><br/>
                <Grid>
                    {items.map((item) => (
                        <div className={"element"} key={item.id}>
                            <h5>{item.titre}</h5>
                            <Img
                                src={item.image} 
                                width={200}
                                height={"auto"}
                                quality={100}
                                alt={item.alt}
                            />
                        </div>
                    ))}
                </Grid>
            </Left>
            <ButtonDevis/>
        </PrintStyle>
    )
}

export default PrintUI;