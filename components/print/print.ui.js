import Img from "next/image"

import {PrintStyle, ImageText, Left, Grid, Topbar} from "./print.ui.style"
import Panneau from "../panneau"

const PrintUI = () => {
    const items = [
        {
            id: "1",
            titre: "carte de visite",
            image: "/images/visitcard.png"
        },
        {
            id: "2",
            titre: "brochure",
            image: "/images/brochure.png"
        },
        {
            id: "3",
            titre: "dépliant",
            image: "/images/flyer3.png"
        },
        {
            id: "4",
            titre: "impression menu",
            image: "/images/visitcard.png"
        },
        {
            id: "5",
            titre: "grand format affiche",
            image: "/images/visitcard.png"
        },
        {
            id: "6",
            titre: "calendrier agendas",
            image: "/images/cal1.jpeg"
        },
        {
            id: "7",
            titre: "impression livres",
            image: "/images/cover.jpg"
        },
        {
            id: "8",
            titre: "impression magazine",
            image: "/images/mbotesrz.jpg"
        },
    ]
    const prints = [
        {id: "1", image: "/images/print1.jpg"},
        {id: "1", image: "/images/print2.jpg"},
        {id: "1", image: "/images/print3.jpg"}
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
                            />
                        </div>
                    ))}
                </Grid>
            </Left>
        </PrintStyle>
    )
}

export default PrintUI;