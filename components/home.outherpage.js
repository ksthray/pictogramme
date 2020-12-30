import styled from "styled-components"
import {Container} from "reactstrap"

const StyleSection = styled("div")`
    width: 100%;
    height: 270px;
    padding: 2.5rem 0;
    clip-path: polygon(0 0, 100% 0, 100% 77%, 0% 100%);
    background: rgb(2,73,117);
    background: linear-gradient(72deg, rgba(2,73,117,1) 8%, rgba(8,105,166,1) 91%);
    display: flex;
    align-items: center;
    color: white;
`

const Topbar = styled("div")`
    width: 5%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};
`
const Bottombar = styled("div")`
    width: 15%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};
`

const HomeOutherPage = ({children}) => {
    return (
        <StyleSection>
            <Container>
                <Topbar/>
                {children}
                <Bottombar/>
            </Container>
        </StyleSection>
    )
}

export default HomeOutherPage;