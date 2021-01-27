import Slider from "react-slick";

import {Container} from "reactstrap"
import {LogoContainer, SectionStyle, Title, Topbar} from "./client.logo.style"

const logo = [
    {
        id: "1",
        image: "/images/ram.png",
        alt: "logo entreprise"
    },
    {
        id: "2",
        image: "/images/bibidigi.png",
        alt: "logo entreprise"
    },
    {
        id: "3",
        image: "/images/bcdc.jpeg",
        alt: "logo entreprise"
    },
    {
        id: "4",
        image: "/images/zahira.png",
        alt: "logo entreprise"
    },
    {
        id: "5",
        image: "/images/blackbox.png"
    },
    {
        id: "6",
        image: "/images/orange.jpg"
    },
    {
        id: "7",
        image: "/images/rawbank.png"
    }
]

const ClientLogo = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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

    return (
        <SectionStyle>
            <Container>
                <br/>
                <Title>
                    Ils nous font confiance
                </Title>
                <br/><br/>
                <Slider {...settings}>
                    {logo.map((image, i) => (
                        <LogoContainer key={i}>
                            <img    
                                src={image.image}
                                alt={image.alt}
                                className={"the-images"}
                            />
                        </LogoContainer>
                    ))}
                </Slider>
                <br/><br/>
            </Container>
        </SectionStyle>
    )
}

export default ClientLogo;