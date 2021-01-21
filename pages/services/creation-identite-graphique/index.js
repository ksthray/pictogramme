import { Container } from "reactstrap"
import PageUI from "../../../components/create-visuel-graphique/page.ui"
import HomeOutherPage from "../../../components/home.outherpage"
import Wrapper from "../../../components/wrapper"

export default function CreationIdentite() {
    return (
        <Wrapper
            titrePage={"Création identité visuel"}
            descriptionPage={"Pictogramme Rdc, création de vos identités visuels"}
            imagePage={"/images/affiche.jpg"}
        >
            <HomeOutherPage>
                <h2>Creation de votre identité visuel</h2>
            </HomeOutherPage>
            <Container>
                <PageUI/>
            </Container>
        </Wrapper>
    )
}