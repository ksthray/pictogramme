import {SectionStyle, Title, Topbar, Bottombar, Button} from "./nos.realisations.style"
import Print from "./print"
import {Container} from "reactstrap"

const NosRealisations = () => {
    return (
        <SectionStyle>
            <Container>
                <br/>
                <Topbar/>
                <Title>
                    Nos récentes Réalisations
                </Title>
                <Bottombar/>
                <br/><br/>
                <Print/>
                <div className={"button-main"}>
                    <Button>Voir +</Button>
                </div>
            </Container>
        </SectionStyle>
    )
}

export default NosRealisations;