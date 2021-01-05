import { Container } from "reactstrap"
import HomeOutherPage from "../../components/home.outherpage"
import Cards from "../../components/our-services/Cards"
import Wrapper from "../../components/wrapper"

export default function Services() {
    return (
        <Wrapper>
            <HomeOutherPage>
                <h2>Nos services</h2>
            </HomeOutherPage>
            <Container>
                <Cards/>
            </Container>
        </Wrapper>
    )
}