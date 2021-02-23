import Link from "next/link"
import { useRouter } from 'next/router'

import styled from "styled-components"
import {Container} from "reactstrap"
import {motion} from "framer-motion"

import {titleAnimation, barAnimation} from "../utils/functions"

const StyleSection = styled("div")`
    width: 100%;
    height: 300px;
    /* clip-path: polygon(0 0, 100% 0, 100% 77%, 0% 100%); */
    /* background: rgb(2,73,117);
    background: linear-gradient(72deg, rgba(2,73,117,1) 8%, rgba(8,105,166,1) 91%); */
    background-image: url("/images/chess.jpg");
    background-position: center;
    background-size: cover;
    .overlay-fade{
        display: flex;
        align-items: center;
        color: white;
        width: 100%;
        height: 300px;
        background-color: rgba(0,0,0,0.5);
        padding: 2.5rem 0;
    }

    h2{
        text-align: center;
        text-transform: uppercase;
        font-size: 1.7rem;

        @media screen and (max-width: ${({theme}) => theme.mobile}){
            font-size: 1.4rem;
        }
    }
`

const Topbar = styled(motion.div)`
    width: 5%;
    height: 4px;
    margin: 0 auto;
    background: ${({theme}) => theme.primaryRyde};

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        width: 25%;
    }
`
const Bottombar = styled(motion.div)`
    width: 15%;
    height: 4px;
    margin: 0 auto;
    background: ${({theme}) => theme.primaryRyde};

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        width: 55%;
    }
`

const HomeOutherPage = ({children}) => {
    const router = useRouter()

    const namelink = router.pathname
    
    return (
        <StyleSection>
            <div className={"overlay-fade"}>
                <Container>
                        <motion.h2
                            variants={titleAnimation} initial="hidden" animate="visible"
                        >{children}</motion.h2>
                    <Bottombar variants={barAnimation} initial="hidden" animate="visible"/><br/>
                    {/* <div style={{display: "flex", justifyContent: "center"}}>
                        <Link href="/"><a>Accueil</a></Link>
                        <Link href={namelink}><a>{namelink}</a></Link>
                    </div> */}
                </Container>
            </div>
        </StyleSection>
    )
}

export default HomeOutherPage;