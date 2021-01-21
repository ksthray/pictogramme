import styled, {keyframes} from "styled-components"
import {motion} from "framer-motion"

export const SectionStyle = styled("section")`
    width: 100%;

    .slick-arrow {
        display: none;
    }
`

export const Title = styled("h2")`
    font-size: 1.6rem;
    color: ${({theme}) => theme.primaryRyde};
    margin: 10px 0;
    text-align: center;
    text-transform: uppercase;

    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        font-size: 1.35rem;
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        font-size: 1.3rem;
    }
`
export const P = styled(motion.p)`
    font-size: 1.3rem;
    color: ${({theme}) => theme.primaryBlack};
    margin: 10px 0;
    text-align: center;

    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        font-size: 1.2rem;
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        font-size: 1.1rem;
    }
`

export const Topbar = styled(motion.div)`
    width: 15%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};
    margin-top: 20px;
    margin: 0 auto;
`



export const LogoContainer = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-right: 20px;

    .the-images{
        width: 200px;
        height: auto;
        margin: 0 auto;
    }

    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        flex-wrap: wrap;
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`