import React, {useEffect} from "react"

import Link from "next/link"
import {useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

import { ContainerCards, CardStyle, BottombarCard } from "./our.services.style"
import {cardServicesAnimation} from "../../utils/functions"

const Cards = () => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            animation.start("visible");
        }
    }, [animation, inView]);

    const data = [
        {
            id: "1",
            nameService: "Création identité graphique",
            array: ["Charte graphique", "Création logo", "Magazine"],
            image: "/images/affiche-min.jpg",
            link: "/services/creation-identite-graphique"
        },
        {
            id: "2",
            nameService: "impression par papiers",
            array: ["A4 large", "X45 leger", "Grand format AG10"],
            image: "/images/print-min.jpg",
            link: "/services/impression"
        },
        {
            id: "4",
            nameService: "web design UX & UI design",
            array: ["Etude de persona", "Création maquette et prototypage", "Design Thinking"],
            image: "/images/uxdesign-min.jpg",
            link: "/services/web-design-ux-ui-design"
        },
        {
            id: "3",
            nameService: "création de site web sur mesure",
            array: ["Site vitrine", "Site e-commerce", "Progressive-Web-App"],
            image: "/images/website-min.jpg",
            link: "/services/site-web"
        },
        {
            id: "5",
            nameService: "Web marketing strategie digital",
            array: ["Google Adsence", "Referencemen SEO", "Campagne E-mailing"],
            image: "/images/website-min.jpg",
            link: "/services/web-marketing"
        },
    ]
    return (
        <ContainerCards
            key={"container-cards"}
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={cardServicesAnimation} 
        >
            {data.map((item) => (
                <CardStyle
                    key={item.id} 
                    background={item.image}
                >
                    <div className={"overlay"}>
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
                    </div>
                </CardStyle>
            ))}
        </ContainerCards>
    )
}

export default Cards;