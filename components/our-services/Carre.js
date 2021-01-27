import React, {useEffect} from "react"

import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

import {SlimCard, BarSlim, SlimCardContainer } from "./our.services.style"
import { Container } from "reactstrap"

const Carre = ({data}) => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            animation.start("visible");
        }
    }, [animation, inView]);

    const pushPage = (e, link) => {
        e.preventDefault()
        if(typeof window !== "undefined"){
            window.location.href = `${link}`
        }
    }
    return (
        <Container>
            <SlimCardContainer>
                {data.map((element, i) => {
                    if(element.id === "3" || element.id === "4" || element.id === "5"){
                        return (
                            <SlimCard 
                                key={i} 
                                size={element.size}
                                background={element.background}
                                shadow={element.shadow}
                                sizeIcon={element.sizeIcon}
                                sizeP={element.sizeP}
                                width={element.widthBtn}
                                ref={contentRef}
                                animate={animation}
                                initial="hidden"
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                        duration: 1.5,
                                        delay: 0.3,
                                        ease: [0.6, 0.05, -0.01, 0.9],
                                        },
                                    },
                                    hidden: {
                                        opacity: 0,
                                    },
                                }}
                            >
                                <span>{element.icon}</span><br/>
                                <h2>{element.nameService}</h2>
                                <BarSlim/>
                                <p>{element.description}</p>
                                <motion.button 
                                    whileHover={{scale: 0.85}}
                                    type={"button"}
                                    className={"button-carre"} 
                                    onClick={(e) => pushPage(e, element.link)}
                                >
                                    En savoir +
                                </motion.button>
                            </SlimCard>
                        )
                    }
                })}
            </SlimCardContainer>
        </Container>
    )
}

export default Carre;