import HomeOutherPage from "../../../components/home.outherpage"
import PrintUI from "../../../components/print/print.ui"
import Wrapper from "../../../components/wrapper"
import {Container} from "reactstrap"

export default function Impression() {
    return (
        <Wrapper>
            <HomeOutherPage>
                <h2>Impression sur papier</h2>
            </HomeOutherPage>
            <Container>
                <PrintUI/>
            </Container>
        </Wrapper>
    )
}