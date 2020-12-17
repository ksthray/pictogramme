import { Container } from "reactstrap"
import {SectionStyle, Title, Topbar, Bottombar, Cards, ContainerCards, BottombarCard} from "./our.services.style"

const data = [
    {
        id: "1",
        nameService: "création identité graphique",
        array: ["charte graphique", "création logo", "magazine"],
        image: "/images/affiche.jpg"
    },
    {
        id: "2",
        nameService: "impression par papiers",
        array: ["A4 large", "X45 leger", "Grand format AG10"],
        image: "/images/print.jpg"
    },
    {
        id: "5",
        nameService: "Web marketing strategie digital",
        array: ["Google Adsence", "Referencemen SEO", "Campagne E-mailing"],
        image: "/images/website.jpg"
    },
    {
        id: "3",
        nameService: "création de site web sur mesure",
        array: ["Site vitrine", "Site e-commerce", "Progressive-Web-App"],
        image: "/images/website.jpg"
    },
    {
        id: "4",
        nameService: "web design UX & UI design",
        array: ["Etude de persona", "Création maquette et prototypage", "Design Thinking"],
        image: "/images/uxdesign.jpg"
    }
]

const OurServices = () => {
    return (
        <SectionStyle>
            <br/>
            <Container>
                <Topbar/>
                <Title>
                    Nos
                    Services
                </Title>
                <Bottombar/><br/> <br/>
                <ContainerCards>
                    {data.map((item, i) => (
                        <Cards background={item.image}>
                            <div className={"overlay"}/>
                            <div className={"all-content"}>
                                <h3>{item.nameService}</h3>
                                <BottombarCard/>
                                {item.array.map((el) => (
                                    <p>{"👌 "}{el}</p>
                                ))}
                                <div className={"container-button"}>
                                    <button className={"button"}>En savoir +</button>
                                </div>
                            </div>
                        </Cards>
                    ))}
                </ContainerCards>
            </Container>
            <br/>
        </SectionStyle>
    )
}

export default OurServices;