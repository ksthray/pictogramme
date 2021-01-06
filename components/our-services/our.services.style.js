import styled from "styled-components"
import {motion} from "framer-motion"

export const SectionStyle = styled("section")`
    width: 100%;
    padding: 3rem 0;
    background: rgb(2,73,117);
    background: linear-gradient(72deg, rgba(2,73,117,1) 8%, rgba(8,105,166,1) 91%);
    clip-path: polygon(0 0, 100% 8%, 100% 91%, 0% 100%);

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        clip-path: polygon(0 0, 100% 2%, 100% 98%, 0% 100%);
    }


`

export const Title = styled(motion.h2)`
    font-size: 2.5rem;
    color: white;
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
export const Topbar = styled(motion.div)`
    width: 5%;
    height: 4px;
    background: white;
    margin: 0 auto;
`
export const Bottombar = styled(motion.div)`
    width: 15%;
    height: 4px;
    background: white;
    margin: 0 auto;
    margin-bottom: 30px;
`
export const BottombarCard = styled("div")`
    width: 45%;
    height: 2.5px;
    background: ${({theme}) => theme.primaryBlue};
    margin-bottom: 15px;
`

export const ContainerCards = styled("div")`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
    padding: 2rem 0;

    @media screen and (max-width: ${({theme}) => theme.tablet}){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const CardStyle = styled("div")`
    background-image: url(${({background}) => background});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 270px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.4);
    margin-bottom: 10px;

    h3{
        font-size: 1.4rem;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            font-size: 1.15rem;
        }
    }

    @media screen and (max-width: ${({theme}) => theme.tablet}){
        width: 100%;
    }
    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        width: 100%;
    }

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        width: 100%;
    }

    .overlay{
        /* position: absolute; */
        width: 100%;
        height: 270px;
        z-index: 1;
        background-color: rgba(0,0,0,0.6);
        border-radius: 15px;

        @media screen and (max-width: ${({theme}) => theme.tablet}){
            width: 335px;
        }

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            width: 245px;
        }
        @media screen and (max-width: ${({theme}) => theme.mobile}){
            width: 100%;
        }
    }

    .all-content{
        width: 100%;
        position: relative;
        padding: 1rem;
        z-index: 2;
        color: white;

        h3{
            text-transform: uppercase;
        }
        p{
            line-height: 1;
        }

        .container-button{
            display: flex;
            justify-content: center;
            z-index: 3;
            margin-top: 30px;
            .button{
                width: 200px;
                border-radius: 20px;
                text-align: center;
                text-decoration: none;
                padding: 7px;
                background-color: white;
                color: ${({theme}) => theme.primaryRyde};
                border: none;
                box-shadow: -1px 1px 15px 5px rgba(0,0,0,0.4);
                transition: 0.3s all ease-in-out;
                font-weight: bold;

                :focus{
                    border: none;
                    outline: none;
                }

                &:hover{
                    background-color: ${({theme}) => theme.primaryRyde};
                    color: white;
                }
            }
        }
    }

    
`