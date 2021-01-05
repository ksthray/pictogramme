import React, {useEffect} from "react"

import Link from "next/link"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

import { Container } from 'reactstrap'
import Image from '../image'
import {SectionStyle, Cards, Title, Topbar, Bottombar, P} from './cards.style'
import { Progress } from 'reactstrap';

import {cardAgencyAnimation, titleAnimation, barAnimation, pAnimation} from "../../utils/functions"


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

    const magazines = [
        {
            id: "1",
            image: "/images/mbotesouriez-min.jpg",
            text: "La qualité du design",
            pourcentage: 92,
            link: "https://issuu.com/mbote-souriez/docs/mbote_bienvenue_n_3",
            alt: "page magazine",
            width: "250",
            height: "350"
        },
        {
            id: "2",
            image: "/images/mbotesrz-min.jpg",
            text: "La qualité du travail",
            pourcentage: 100,
            link: "https://issuu.com/mbote-souriez/docs/mbote_souriez",
            alt: "page magazine",
            width: "250",
            height: "350"
        },
        {
            id: "3",
            image: "/images/pagembote-min.jpg",
            text: "La qualité de l'impression",
            pourcentage: 93,
            link: "https://issuu.com/mbote-souriez/docs/mbote_bienvenue_n_2",
            alt: "page magazine",
            width: "250",
            height: "350"
        },
    ]
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
                            <a style={{textDecoration: "none"}} target="_blank">
                                <motion.div 
                                    className={"container-magazine"}
                                    whileHover={{
                                        y: 15,
                                        transition: { duration: 0.3 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={"image1"}>
                                        <Image
                                            key={magazine.id}
                                            src={magazine.image}
                                            alt={magazine.alt}
                                            width={magazine.width}
                                            height={magazine.height}
                                        />
                                    </div>
                                    <p className={"p1"}>
                                        {magazine.text}
                                    </p>
                                    <Progress animated color="more-awesome" value={magazine.pourcentage}>
                                        {magazine.pourcentage}%
                                    </Progress>
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