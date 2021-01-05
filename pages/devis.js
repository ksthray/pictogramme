import Wrapper from "../components/wrapper";
import About from "../components/about/about";
import HomeOutherPage from "../components/home.outherpage"
import { Container } from "reactstrap";


export default function Devis() {
    return (
        <Wrapper
            titrePage={"Devis"}
            descriptionPage={"Faire soumettre un devis"}
            imagePage={"/images/affiche.jpg"}
        >
            <HomeOutherPage>
                Devis
            </HomeOutherPage>
            <Container>
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdfoILMwWhr76X8e-PvfdT562u5S1VPRhnHLJHI2c53wiRF3Q/viewform?embedded=true" 
                    width="640" 
                    height="4075" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0"
                >
                    Chargement…
                </iframe>
            </Container>
        </Wrapper>
    )
}