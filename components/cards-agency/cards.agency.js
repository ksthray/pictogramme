import React, {useEffect} from "react"

import Link from "next/link"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

import { Container } from 'reactstrap'
import Image from '../image'
import {SectionStyle, Cards, Title, Topbar, Bottombar, P, CadreImage} from './cards.style'
import { Progress } from 'reactstrap';

import {cardAgencyAnimation, titleAnimation, barAnimation, pAnimation} from "../../utils/functions"
import magazines from "../../data/agency.json"


const CardAgency = ( ) => {
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
                    à l'imprimerie
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
                <Cards
                    key={"cards"}
                    ref={contentRef}
                    animate={animation}
                    initial="hidden"
                    variants={cardAgencyAnimation}
                >
                    {magazines.map((magazine) => (
                        <Link key={magazine.id} href={magazine.link}>
                            <a style={{textDecoration: "none"}} target="_blank" rel="noopener">
                                <motion.div 
                                    className={"container-magazine"}
                                    whileHover={{
                                        y: 15,
                                        transition: { duration: 0.3 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <CadreImage>
                                        <Image
                                            key={magazine.id}
                                            src={magazine.image}
                                            alt={magazine.alt}
                                            width={magazine.width}
                                            height={magazine.height}
                                        />
                                        <p className={"p1"}>
                                            {magazine.text}
                                        </p>
                                        <Progress animated color="more-awesome" value={magazine.pourcentage}>
                                            {magazine.pourcentage}%
                                        </Progress>
                                    </CadreImage>
                                </motion.div>
                            </a>
                        </Link>
                    ))}
                </Cards>
            </Container>
        </SectionStyle>
    )
}

export default CardAgency;