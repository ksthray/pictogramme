import styled from "styled-components"
import {motion} from "framer-motion"

export const SectionStyle = styled("section")`
    width: 100%;
    padding: 2rem 0;
    background: #fcfcfc;
`

export const Title = styled(motion.h2)`
    font-size: 1.8rem;;
    color: white;
    text-transform: uppercase;
    margin: 10px 0;
    text-align: center;
    color: ${({theme}) => theme.primaryRyde};

    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        font-size: 1.6rem;
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        font-size: 1.4rem;
    }

`
export const Topbar = styled(motion.div)`
    width: 5%;
    height: 4px;
    background: white;
    margin: 0 auto;
    background-color: ${({theme}) => theme.primaryRyde};
`
export const Bottombar = styled(motion.div)`
    width: 15%;
    height: 4px;
    margin: 0 auto;
    margin-bottom: 30px;
    background-color: ${({theme}) => theme.primaryRyde};
`
export const BarSlim = styled("div")`
    width: 15%;
    height: 3px;
    background: white;
    margin: 0 auto;
    margin-bottom: 20px;
    background-color: ${({theme}) => theme.primaryRyde};
`
export const BottombarCard = styled("div")`
    width: 45%;
    height: 2.5px;
    background: ${({theme}) => theme.primaryBlue};
    margin-bottom: 15px;
`

export const Paragraph = styled(motion.p)`
    color: ${({theme}) => theme.primaryBlack};
    font-size: 1rem;
    margin-top: 20px;
    text-align: center;
`
// cards
export const ContainerCards = styled("div")`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    /* grid-gap: 20px; */
    width: 100%;
    /* padding: 1rem; */

    @media screen and (max-width: ${({theme}) => theme.tablet}){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const CardStyle = styled(motion.div)`
    background-image: url(${({bgImage}) => bgImage});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 450px;

    .overlay-bgImage{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
        color: white;
        width: 100%;
        height: 450px;
        background: rgb(0,0,0,0.55);

        h2{
            text-transform: uppercase;
            color: ${({theme}) => theme.primaryRyde};
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
        }
        p{
            text-align: center;
            text-transform: uppercase;
            font-weight: 500;
        }
        span{
            font-size: 3rem;
        }
        button{
            width: 200px;
            padding: 7px;
            border: 2px solid ${({theme}) => theme.primaryRyde};
            background: transparent;
            color: ${({theme}) => theme.primaryRyde};
            font-weight: bold;
            border-radius: 20px;
            margin-top: 20px;
            transition: 0.3s all ease-in-out;

            &:hover{
                border: 2px solid ${({theme}) => theme.white};
                background: white;
                color: ${({theme}) => theme.primaryRyde};
            }

            &:focus{
                border: 2px solid ${({theme}) => theme.primaryRyde};
                outline: none;
            }
        }
    }
`

export const SlimCardContainer = styled("div")`
    display: grid;
    grid-template-columns: 1fr 35% 1fr;
    grid-gap: 25px;
    width: 100%;
    padding: 1rem;
    margin-top: 20px;

    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        grid-template-columns: 1fr;
    }

`
export const SlimCard = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    border-radius: 20px;
    background: ${({background}) => background};
    box-shadow: ${({shadow}) => shadow};


    h2{
        text-transform: uppercase;
        font-size: ${({size}) => size};
        color: ${({colorP}) => colorP};
        font-weight: 600;
    }
    p{
        font-size: ${({sizeP}) => sizeP};
        margin-bottom: 20px;
        color: ${({colorP}) => colorP};
    }
    span{
        font-size: ${({sizeIcon}) => sizeIcon};
        color: ${({color}) => color};
    }

    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        background: transparent;
        box-shadow: none;
        h2{
            font-size: 1.15rem;
            color: ${({theme}) => theme.primaryRyde} !important;
        }
        p{
            font-size: 0.9rem;
            color: ${({theme}) => theme.primaryRyde} !important;
        }
        span{
            font-size: 2rem;
            color: ${({theme}) => theme.primaryRyde} !important;
        }
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        margin-bottom: 25px;
    }
    
    .button-carre{
        width: ${({width}) => width};
        padding: 7px;
        border: none;
        color: ${({colorBtn}) => colorBtn};
        font-weight: 500;
        border-radius: 20px;
        background:  ${({color}) => color};
        transition: 0.3s all ease-in-out;

        &:focus{
            border: none;
            outline: none;
        }

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            width: 130px;
            background:  ${({theme}) => theme.primaryRyde};
            color: white;
        }
    }
    
`

//Style for New Cards
export const FlatIcon = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 300px;
    height: 250px;
    border-radius: 20px;
    background: ${({bgG}) => bgG};
    background: ${({bgL}) => bgL};

    img{
        width: 50px;
        height: auto;
    }
    h3{
        font-size: 1rem;
        margin-top: 10px;
        color: ${({theme}) => theme.primaryRyde};
        font-weight: 500;
        text-transform: uppercase;
    }
    p{
        font-size: 0.9rem;
        font-weight: 600;
    }
`
export const NewCardStyle = styled("div")`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h2{
        font-size: 1.4rem;
        color: ${({theme}) => theme.primaryRyde};
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
    }

    .container-top{
        width: 100%;
        background: #ffffff;
        padding: 1rem;
        border-radius: 20px;

        p{
            text-align: center;
            margin-bottom: 40px;
        }
        .grid-item1{
            width: 100%;
        }

        .grid-item2{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            width: 100%;
        }
    }

    .container-souhait{
        width: 100%;
        padding: 2rem 0;

        .card-main{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 30px;
            justify-content: center;

            @media screen and (max-width: ${({theme}) => theme.tablet}){
                grid-template-columns: repeat(3, 1fr);
            }
            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                grid-template-columns: repeat(2, 1fr);
            }
            @media screen and (max-width: ${({theme}) => theme.mobile}){
                grid-template-columns: repeat(1, 1fr);
            }

            .card-souhait{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                flex-direction: column;
                width: 100%;
                border-radius: 20px;
                color: ${({theme}) => theme.white};
                background: rgb(4,135,217);
                background: linear-gradient(146deg, rgba(4,135,217,1) 0%, rgba(2,73,134,1) 100%);
                padding: 2rem;
                text-align: center;

                span{
                    font-size: 3rem;
                    margin-bottom: 2rem;
                }
                p{
                    font-size: 1.1rem;
                }

                @media screen and (max-width: ${({theme}) => theme.mobile}){
                    width: 100%;
                }
            }
        }
    }
    
`