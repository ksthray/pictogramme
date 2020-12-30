import Wrapper from "../components/wrapper"
import HomeOutherPage from "../components/home.outherpage"
import { Container } from "reactstrap"
import AllRealisations from "../components/nos-realisations/all.realisations"

export default function Realisation (){
    return (
        <Wrapper>
            <HomeOutherPage>
                <h2>Nos réalisations</h2>
            </HomeOutherPage>
            <Container>
                <AllRealisations/>
            </Container>
        </Wrapper>
    )
}