import React, { useState } from 'react';
import Img from "next/image"

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

const items = [
    {
        src: '/images/pictoqween.jpg',
        altText: 'Esprit créatif',
        caption: 'Echappe à la tyranie du hasard, transgresse les régles au moment opportun',
        button: 'Voir nos services'
    },
    {
        src: '/images/strategy.jpg',
        altText: 'mesurer, estimer, calculer, comparer et évaluer la probabilité de succès.',
        caption: 'S’adapter en permanence en fonction de la concurence par des méthodes innovants.',
        button: "Voir nos services"
    },
    {
        src: '/images/gold.jpg',
        altText: 'Des talents mis à votre disposition.',
        caption: 'On valide vos idées après competition, on ameliore, on peaufine et on polie pour une prise de decision.',
        button: "Voir l'équipe"
    }
];


import Wrapper from "../wrapper"
import {BgWrap, Contains, Button} from "./home.style"

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
                <h2>Agence créa et imprimérie</h2>
                <h1>Welcome to PICTOGRAMME</h1>
                <br/>
                <p>{item.caption}</p>
                <span>{item.altText} </span><br/>
                <Button>{item.button}</Button>
            </Contains>
            <div/>
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
                interval={"5000"}
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
