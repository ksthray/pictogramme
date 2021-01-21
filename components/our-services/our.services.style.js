import styled from "styled-components"
import {motion} from "framer-motion"

export const SectionStyle = styled("section")`
    width: 100%;
    padding: 2rem 0;
    /* background: #fff2f9; */
    background: rgb(247,247,247);
    background: linear-gradient(45deg, rgba(247,247,247,1) 0%, rgba(255,255,255,1) 100%);
    /* background: ${({theme}) => theme.primaryBlack}; */
    /* clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%); */
    /* background-color: #202020; */
    /* background: rgb(255,218,238);
    background: radial-gradient(circle, rgba(255,218,238,1) 0%, rgba(255,255,255,1) 50%); */

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        clip-path: polygon(0 0, 100% 2%, 100% 98%, 0% 100%);
    }


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
width: 20%;
height: 3px;
margin-bottom: 10px;
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
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    padding: 1rem;
`
export const SlimCard = styled("div")`
    width: 100%;
    background-image:url(${({Image}) => Image});
    background-position: center;
    background-size: cover;
    height: 250px;

    .carre{
        background-color: white;
        padding: 1rem;
        width: 80%;
        border-radius: 20px;
        text-align: left;
        /* height: 200px; */
        box-shadow: 0px 2px 20px 4px rgba(0,0,0,0.1);
        transform: translate(35px, 70px);
        transition: 0.4s all ease-in-out;

        &:hover{
            background-color: ${({theme}) => theme.primaryRyde};
            h3{
                color: white;
            }
            p{
                color: white;
            }
            .button-carre{
                box-shadow:  7px 7px 10px #ce137a,
                            -7px -7px 10px #e41586;
            }
        }

        h3{
            text-transform: uppercase;
            color: ${({theme}) => theme.primaryRyde};
            font-size: 1.3rem;
            transition: 0.4s all ease-in-out;
        }
        p{
            color: ${({theme}) => theme.primaryRyde};
            transition: 0.4s all ease-in-out;
        }
        .button-carre{
            width: 130px;
            padding: 7px;
            border: none;
            color: ${({theme}) => theme.white};
            font-weight: 500;
            border-radius: 20px;
            background: #D91480;
            box-shadow: 0 5px 10px rgba(0,0,0,0.3);
            transition: 0.4s all ease-in-out;

            &:focus{
                border: none;
                outline: none;
            }
        }
    }
`

//Style for New Cards

export const NewCardStyle = styled("div")`
    width: 100%;

    h2{
        font-size: 1.4rem;
        color: ${({theme}) => theme.primaryRyde};
        font-weight: 700;
        text-align: center;
    }
    
    .message-service{
        font-size: 1rem;
        color: ${({theme}) => theme.primaryBlack};
        padding: 0 10px;
        text-align: center;
    }
    .grid{
        display: grid;
        grid-template-columns: 40% 60%;
        grid-gap: 20px;

        .image{
            img{
                width: 100%;
            }
        }

        .grid-item{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
            margin-left: 20px;

            .flat-icon{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;

                img{
                    width: 60px;
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
                }
            }
        }
    }
`

export const Card = styled("div")`
    width: 100%;
    height: 400px;
    flex-direction: column;
    border-radius: 20px;
    padding: 10px;
    transition: 0.3s all ease-in-out;

    &:hover{
        /* background: #f7f7f7; */
        box-shadow:  6px 6px 17px #e3e3e3,
            -6px -6px 17px #ffffff;
    }
`
export const CardHead = styled("div")`align-items: center;
    width: 100%;
    height: 45%;
    background-image: url(${({background}) => background});
    background-size: cover;
    background-position: center; 
    color: white;
    border-radius: 10px;
`
export const CardBody = styled("div")`
    width: 100%;
    height: 33%;
    padding: 5px 0;  

    p{
        color: ${({theme}) => theme.primaryRyde};
        font-size: 1.1rem;
    }
`
export const CardTitle = styled("div")`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 12%;

    h2{
        text-transform: uppercase;
        font-size: 1.3rem;
        text-align: left;
        font-weight: 550;
        color: white;
        color: ${({theme}) => theme.primaryRyde};
    }
`
export const CardBottom = styled("div")`
    width: 100%;
    height: 10%;

    .btn-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 140px;
        height: 40px;
        border: 2px solid ${({theme}) => theme.primaryRyde};
        border-radius: 20px;
        color: ${({theme}) => theme.primaryRyde};
        font-size: 1.1rem;
        padding-left: 15px;
        transition: 0.3s all ease-in-out;
        cursor: pointer;

        &:hover{
            background-color: ${({theme}) => theme.primaryRyde};
            color: white;
        }

        span{
            display: flex;
            justify-content: center;
            align-items: center;
            color:  ${({theme}) => theme.white};
            width: 41px;
            border-radius: 100%;
            height: 40px;
            background: ${({theme}) => theme.primaryRyde};
            font-size: 1.3rem;
        }
    }
`