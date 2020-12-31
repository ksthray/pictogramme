import Wrapper from "../components/wrapper";
import HomeOutherPage from "../components/home.outherpage"
import { Container } from "reactstrap";
import Contact from "../components/contact/contact";


export default function Apropos() {
    return (
        <Wrapper>
            <HomeOutherPage>
                <h2>Contact</h2>
            </HomeOutherPage>
            <Container>
                <br/>
                <Contact/>
                <br/>
            </Container>
        </Wrapper>
    )
}