import Wrapper from "../components/wrapper"
import HomeOutherPage from "../components/home.outherpage"
import { Container } from "reactstrap"
import InfluencePage from "../components/influence/influence.page"

export default function Realisation (){
    return (
        <Wrapper
            titrePage={"Picto influence"}
            descriptionPage={"Une services pour les marques qui voudront travailler avec les influenceurs"}
            imagePage={"/images/affiche.jpg"}
            motClePage={"Agence des influenceurs"}
        >
            <HomeOutherPage>
                Picto influence
            </HomeOutherPage>
            <Container>
                <InfluencePage/>
            </Container>
        </Wrapper>
    )
}