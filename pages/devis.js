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
                <div style={{width: "100%"}}>
                    <iframe 
                        title={"formulaire des questions"}
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdfoILMwWhr76X8e-PvfdT562u5S1VPRhnHLJHI2c53wiRF3Q/viewform?embedded=true" 
                        width="100%" 
                        height="4075" 
                        frameBorder="0" 
                        marginHeight="0" 
                        marginWidth="0"
                    >
                        Chargement…
                    </iframe>
                </div>
            </Container>
        </Wrapper>
    )
}