import Link from "next/link"
import Slider from "react-slick";

import { Container } from "reactstrap"
import {Containt, BarSlim, ContainerVisuels} from "./special.style"

import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaLinkedin
} from "react-icons/fa"

const Special = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
            },
            {
                breakpoint: 770,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };
    const visuels = [
        {
            image: "/images/visuelblanch.jpg",
            alt: "visuel blanc"
        },
        {
            image: "/images/dame1.jpeg",
            alt: "hortense kasa-vubu"
        },
        {
            image: "/images/dame2.jpeg",
            alt: "Marie Antoinette"
        },
        {
            image: "/images/visuelbleu.jpg",
            alt: "visuel bleu"
        },
    ]
    const socials = [
        {lien: "https://www.facebook.com/Ic%C3%B4nes-RDC-106087318205604/", icon: <FaFacebookSquare/>},
        {lien: "https://instagram.com/icones_rdc?igshid=1a2l7w40wv2a1", icon: <FaInstagram/>},
        {lien: "https://www.linkedin.com/company/ic%C3%B4ne-rdc/", icon: <FaLinkedin/>},
        {lien: "https://mobile.twitter.com/IconeRdc", icon: <FaTwitterSquare/>},
    ]
    return (
        <Containt>
            <Container>
                <ContainerVisuels>
                    <h2>Spécial mois de la femme</h2>
                    <BarSlim/>
                    <p>
                        À l’occasion du mois de mars, mois dédié à la femme, Icône vous présente la campagne « 30 visages de femmes, femmes repères, femmes influentes, femmes baobabs » en RDC
                    </p>
                    <div className={"visuels"}>
                        <Slider {...settings}>
                            {visuels.map((image, i) => (
                                <div className={"visuel"} key={i}>
                                    <img     
                                        src={image.image}
                                        alt={image.alt}
                                        className={"images"}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <span>Suivez-nous pour ne rien rater</span>
                    <div className={"follow"}>
                        {socials.map((social, i) => (
                            <Link key={i} href={social.lien}>
                                <a style={{textDecoration: "none"}} target="_blank" rel="noopener">
                                    {social.icon}
                                </a>
                            </Link>
                        ))}
                    </div>
                </ContainerVisuels>
            </Container>
        </Containt>
    )
}

export default Special;