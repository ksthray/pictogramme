import { Container } from "reactstrap"
import HomeOutherPage from "../../../components/home.outherpage"
import Webdesign from "../../../components/web-design/webdesign"
import Wrapper from "../../../components/wrapper"

export default function WebdesignUxUi(){
    return (
        <Wrapper>
            <HomeOutherPage>
                <h2>Web design UX & UI design</h2>
            </HomeOutherPage>
            <Container>
                <Webdesign/>
            </Container>
        </Wrapper>
    )
}