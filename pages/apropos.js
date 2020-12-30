import Wrapper from "../components/wrapper";
import About from "../components/about/about";
import HomeOutherPage from "../components/home.outherpage"
import { Container } from "reactstrap";


export default function Apropos() {
    return (
        <Wrapper>
            <HomeOutherPage>
                <h2>La team</h2>
            </HomeOutherPage>
            <Container>
                <About/>
            </Container>
        </Wrapper>
    )
}