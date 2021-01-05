import Wrapper from "../components/wrapper"
import HomeOutherPage from "../components/home.outherpage"
import { Container } from "reactstrap"
import AllRealisations from "../components/nos-realisations/all.realisations"

export default function Realisation (){
    return (
        <Wrapper
            titrePage={"Nos réalisations"}
            descriptionPage={"Nos réçentes réalisations Pictogramme"}
            imagePage={"/images/affiche.jpg"}
            motClePage={"Charte graphique, Logo, Site internet, Calendrier"}
        >
            <HomeOutherPage>
                Nos réalisations
            </HomeOutherPage>
            <Container>
                <AllRealisations/>
            </Container>
        </Wrapper>
    )
}