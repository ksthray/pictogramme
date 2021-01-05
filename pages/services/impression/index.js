import HomeOutherPage from "../../../components/home.outherpage"
import PrintUI from "../../../components/print/print.ui"
import Wrapper from "../../../components/wrapper"
import {Container} from "reactstrap"

export default function Impression() {
    return (
        <Wrapper
            titrePage={"Impression sur papiers"}
            descriptionPage={"Impression sur papiers de bonne qualités"}
            imagePage={"/images/affiche.jpg"}
        >
            <HomeOutherPage>
                Impression sur papier
            </HomeOutherPage>
            <Container>
                <PrintUI/>
            </Container>
        </Wrapper>
    )
}