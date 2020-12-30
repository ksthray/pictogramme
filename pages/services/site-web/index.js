import { Container } from "reactstrap"
import HomeOutherPage from "../../../components/home.outherpage"
import Siteweb from "../../../components/site-web/siteweb"
import Wrapper from "../../../components/wrapper"

export default function Website(){
    return (
        <Wrapper>
            <HomeOutherPage>
                <h2>Creation de site web</h2>
            </HomeOutherPage>
            <Container>
                <Siteweb/>
            </Container>
        </Wrapper>
    )
}