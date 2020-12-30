import Link from "next/link"

import { ContainerCards, CardStyle, BottombarCard } from "./our.services.style"

const Cards = () => {
    const data = [
        {
            id: "1",
            nameService: "Création identité graphique",
            array: ["Charte graphique", "Création logo", "Magazine"],
            image: "/images/affiche.jpg",
            link: "/services/creation-identite-graphique"
        },
        {
            id: "2",
            nameService: "impression par papiers",
            array: ["A4 large", "X45 leger", "Grand format AG10"],
            image: "/images/print.jpg",
            link: "/services/impression"
        },
        {
            id: "4",
            nameService: "web design UX & UI design",
            array: ["Etude de persona", "Création maquette et prototypage", "Design Thinking"],
            image: "/images/uxdesign.jpg",
            link: "services/web-design-ux-ui-design"
        },
        {
            id: "3",
            nameService: "création de site web sur mesure",
            array: ["Site vitrine", "Site e-commerce", "Progressive-Web-App"],
            image: "/images/website.jpg",
            link: "services/site-web"
        },
        {
            id: "5",
            nameService: "Web marketing strategie digital",
            array: ["Google Adsence", "Referencemen SEO", "Campagne E-mailing"],
            image: "/images/website.jpg",
            link: "services/web-marketing"
        },
    ]
    return (
        <ContainerCards>
            {data.map((item, i) => (
                <CardStyle key={i} background={item.image}>
                    <div className={"overlay"}/>
                    <div className={"all-content"}>
                        <h3>{item.nameService}</h3>
                        <BottombarCard/>
                        {item.array.map((el, i) => (
                            <p key={i}>{"👌 "}{el}</p>
                        ))}
                        <div className={"container-button"}>
                            <Link href={item.link}>
                                <a type="button" className={"button"}>
                                    En savoir +
                                </a>
                            </Link>
                        </div>
                    </div>
                </CardStyle>
            ))}
        </ContainerCards>
    )
}

export default Cards;