import styled from "styled-components"
import {Container} from "reactstrap"
import {motion} from "framer-motion"

import {titleAnimation, barAnimation} from "../utils/functions"

const StyleSection = styled("div")`
    width: 100%;
    height: 270px;
    padding: 2.5rem 0;
    clip-path: polygon(0 0, 100% 0, 100% 77%, 0% 100%);
    /* background: rgb(2,73,117);
    background: linear-gradient(72deg, rgba(2,73,117,1) 8%, rgba(8,105,166,1) 91%); */
    background-color: ${({theme}) => theme.primaryGray};
    display: flex;
    align-items: center;
    color: white;

    h2{

        @media screen and (max-width: ${({theme}) => theme.mobile}){
            font-size: 1.4rem;
        }
    }
`

const Topbar = styled(motion.div)`
    width: 5%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        width: 25%;
    }
`
const Bottombar = styled(motion.div)`
    width: 15%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        width: 55%;
    }
`

const HomeOutherPage = ({children}) => {
    return (
        <StyleSection>
            <Container>
                <Topbar variants={barAnimation} initial="hidden" animate="visible"/>
                    <motion.h2
                        variants={titleAnimation} initial="hidden" animate="visible"
                    >{children}</motion.h2>
                <Bottombar variants={barAnimation} initial="hidden" animate="visible"/>
            </Container>
        </StyleSection>
    )
}

export default HomeOutherPage;