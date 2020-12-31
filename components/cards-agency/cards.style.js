import styled from "styled-components"
import {motion} from "framer-motion"

export const SectionStyle = styled("section")`
    width: 100%;
`

export const Title = styled(motion.h2)`
    font-size: 2.5rem;
    color: ${({theme}) => theme.primaryRyde};
    text-transform: uppercase;
    margin: 10px 0;
    text-align: center;
`
export const P = styled(motion.p)`
    font-size: 1.4rem;
    color: ${({theme}) => theme.primaryBlue};
    margin: 20px 0;
    text-align: center;
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

export const Cards = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .bg-more-awesome{
        background-color: ${({theme}) => theme.primaryRyde};
    }

    .block-1{
        .image1{
            box-shadow: -8px 10px 15px -4px rgba(0,0,0,0.10);
        }
    }
    .p1{
        font-size: 1.1rem;
        color: ${({theme}) => theme.primaryRyde};
        margin-top: 15px;
        text-align: center;
        font-weight: bold;
    }
`
