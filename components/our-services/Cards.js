import React, {useEffect} from "react"

import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {BsPencilSquare, BsCollection} from "react-icons/bs"
import {FaUsers, FaCode, FaBullhorn} from "react-icons/fa"

import {ContainerCards, CardStyle, Bottombar} from "./our.services.style"
import Carre from "./Carre"

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
            description: "Nous accompagnons les entreprises dans la définition de leur identité de marque.",
            array: ["Charte graphique", "Création logo", "Affiche"],
            image: "/images/anna.jpg",
            link: "/services/creation-identite-graphique",
            x: -250,
            icon: <BsPencilSquare/>
        },
        {
            id: "2",
            nameService: "impression sur papiers",
            description: "Notre agence de print vous accompagne dans la création et l’impression de vos supports physiques.",
            array: ["A4 large", "X45 leger", "Grand format AG10"],
            image: "/images/print-min.jpg",
            link: "/services/impression-sur-papier",
            x: 250,
            icon: <BsCollection/>
        },
        {
            id: "4",
            nameService: "web design UX & UI design",
            description: "Nous vous accompagons dans la définition de vos besoins, nous identifions ensemble les contraintes et le périmètre de conception.",
            array: ["Etude de persona", "Design Thinking", "Maquette"],
            image: "/images/uxdesign-min.jpg",
            link: "/services/web-design-ux-ui-design",
            icon: <FaUsers/>,
            size: "1.15rem",
            background: "#fcfcfc",
            shadow: `6px 6px 14px #f9f9f9,
            -6px -6px 14px #ffffff`,
            sizeIcon: "2rem",
            sizeP: "0.9rem",
            widthBtn: "130px"
        },
        {
            id: "3",
            nameService: "création de site internet",
            description: "Nous intervenons sur toute la chaîne du développement web, de la création de sites web à la création d’application mobile sur mesure.",
            array: ["Site vitrine", "Site e-commerce", "Progressive-Web-App"],
            image: "/images/christo.jpg",
            link: "/services/site-web",
            icon: <FaCode/>,
            size: "1.25rem",
            background: "#fcfcfc",
            shadow: `6px 6px 12px #e5e5e5,
            -6px -6px 12px #ffffff`,
            sizeIcon: "2.5rem",
            sizeP: "1rem",
            widthBtn: "160px"
        },
        {
            id: "5",
            nameService: "Web marketing digital",
            description: "Nous créons, développons, animons et engageons vos communautés à travers un contenu social riche et hyper adapté aux usages de vos cibles.",
            array: ["Google Adsence", "Referencemen SEO", "Campagne E-mailing"],
            image: "/images/website-min.jpg",
            link: "/services/web-marketing",
            icon: <FaBullhorn/>,
            size: "1.15rem",
            background: "#fcfcfc",
            shadow: `6px 6px 14px #f9f9f9,
            -6px -6px 14px #ffffff`,
            sizeIcon: "2rem",
            sizeP: "0.9rem",
            widthBtn: "130px"
        },
    ]

    const pushPage = (link) => {
        if(typeof window !== "undefined"){
            window.location.href = `${link}`
        }
    }

    return (
        <>
            <ContainerCards>
                {data.map((item, i) => {
                    if(item.id === "1" || item.id === "2") {
                        return (
                            <CardStyle 
                                key={i} 
                                bgImage={item.image} 
                                ref={contentRef}
                                animate={animation}
                                initial="hidden"
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                        duration: 1.5,
                                        ease: [0.6, 0.05, -0.01, 0.9],
                                        },
                                    },
                                    hidden: {
                                        opacity: 0,
                                        x: item.x,
                                    },
                                }}
                            >
                                <div className={"overlay-bgImage"}>
                                    <h2>{item.nameService}</h2>
                                    <Bottombar/>
                                    <p>{item.description}</p>
                                    <span>
                                        {item.icon}
                                    </span>
                                    <motion.button 
                                        whileHover={{scale: 0.85}}
                                        onClick={() => pushPage(item.link)} 
                                        type={"button"}
                                    >
                                        En savoir +
                                    </motion.button>
                                </div>
                            </CardStyle>
                        )
                    }
                })}
            </ContainerCards>
            <Carre data={data}/>
        </>
    )
}

export default Cards;