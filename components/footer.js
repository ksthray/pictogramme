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
        height: 300px;

        .entreprise-id{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 100%;
        }

        .services{
            display: flex;
            flex-direction: column;
            color: white;
            padding: 2rem 0;
            
            h4{
                color: ${({theme}) => theme.primaryRyde};
                font-size: 1.1.rem;
            }
            p{
                line-height: 1;
            }

            .a{
                text-decoration: none;
                transition: color 0.3s;

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
            
            h4{
                color: ${({theme}) => theme.primaryRyde};
                font-size: 1.1.rem;
            }
            p{
                line-height: 1;
            }
        }
    }
`
const Topbar = styled("div")`
    width: 10%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};
`
const ContainerIcons = styled("div")`
    display: flex;
    justify-content: space-around;
    width: 50%;
    height: 100px;
    margin: 0 auto;

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

const Copyrigth = styled("div")`
    width: 100%;
    padding: 1rem;
    text-align: center;
    background: #202020;
    color: white;
    font-size: 0.8rem;
`

const Footer = () => {
    const services = [
        {nom: "Création idéentité graphique"},
        {nom: "Impression sur papier"},
        {nom: "Web design UX & UI design"},
        {nom: "Création site web"},
        {nom: "Web marketing"}
    ]
    const rsocial = [
        {
            nom: "facebook", 
            link: "https://web.facebook.com/Pictogramme-RDC-106616237991990", 
            icon: <FaFacebook style={{position: "relative", top: "-5px"}} className={"icon"}/>,
            face: "#315dfb",
            left: "#1e3ca7",
            right: "#426bff"
        },
        {
            nom: "instagram", 
            link: "https://www.instagram.com/pictogramme_rdc/", 
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
                    <div className={"entreprise-id"}>
                        <Img 
                            src={"/images/pictobycmct.png"}
                            width={350}
                            height={200}
                            layout={"intrinsic"}
                            quality={100}
                        />
                    </div>
                    <div className={"services"}>
                        <h4>Nos services</h4>
                        <Topbar/><br/>
                            {services.map((service, i) => (
                                <p key={i}>
                                    <Link href="/">
                                        <a className={"a"}>
                                            {service.nom}
                                        </a>
                                </Link>
                                </p>
                            ))}
                    </div>
                    <div className={"contacts"}>
                        <h4>Contact</h4>
                        <Topbar/><br/>
                        <p><GrMail/> pictogramme@gamil.com</p>
                        <p><BiMap/> Gombe, Av de la justice 30</p>
                        <p><BiPhoneCall/> +243824029562</p>
                    </div>
                </div>
                <h4 style={{
                        textAlign: "center", 
                        color: "#D91480", 
                        textTransform: "uppercase",
                        marginBottom: "60px"
                    }}>
                    Suivez-nous
                </h4>
                <ContainerIcons>
                    {rsocial.map((social, i) => (
                        <Link key={i} href={social.link}>
                            <a style={{textDecoration: "none"}} target="_blank">
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
                <span>Powerby CMCT TCG 2020</span>
            </Copyrigth>
        </FooterStyle>
    )
}

export default Footer;