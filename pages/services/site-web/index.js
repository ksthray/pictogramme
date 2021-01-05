import { Container } from "reactstrap"
import HomeOutherPage from "../../../components/home.outherpage"
import Siteweb from "../../../components/site-web/siteweb"
import Wrapper from "../../../components/wrapper"

export default function Website(){
    return (
        <Wrapper
            titrePage={"Création site web"}
            descriptionPage={"Création de vos site web sur mésure"}
            imagePage={"/images/affiche.jpg"}
        >
            <HomeOutherPage>
                Creation de site web
            </HomeOutherPage>
            <Container>
                <Siteweb/>
            </Container>
        </Wrapper>
    )
}