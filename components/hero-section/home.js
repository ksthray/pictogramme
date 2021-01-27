import React, { useState } from 'react';
import Img from "next/image"
import Link from "next/link"
import {motion} from "framer-motion"

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

import {btnHome} from "../../utils/functions"

const items = [
    {
        src: '/images/pictoqween.jpg',
        altText: 'Esprit créatif',
        caption: 'Echappe à la tyranie du hasard, transgresse les régles au moment opportun',
        button: 'Voir nos services',
        link: "/services"
    },
    {
        src: '/images/strategy.jpg',
        altText: 'mesurer, estimer, calculer, comparer et évaluer la probabilité de succès.',
        caption: 'S’adapter en permanence en fonction de la concurence par des méthodes innovants.',
        button: "Voir nos services",
        link: "/services"
    },
    {
        src: '/images/gold.jpg',
        altText: 'Des talents mis à votre disposition.',
        caption: 'On valide vos idées après competition, on ameliore, on peaufine et on polie pour une prise de decision.',
        button: "Voir l'équipe",
        link: "/apropos"
    }
];

import {BgWrap, Contains} from "./home.style"


export default function HomePage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        const pushPage = (e, link) => {
            e.preventDefault()
            if(typeof window !== "undefined"){
                window.location.href = `${link}`
            }
        }
        return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <BgWrap>
                <Img 
                    src={item.src} 
                    alt={item.altText} 
                    layout="fill"
                    objectFit="cover"
                    quality={100} 
                />
                <Contains>
                    <motion.h1  
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1.1, duration: 1.1}}
                    >
                        Agence créa et print
                    </motion.h1>
                    {/* <motion.h2
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1.3, duration: 1.3}}
                    >
                        Welcome to PICTOGRAMME
                    </motion.h2> */}
                    <motion.p
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 2, duration: 1.6}}
                    >
                        {item.caption}
                    </motion.p>
                    <motion.span
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 2.1, duration: 1.6}}
                    >
                        {item.altText} 
                    </motion.span><br/>
                    <motion.button
                        variants={btnHome} 
                        initial="initial" 
                        animate="animate"
                        whileHover="hover"
                        className="button" 
                        type="button"
                        onClick={(e) => pushPage(e, item.link)}
                    >
                        {item.button}
                    </motion.button>
                </Contains>
            </BgWrap>
        </CarouselItem>
        );
    });
    return (
        <>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className="carousel carousel-fade"
                interval={"7000"}
            >
                <CarouselIndicators
                items={items} 
                activeIndex={activeIndex} 
                onClickHandler={goToIndex} 
                />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </>
    )
}
