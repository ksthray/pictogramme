import { Container } from "reactstrap"
import HomeOutherPage from "../../components/home.outherpage"
import NewCard from "../../components/our-services/NewCards"
import Wrapper from "../../components/wrapper"

export default function Services() {
    return (
        <Wrapper
            titrePage={"Services"}
            descriptionPage={"Les services que pictogramme Rdc vous offres"}
            imagePage={"/images/affiche.jpg"}
            motClePage={"Création identité graphique, Impressions, Ux design, site web, marketing digital"}
        >
            <HomeOutherPage>
                <h2>Nos services</h2>
            </HomeOutherPage>
            <Container>
                <br/>
                <NewCard/>
            </Container>
        </Wrapper>
    )
}