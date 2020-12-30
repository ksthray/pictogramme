import { Container } from "reactstrap"
import Cards from "./Cards"
import {SectionStyle, Title, Topbar, Bottombar} from "./our.services.style"

const OurServices = () => {
    return (
        <SectionStyle>
            <br/>
            <Container>
                <Topbar/>
                <Title>
                    Nos
                    Services
                </Title>
                <Bottombar/><br/> <br/>
                <Cards/>
            </Container>
            <br/>
        </SectionStyle>
    )
}

export default OurServices;