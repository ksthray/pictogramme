import Wrapper from "../components/wrapper"
import HomeOutherPage from "../components/home.outherpage"
import { Container } from "reactstrap"
import AllRealisations from "../components/nos-realisations/all.realisations"

export default function Realisation (){
    return (
        <Wrapper
            titrePage={"Icônes oeuvres"}
            descriptionPage={"Nos réçentes réalisations qu'on a produit Icônes Rdc, Nos oeuvres en quelques sorte"}
            imagePage={"/images/affiche.jpg"}
            motClePage={"Charte graphique, Logo, Site internet, Calendrier"}
        >
            <HomeOutherPage>
                Icônes oeuvres
            </HomeOutherPage>
            <Container>
                <AllRealisations/>
            </Container>
        </Wrapper>
    )
}