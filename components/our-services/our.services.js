import React, {useEffect} from "react"

import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

import { Container } from "reactstrap"
// import Cards from "./Cards"

import NewCards from "./NewCards"
import Cards from "./Cards"
import {SectionStyle, Title, Topbar, Bottombar, Paragraph} from "./our.services.style"

import {titleAnimation, barAnimation, opacityAnimation} from "../../utils/functions"

const OurServices = () => {
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
        <SectionStyle>
            <br/>
            <Container>
                <Topbar
                    ref={contentRef}
                    animate={animation}
                    initial="hidden"
                    variants={barAnimation}
                />
                <Title
                    ref={contentRef}
                    animate={animation}
                    initial="hidden"
                    variants={titleAnimation}
                >
                    Nos
                    Services
                </Title>
                {/* <NewCards/> */}
                <Paragraph
                    ref={contentRef}
                    animate={animation}
                    initial="hidden"
                    variants={opacityAnimation}
                >
                        Notre agence de communication accompagne les entreprises en proposant le meilleur 
                        service sur n'importe quel marché cible. Nous parlons votre langue, comprenons vos 
                        objectifs et proposons les solutions digitales les plus efficaces.
                </Paragraph>
                <Bottombar
                ref={contentRef}
                animate={animation}
                initial="hidden"
                variants={barAnimation}
                />
            </Container>
            <Cards/>
        </SectionStyle>
    )
}

export default OurServices;