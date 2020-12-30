import { Container } from "reactstrap"
import HomeOutherPage from "../../../components/home.outherpage"
import Marketing from "../../../components/marketing/marketing"
import Wrapper from "../../../components/wrapper"

export default function MarketingWeb(){
    return (
        <Wrapper>
            <HomeOutherPage>
                <h2>Web marketing</h2>
            </HomeOutherPage>
            <Container>
                <Marketing/>
            </Container>
        </Wrapper>
    )
}