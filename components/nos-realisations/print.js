import React, {useEffect} from "react"

import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

import {cardServicesAnimation, calendar} from "../../utils/functions"
import Img from "next/image"

import {ContainerPrint, Magazine, Affiche} from "./nos.realisations.style"

const prints = [
    {
        id: "1",
        cover: "/images/cover.jpg",
        side: "/images/side.jpg",
        back: "/images/back.jpg",
        alt: "magazine"
    },
    {
        id: "2",
        cover: "/images/cover.jpg",
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
        image: "/images/cal1-min.jpeg",
        alt: "calendrier"
    },
    {
        id: "2",
        image: "/images/cal2-min.jpeg",
        alt: "calendrier"
    },
    {
        id: "3",
        image: "/images/cal3-min.jpeg",
        alt: "calendrier"
    }
]

// const flyers = [
//     {
//         id: "1",
//         image: "/images/flyer.png"
//     },
//     {
//         id: "2",
//         image: "/images/flyer1.png"
//     }
// ]
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
                            <Img 
                                src={affiche.image}
                                layout={"responsive"}
                                width={100}
                                height={80}
                                quality={100}
                                alt={affiche.alt}
                            />
                        </motion.div>
                    ))
                }
            </Affiche>
        </>
    )
}

export default Print;