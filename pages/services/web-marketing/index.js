import { Container } from "reactstrap"
import HomeOutherPage from "../../../components/home.outherpage"
import Marketing from "../../../components/marketing/marketing"
import Wrapper from "../../../components/wrapper"

export default function MarketingWeb(){
    return (
        <Wrapper
            titrePage={"Marketing web"}
            descriptionPage={"Marketing digital adapter à votre cible"}
            imagePage={"/images/affiche.jpg"}
        >
            <HomeOutherPage>
                Web marketing
            </HomeOutherPage>
            <Container>
                <Marketing/>
            </Container>
        </Wrapper>
    )
}