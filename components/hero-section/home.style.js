import styled from "styled-components"

export const BgWrap = styled("div")`
    width: 100%;
    height: 100vh;
    z-index: 1;

    div{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
    }
`
export const Button = styled("button")`
    background-color: ${({theme}) => theme.primaryRyde};
    width: 180px;
    height: 40px;
    border: none;
    border-radius: 20px;
    color: white;
    margin-top: 20px;

    :focus{
        border: none;
        outline: none;
    }
` 
export const Contains = styled("div")`
    position: absolute;
    z-index: 4;
    color: white;
    width: 70%;
    height: 100vh;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        text-transform: uppercase;
        color: ${({theme}) => theme.primaryRyde};
        font-size: 1.5rem;
        text-align: center;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            font-size: 1.3rem;
        }
        @media screen and (max-width: ${({theme}) => theme.mobile}){
            font-size: 1.1rem;
        }
    }
    h2{
        text-transform: uppercase;
        color: ${({theme}) => theme.primaryRyde};
        font-size: 1.4rem;
        text-align: center;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            font-size: 1.1rem;
        }
        @media screen and (max-width: ${({theme}) => theme.mobile}){
            font-size: 1rem;
        }
    }
    p{
        font-size: 1.7rem;
        color: white;
        text-transform: uppercase;
        text-align: center;
        margin-top: 20px;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            font-size: 1.45rem;
        }
        @media screen and (max-width: ${({theme}) => theme.mobile}){
            font-size: 1.1rem;
        }
    }
    span{
        font-size: 1rem; 
        margin: 2rem 0;
        text-align: center;
        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            font-size: 0.95rem;
        }
        @media screen and (max-width: ${({theme}) => theme.mobile}){
            font-size: 0.8rem;
        }
    }

    .button{
        width: 200px;
        border-radius: 20px;
        text-align: center;
        text-decoration: none;
        padding: 8px;
        background-color: ${({theme}) => theme.primaryRyde};
        color: white;
        border: none;
        transition: 0.3s all ease-in-out;
        font-weight: 500;
        font-size: 0.9rem;
        text-transform: uppercase;

        :focus{
            border: none;
            outline: none;
        }

        &:hover{
            background-color: ${({theme}) => theme.primaryRydeHover};
            color: white;
        }
    }
`
