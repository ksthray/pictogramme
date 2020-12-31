import React, {useEffect} from "react"

import {useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

import { Container } from "reactstrap"
import Cards from "./Cards"
import {SectionStyle, Title, Topbar, Bottombar} from "./our.services.style"

import {titleAnimation, barAnimation} from "../../utils/functions"

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
                <Bottombar
                    ref={contentRef}
                    animate={animation}
                    initial="hidden"
                    variants={barAnimation}
                />
                <Cards/>
            </Container>
            <br/>
        </SectionStyle>
    )
}

export default OurServices;