import Img from "next/image"

import {Container} from "reactstrap"
import {Bottombar, LogoContainer, SectionStyle, Title, Topbar} from "./client.logo.style"

const logo = [
    {
        id: "1",
        image: "/images/orange.jpg"
    },
    {
        id: "2",
        image: "/images/rawbank.png"
    },
    {
        id: "3",
        image: "/images/bcdc.jpeg"
    },
    {
        id: "4",
        image: "/images/vodacom.png"
    },
    {
        id: "5",
        image: "/images/blackbox.png"
    }
]

const ClientLogo = () => {
    return (
        <SectionStyle>
            <Container>
                <br/>
                <Topbar/>
                <Title>Ils nous ont fait confiance</Title>
                <br/>
                <LogoContainer>
                    {logo.map((image, i) => (
                        <Img
                            key={i}
                            src={image.image}
                            layout={"intrinsic"}
                            width={150}
                            height={70}
                        />
                    ))}
                </LogoContainer><br/>
                <Title>On donne le meilleur de nous pour satisfaire <br/> nos client</Title>
                <Bottombar/><br/><br/>
            </Container>
        </SectionStyle>
    )
}

export default ClientLogo;