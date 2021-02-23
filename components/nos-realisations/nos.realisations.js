import React, {useEffect} from "react"

import {useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

import {titleAnimation, barAnimation} from "../../utils/functions"

import {SectionStyle, Title, Topbar, Bottombar, Button} from "./nos.realisations.style"
import Print from "./print"
import Slider from "../carouselrealisation/slider"
import {Container} from "reactstrap" 

const NosRealisations = () => {
    const animation = useAnimation();
    const [refContent, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if(inView){
            animation.start("visible");
        }
    }, [animation, inView]);

    const pushPage = (e) => {
        e.preventDefault()
        if(typeof window !== "undefined"){
            window.location.href = "/realisations"
        }
    }
    return (
        <SectionStyle>
            <Container>
                <br/>
                <Topbar
                    ref={refContent}
                    animate={animation}
                    initial="hidden"
                    variants={barAnimation} 
                />
                <Title
                    ref={refContent}
                    animate={animation}
                    initial="hidden"
                    variants={titleAnimation}
                >
                    Nos récentes Réalisations
                </Title>
                <Bottombar
                    ref={refContent}
                    animate={animation}
                    initial="hidden"
                    variants={barAnimation}
                />
                <br/><br/>
                <Print/><br/>
                <Slider/>
                <div className={"button-main"}>
                    <Button onClick={(e) => pushPage(e)}>
                        Voir +
                    </Button>
                </div>
            </Container>
        </SectionStyle>
    )
}

export default NosRealisations;