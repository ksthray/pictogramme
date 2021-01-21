import { Container } from "reactstrap"
import HomeOutherPage from "../../../components/home.outherpage"
import Webdesign from "../../../components/web-design/webdesign"
import Wrapper from "../../../components/wrapper"

export default function WebdesignUxUi(){
    return (
        <Wrapper
            titrePage={"Web design UX et UI design"}
            descriptionPage={"Pictogramme Rdc, expérience utilisateur et interface utilisateur"}
            imagePage={"/images/affiche.jpg"}
        >
            <HomeOutherPage>
                Web design UX & UI design
            </HomeOutherPage>
            <Container>
                <Webdesign/>
            </Container>
        </Wrapper>
    )
}