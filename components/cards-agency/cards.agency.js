import React, {useEffect} from "react"

import Link from "next/link"
import {useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import Zoom from 'react-reveal/Zoom';

import { Container, Progress } from 'reactstrap'
import {SectionStyle, Cards, Title, Topbar, Bottombar, P, CadreImage} from './cards.style'

import {titleAnimation, barAnimation, pAnimation} from "../../utils/functions"
import magazines from "../../data/agency.json"


const CardAgency = () => {
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
                    De la conception <br/>
                    au print
                </Title>
                <Bottombar
                    ref={contentRef}
                    animate={animation}
                    initial="hidden"
                    variants={barAnimation}
                />
                <P
                    ref={contentRef}
                    animate={animation}
                    initial="hidden"
                    variants={pAnimation}
                >
                    « Sans imagination, il ne pourrait avoir de création »,
                </P><br/>
                <CardMag/>
            </Container>
        </SectionStyle>
    )
}

const CardMag = () => {
    return (
        <Cards>
            {magazines.map((magazine) => (
                <Link key={magazine.id} href={magazine.link}>
                    <a style={{textDecoration: "none"}} target="_blank" rel="noopener">
                        <Zoom>
                            <div className={"container-magazine"}>
                                <CadreImage>
                                    <img
                                        src={magazine.image}
                                        alt={magazine.alt}
                                    />
                                    <p className={"p1"}>
                                        {magazine.text}
                                    </p>
                                    <Progress animated color="more-awesome" value={magazine.pourcentage}>
                                        {magazine.pourcentage}%
                                    </Progress>
                                </CadreImage>
                            </div>
                        </Zoom>
                    </a>
                </Link>
            ))}
        </Cards>
    )
}

export default CardAgency;