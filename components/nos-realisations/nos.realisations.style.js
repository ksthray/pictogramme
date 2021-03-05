import styled from "styled-components"
import {motion} from "framer-motion"

export const SectionStyle = styled("section")`
    width: 100%;
    .button-main{
        padding: 2rem;
        display: flex;
        justify-content: center;
    }
`
export const Button = styled(motion.button)`
    width: 200px;
    background-color: ${({theme}) => theme.primaryRyde};
    color: white;
    border: none;
    font-weight: bold;
    border-radius: 20px;
    padding: 8px 8px;
    transition: all ease-out 0.3s;
    margin-left: 15px;

    &:hover{
        background:  ${({theme}) => theme.primaryBlue};
    }

    :focus{
        border: none;
        outline: none;
    }

`

export const Title = styled(motion.h2)`
    font-size: 1.8rem;;
    color: ${({theme}) => theme.primaryRyde};
    text-transform: uppercase;
    margin: 10px 0;
    text-align: center;

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
    background: ${({theme}) => theme.primaryRyde};
    margin: 0 auto;
`
export const Bottombar = styled(motion.div)`
    width: 15%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};
    margin: 0 auto;
`

//print style magazine

export const ContainerPrint = styled("section")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 20px;
    justify-content: center;

    @media screen and (max-width: ${({theme}) => theme.tablet}){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Magazine = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    perspective: 1000px;
    cursor: pointer;

    .book{
        position: relative;
        width: 300px;
        height: 390px;
        box-shadow: 20px 20px 20px rgba(0,0,0,0.2);
        transform-style: preserve-3d;
        transition: 0.5s;

        @media screen and (max-width: ${({theme}) => theme.tablet}){
            width: 280px;
            height: 370px;
        }

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            width: 240px;
            height: 340px;
        }

        &:hover{
            transform: rotateY(35deg);
            box-shadow: 0px 20px 20px rgba(0,0,0,0.2);
        }

        &:active{
            transform: rotateY(180deg);
            box-shadow: 0px 20px 20px rgba(0,0,0,0.2);
        }

        &:before{
            content: '';
            position: absolute;
            width: 60px;
            height: 100%;
            transform-origin: left;
            background: url(${({side}) => side});
            background-position: center;
            transform: rotateY(90deg);
        }

        &:after{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            transform-origin: center;
            background: url(${({back}) => back});
            background-position: center;
            transform: rotateY(180deg) translateZ(60px);
        }

        .image{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

// calendar style

export const Affiche = styled("div")`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    .img-affiche{
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        font-size: 1.7rem;
        grid-template-columns: 1fr;
    }
`
//All realisations

export const AllStyle = styled("section")`
    width: 100%;

    h2{
        color: ${({theme}) => theme.primaryRyde};
        text-align: center;
        text-transform: uppercase;
        font-size: 1.6rem;
        margin-top: 15px;
    }

    .bloc-onglets{
        display: flex;
        justify-content: center;
        gap: 1px;
        transform: translateY(-20px);
        background-color: white;
        width: 65%;
        margin: 0 auto;
        cursor: pointer;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            width: 85%;
        }
        @media screen and (max-width: ${({theme}) => theme.mobile}){
            width: 100%;
        }

        .tabs{
            width: 25%;
            padding: 1rem;
            text-align: center;
            color: ${({theme}) => theme.primaryRyde};
            transition: all 0.5s ease-in-out;

            &:hover{
                background-color: rgba(4,135,217,0.1);
            }
        }
        .active-tabs{
            width: 25%;
            padding: 1rem;
            background-color: ${({theme}) => theme.primaryRyde};
            color: white;
            border: 1px solid ${({theme}) => theme.primaryRyde};
            text-align: center;
            font-weight: bold;
            transition: all 0.5s ease-in-out;

            &:hover{
                background-color: ${({theme}) => theme.primaryRyde} !important;
            }
        }
    }

    .contenu-onglets{

        .contenu{
            display: none;
        }
        .active-contenu{
            display: block;
        }
    }
`

export const Bar = styled("div")`
    width: 15%;
    height: 3px;
    background: ${({theme}) => theme.primaryRyde};
    margin-bottom: 25px;
    margin: 0 auto;
`

//Tout js
export const Containt = styled("div")`
    width: 100%;

    .top-el{
        display: grid;
        grid-template-columns: 60.7% 38.4%;
        grid-gap: 20px;

        @media screen and (max-width: ${({theme}) => theme.mobile}){
            grid-template-columns: repeat(1, 1fr);
        }

        video{
            width: 100%;
        }
        img{
            width: 100%;
        }
    }

    .sect1{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        gap: 20px;

        .img1{
            width: 25%;
        }
        .img2{
            width: 40%;
        }
        .img3{
            width: 25%;
        }
    }

    .sect2{
        display: grid;
        grid-template-columns: 20% 1fr 20%;
        grid-gap: 20px;
        height: 600px;

        @media screen and (max-width: ${({theme}) => theme.mobile}){
            grid-template-columns: repeat(1, 1fr);
        }

        .atm{
            width: 100%;
            height: 600px;

            @media screen and (max-width: ${({theme}) => theme.mobile}){
                display: none;
            }
        }
        .imgs{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            img{
                width: 100%;
                height: 290px;

                @media screen and (max-width: ${({theme}) => theme.mobile}){
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
    .sect3{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        padding: 0 3rem;

        @media screen and (max-width: ${({theme}) => theme.mobile}){
            grid-template-columns: repeat(1, 1fr);
        }

        img{
            width: 100%;
        }
    }
`