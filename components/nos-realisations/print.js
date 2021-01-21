import React, {useEffect} from "react"

import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

import {cardServicesAnimation, calendar} from "../../utils/functions"
import Img from "next/image"

import {ContainerPrint, Magazine, Affiche} from "./nos.realisations.style"

const prints = [
    {
        id: "1",
        cover: "/images/vita-cover.jpg",
        side: "/images/side.jpg",
        back: "/images/vita-back.jpg",
        alt: "magazine"
    },
    {
        id: "2",
        cover: "/images/mbotesouriez-min.jpg",
        side: "/images/side.jpg",
        back: "/images/back.jpg",
        alt: "magazine"
    },
    {
        id: "3",
        cover: "/images/cover.jpg",
        side: "/images/side.jpg",
        back: "/images/back.jpg",
        alt: "magazine"
    }
]

const affiches = [
    {
        id: "1",
        image: "/images/casquette1.jpg",
        alt: "calendrier"
    },
    {
        id: "2",
        image: "/images/mask.jpg",
        alt: "calendrier"
    },
    {
        id: "3",
        image: "/images/cal3-min.jpeg",
        alt: "calendrier"
    },
    {
        id: "4",
        image: "/images/shopping.jpg",
        alt: "calendrier"
    },
    {
        id: "5",
        image: "/images/carte-de-voeux.jpg",
        alt: "calendrier"
    },
    {
        id: "6",
        image: "/images/stylo1.jpg",
        alt: "calendrier"
    }
]

const Print = () => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            animation.start("visible");
        }
    }, [animation, inView]);
    return (
        <>
            <ContainerPrint>
                {prints.map((print, i) => (
                    <Magazine 
                        key={i}
                        side={print.side} back={print.back} 
                        ref={contentRef}
                        animate={animation}
                        initial="hidden"
                        variants={cardServicesAnimation}
                    >
                        <div className={"book"}>
                            <Img 
                                className={"image"}
                                src={print.cover}
                                layout={"fill"}
                                quality={100}
                                alt={print.alt}
                            />
                        </div>
                    </Magazine>
                ))}
            </ContainerPrint>
            <br/><br/><br/>
            <OutherAffiche/>
        </>
    )
}

const OutherAffiche = () => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            animation.start("visible");
        }
    }, [animation, inView]);
    return (
        <Affiche>
                {
                    affiches.map((affiche, i) => (
                        <motion.div
                            key={i}
                            ref={contentRef}
                            animate={animation}
                            initial="hidden"
                            variants={calendar}
                        >
                            <img 
                                src={affiche.image}
                                alt={affiche.alt}
                                className={"img-affiche"}
                            />
                        </motion.div>
                    ))
                }
        </Affiche>
    )
}

export default Print;