import styled from "styled-components"
import {motion} from "framer-motion"

export const SectionStyle = styled("section")`
    width: 100%;
    padding: 2rem 0;
`

export const Title = styled(motion.h2)`
    font-size: 2.5rem;
    color: ${({theme}) => theme.primaryRyde};
    text-transform: uppercase;
    margin: 10px 0;
    text-align: center;

    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        font-size: 2.1rem;
    }

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        font-size: 1.7rem;
    }
`
export const P = styled(motion.p)`
    font-size: 1.4rem;
    color: ${({theme}) => theme.primaryBlue};
    margin: 20px 0;
    text-align: center;
    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        font-size: 1.1rem;
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        font-size: 1rem;
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

export const Cards = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        grid-template-columns: repeat(1, 1fr);
    }

    .bg-more-awesome{
        background-color: ${({theme}) => theme.primaryRyde};
    }

    .container-magazine{
        .image1{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;


            .p1{
                font-size: 1.1rem;
                color: ${({theme}) => theme.primaryRyde};
                margin-top: 15px;
                text-align: center;
                font-weight: 550;

                @media screen and (max-width: ${({theme}) => theme.mobile}){
                    font-size: 0.9rem;
                }
            }
        }

        .progress{
                width: 80%;
            }
    }
`
