import styled from "styled-components"
import {motion} from "framer-motion"

export const SectionStyle = styled("section")`
    width: 100%;
`

export const Title = styled(motion.h2)`
    font-size: 1.6rem;
    color: ${({theme}) => theme.primaryRyde};
    margin: 10px 0;
    text-align: center;

    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        font-size: 1.35rem;
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        font-size: 1.3rem;
    }
`
export const P = styled(motion.p)`
    font-size: 1.5rem;
    color: ${({theme}) => theme.primaryRyde};
    margin: 10px 0;
    text-align: center;

    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        font-size: 1.25rem;
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        font-size: 1.2rem;
    }
`

export const Topbar = styled(motion.div)`
    width: 5%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};
    margin: 0 auto;
`
export const Bottombar = styled(motion.div)`
    width: 15%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};
    margin: 0 auto;
`

export const LogoContainer = styled("div")`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        flex-wrap: wrap;
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`