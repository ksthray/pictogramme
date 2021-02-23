import React, {useEffect} from "react"

import {useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

import {cardServicesAnimation, } from "../../utils/functions"

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
        cover: "/images/karibucover.jpg",
        side: "/images/side.jpg",
        back: "/images/karibuback.jpg",
        alt: "magazine"
    }
]

const affiches = [
    {
        id: "1",
        image: "/images/casquette1.jpg",
        alt: "casquette"
    },
    {
        id: "2",
        image: "/images/mask.jpg",
        alt: "calendrier"
    },
    {
        id: "3",
        image: "/images/cal3-min.jpeg",
        alt: "mask"
    },
    { 
        id: "4",
        image: "/images/flash-disque2.jpg",
        alt: "flash"
    },
    {
        id: "5",
        image: "/images/goblet2.jpg",
        alt: "goblet"
    },
    {
        id: "6",
        image: "/images/stylo1.jpg",
        alt: "stylo"
    },
    {
        id: "7",
        image: "/images/bache1.jpg",
        alt: "bash"
    },
    {
        id: "8",
        image: "/images/flash-disque1.jpg",
        alt: "flash disque"
    },
    {
        id: "9",
        image: "/images/bracelet.jpg",
        alt: "bracelet"
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
                            <img 
                                className={"image"}
                                src={print.cover}
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
    
    return (
        <Affiche>
                {
                    affiches.map((affiche, i) => (
                        <img
                            key={i}
                            src={affiche.image}
                            alt={affiche.alt}
                            className={"img-affiche"}
                        />
                    ))
                }
        </Affiche>
    )
}

export default Print;