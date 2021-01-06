import React, {useEffect} from "react"

import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

import {titleAnimation, barAnimation, calendar} from "../../utils/functions"
import Img from "next/image"

import {Container} from "reactstrap"
import {Bottombar, LogoContainer, P, SectionStyle, Title, Topbar} from "./client.logo.style"

const logo = [
    {
        id: "1",
        image: "/images/orange.jpg",
        alt: "logo entreprise"
    },
    {
        id: "2",
        image: "/images/rawbank.png",
        alt: "logo entreprise"
    },
    {
        id: "3",
        image: "/images/bcdc.jpeg",
        alt: "logo entreprise"
    },
    {
        id: "4",
        image: "/images/vodacom.png",
        alt: "logo entreprise"
    },
    {
        id: "5",
        image: "/images/blackbox.png"
    }
]

const ClientLogo = () => {
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
            <Container>
                <br/>
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
                    Ils nous ont fait confiance
                </Title>
                <br/>
                <LogoContainer>
                    {logo.map((image) => (
                        <motion.div
                            key={image.id}     
                            ref={contentRef} 
                            animate={animation}
                            initial="hidden"
                            variants={calendar}
                        >
                            <Img
                                src={image.image}
                                layout={"intrinsic"}
                                width={150}
                                height={70}
                                alt={image.alt}
                            />
                        </motion.div>
                    ))}
                </LogoContainer><br/>
                <P
                    ref={contentRef}
                    animate={animation}
                    initial="hidden"
                    variants={titleAnimation}
                >
                    On donne le meilleur de nous pour satisfaire nos clients
                </P>
                <Bottombar 
                    ref={contentRef}
                    animate={animation}
                    initial="hidden"
                    variants={barAnimation}
                /><br/><br/>
            </Container>
        </SectionStyle>
    )
}

export default ClientLogo;