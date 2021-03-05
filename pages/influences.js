import Wrapper from "../components/wrapper"
import HomeOutherPage from "../components/home.outherpage"
import { Container } from "reactstrap"
import InfluencePage from "../components/influence/influence.page"

export default function Realisation (){
    return (
        <Wrapper
            titrePage={"Icônes influence"}
            descriptionPage={"Une services dans Icônes pour les marques qui voudront travailler avec les influenceurs"}
            imagePage={"/images/affiche.jpg"}
            motClePage={"Agence des influenceurs"}
        >
            <HomeOutherPage>
                Icônes influence
            </HomeOutherPage>
            <Container>
                <InfluencePage/>
            </Container>
        </Wrapper>
    )
}