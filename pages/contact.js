import Wrapper from "../components/wrapper";
import HomeOutherPage from "../components/home.outherpage"
import { Container } from "reactstrap";
import Contact from "../components/contact/contact";

export default function Apropos() {
    return (
        <Wrapper
            titrePage={"Contact Pictogramme"}
            descriptionPage={"Contactez-nous, contactez pictogramme Rdc et beneficier de ses services"}
            imagePage={"/images/affiche.jpg"}
        >
            <HomeOutherPage>
                Contact
            </HomeOutherPage>
            <Container>
                <br/>
                <Contact/>
                <br/>
            </Container>
        </Wrapper>
    )
}