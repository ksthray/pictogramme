import Wrapper from "../components/wrapper";
import About from "../components/about/about";
import HomeOutherPage from "../components/home.outherpage"
import { Container } from "reactstrap";


export default function Apropos() {
    return (
        <Wrapper
            titrePage={"A propos"}
            descriptionPage={"A propos de pcitogramme Rdc"}
            imagePage={"/images/affiche.jpg"}
        >
            <HomeOutherPage>
                La team
            </HomeOutherPage>
            <Container>
                <About/>
            </Container>
        </Wrapper>
    )
}