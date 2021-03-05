import Wrapper from "../components/wrapper";
import About from "../components/about/about";
import HomeOutherPage from "../components/home.outherpage"
import { Container } from "reactstrap";


export default function Apropos() {
    return (
        <Wrapper
            titrePage={"Icônes team"}
            descriptionPage={"A propos de l'agence Icônes Rdc, notre équipe des geeks pour un travail de qualité"}
            imagePage={"/images/affiche.jpg"}
        >
            <HomeOutherPage>
                Icônes Team
            </HomeOutherPage>
            <Container>
                <About/>
            </Container>
        </Wrapper>
    )
}