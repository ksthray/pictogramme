import React, {useEffect} from "react"

import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

import {titleAnimation, cupAnimation, barAnimation, bgLogoAnimation} from "../utils/functions"

import Img from "next/image"
import Link from "next/link"

import {GrMail, GrInstagram, GrLinkedin} from "react-icons/gr"
import {BiMap, BiPhoneCall} from "react-icons/bi"
import {FaFacebook} from "react-icons/fa"
import { Container } from "reactstrap"

import styled from "styled-components"

const FooterStyle = styled("footer")`
    width: 100%;
    background: rgb(20,20,20);
    background: linear-gradient(45deg, rgba(20,20,20,1) 18%, rgba(0,0,0,1) 91%);

    .container-el{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: ${({theme}) => theme.mobile}){
            grid-template-columns: repeat(1, 1fr);
        }

        .entreprise-id{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 100%;

            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                display: none;
            }
        }

        .services{
            display: flex;
            flex-direction: column;
            color: white;
            padding: 2rem 0;

            @media screen and (max-width: ${({theme}) => theme.mobile}){
                justify-content: center;
                align-items: center;
            }
            
            h4{
                color: ${({theme}) => theme.primaryRyde};
                font-size: 1.3rem;
            }
            p{
                line-height: 1;
            }

            .a{
                text-decoration: none;
                transition: color 0.3s;
                color: white;

                &:hover{
                    color: ${({theme}) => theme.primaryRyde};
                }
            }
        }

        .contacts{
            display: flex;
            flex-direction: column;
            color: white;
            padding: 2rem 0;

            @media screen and (max-width: ${({theme}) => theme.mobile}){
                justify-content: center;
                align-items: center;
            }
            
            h4{
                color: ${({theme}) => theme.primaryRyde};
                font-size: 1.3rem;
            }
            p{
                line-height: 1;
            }
        }
    }
`
const Topbar = styled(motion.div)`
    width: 10%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};
    margin-bottom: 10px;
`
const ContainerIcons = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 1.4rem;
    }

    .btn, .btn::before, .btn::after{
        transition: 0.5s;
    }

    .btn{
        &:hover{
            .logo, .text{
                color: white;
            }
        }
    }
`
const Btn = styled("div")`
    margin-bottom: 3rem;
    .btn-icons:hover{
        background-color: ${({face}) => face};
        &:before{
            background-color:  ${({left}) => left};
        }
        &:after{
            background-color:  ${({right}) => right};
        }
    }
    .btn{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 120px;
        height: 40px;
        color: lightgray;
        background-color: white;
        transform: rotate(-30deg) skewX(25deg) translate(0,0);
        box-shadow: -20px 20px 10px rgba(0,0,0,0.5);
        transition: all ease-in-out 0.3s;

        &:before{
            content: "";
            position: absolute;
            width: 20px;
            height: 100%;
            background: whitesmoke;
            transform: skewY(-45deg);
            top: 10px;
            left: -20px;
        }
        &:after{
            content: "";
            position: absolute;
            width: 100%;
            height: 20px;
            background: whitesmoke;
            transform: skewX(-45deg);
            left: -10px;
            bottom: -20px;
        }
        &:hover{
            transform: rotate(-30deg) skewX(25deg) translate(25px,-25px);
            box-shadow: -40px 40px 10px rgba(0,0,0,0.5);
        }

        .logo{
            font-size: 25px;
            color: ${({face}) => face};
            transition: color 0.5s;
        }
        .text{
            font-size: 12.5px;
            color: ${({face}) => face};
            transition: color 0.5s;
        }  
    }

`
const Copyrigth = styled(motion.div)`
    width: 100%;
    padding: 1rem;
    text-align: center;
    background: #202020;
    color: white;
    font-size: 0.8rem;
`
const Footer = () => {
    const animation = useAnimation();
    const [refContent, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if(inView){
            animation.start("visible");
        }
    }, [animation, inView]);

    const services = [
        {nom: "Création idéentité graphique", link: "/services/creation-identite-graphique"},
        {nom: "Impression sur papier", link: "/services/impression"},
        {nom: "Web design UX & UI design", link: "/services/web-design-ux-ui-design"},
        {nom: "Création site web", link: "/services/site-web"},
        {nom: "Web marketing", link: "/services/web-marketing"}
    ]
    const rsocial = [
        {
            nom: "facebook", 
            link: "https://www.facebook.com/Ic%C3%B4nes-RDC-106087318205604/", 
            icon: <FaFacebook style={{position: "relative", top: "-5px"}} className={"icon"}/>,
            face: "#315dfb",
            left: "#1e3ca7",
            right: "#426bff"
        },
        {
            nom: "instagram", 
            link: "https://instagram.com/icones_rdc?igshid=1a2l7w40wv2a1", 
            icon: <GrInstagram style={{position: "relative", top: "-5px"}} className={"icon"}/>,
            face: "#dd2a7b",
            left: "#af145a",
            right: "#ff2a8b"
        },
        {
            nom: "linkedin", 
            link: "https://linkedin.com/", 
            icon: <GrLinkedin style={{position: "relative", top: "-5px"}} className={"icon"}/>,
            face: "#0e76a8",
            left: "#09577d",
            right: "#1693d0"
        }
    ]
    return (
        <FooterStyle>
            <Container>
                <div className={"container-el"}>
                    <motion.div 
                        ref={refContent}
                        animate={animation}
                        initial="hidden"
                        variants={bgLogoAnimation}
                        className={"entreprise-id"}
                    >
                        <Img 
                            src={"/images/logobg.png"}
                            width={250}
                            height={250}
                            layout={"intrinsic"}
                            quality={100}
                        />
                    </motion.div>
                    <div className={"services"}>
                        <motion.h4
                            ref={refContent}
                            animate={animation}
                            initial="hidden"
                            variants={titleAnimation}
                        >Nos services</motion.h4>
                        <Topbar
                            ref={refContent}
                            animate={animation}
                            initial="hidden"
                            variants={barAnimation}
                        /><br/>
                            {services.map((service, i) => (
                                <motion.p 
                                    key={i}
                                    ref={refContent}
                                    animate={animation}
                                    initial="hidden"
                                    variants={cupAnimation}
                                >
                                    <Link href={service.link}>
                                        <a className={"a"}>
                                            {service.nom}
                                        </a>
                                    </Link>
                                </motion.p>
                            ))}
                    </div>
                    <div className={"contacts"}>
                        <motion.h4
                            ref={refContent}
                            animate={animation}
                            initial="hidden"
                            variants={titleAnimation}
                        >Contact</motion.h4>
                        <Topbar
                            ref={refContent}
                            animate={animation}
                            initial="hidden"
                            variants={barAnimation}
                        /><br/>
                        <motion.p
                            ref={refContent}
                            animate={animation}
                            initial="hidden"
                            variants={cupAnimation}
                        ><GrMail/> pictogramme@gamil.com</motion.p>
                        <motion.p
                            ref={refContent}
                            animate={animation}
                            initial="hidden"
                            variants={cupAnimation}
                        ><BiMap/> Gombe, Av de la justice 30</motion.p>
                        <motion.p
                            ref={refContent}
                            animate={animation}
                            initial="hidden"
                            variants={cupAnimation}
                        ><BiPhoneCall/> +243824029562</motion.p>
                    </div>
                </div>
                <motion.h4
                    ref={refContent}
                    animate={animation}
                    initial="hidden"
                    variants={titleAnimation}
                    style={{
                        textAlign: "center", 
                        color: "#0487D9", 
                        textTransform: "uppercase",
                        marginBottom: "60px",
                        fontSize: "1.2rem"
                    }}>
                    Restez connecter
                </motion.h4>
                <ContainerIcons
                    ref={refContent}
                    animate={animation}
                    initial="hidden"
                    variants={cupAnimation}
                >
                    {rsocial.map((social, i) => (
                        <Link key={i} href={social.link}>
                            <a style={{textDecoration: "none"}} target="_blank" rel="noopener">
                                <Btn face={social.face} left={social.left} right={social.right}>
                                    <div className={"btn btn-icons"}>
                                        <div className={"logo"}>
                                            {social.icon}
                                        </div>
                                        <div className={"text"}>
                                            {social.nom}
                                        </div>
                                    </div>
                                </Btn>
                            </a>
                        </Link>
                    ))}
                </ContainerIcons>
            </Container>
            <Copyrigth>
                <motion.span
                    ref={refContent}
                    animate={animation}
                    initial="hidden"
                    variants={titleAnimation}
                >Powerby CMCT TCG 2020</motion.span>
            </Copyrigth>
        </FooterStyle>
    )
}

export default Footer;