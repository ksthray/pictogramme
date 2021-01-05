import styled from "styled-components"

export const AboutSection = styled("section")`
    width: 100%;
    padding: 2rem 0;
`

export const CardGrid = styled("div")`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;

    @media screen and (max-width: ${({theme}) => theme.tablet}){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Card = styled("div")`
    width: 100%;
    height: 340px;
    background-image: url(${({bgImage}) => bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 50px;
    cursor: pointer;

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        height: 480px;
    }

    &:hover{
        .block{
            background-color: ${({theme}) => theme.primaryRyde};
            transform: translateY(-10px);
            color: white;
        }
    }

    .block{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: white;
        width: 85%;
        padding: 0.5rem;
        box-shadow: 0px 0px 13px 3px rgba(0,0,0,0.3);
        transform: translateY(30px);
        transition: all ease-in-out 0.5s;
        border-radius: 10px;

        h4{
            text-transform: uppercase;
            font-size: 1rem;
        }

        p{line-height: 1;}
    }

    .overlay{
        width: 100%;
        height: 340px;
        position: absolute;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,0.5522584033613445) 4%, rgba(0,0,0,0) 79%);    
    }
`