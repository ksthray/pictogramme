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
    }
    h2{
        text-transform: uppercase;
        color: ${({theme}) => theme.primaryRyde};
        font-size: 1.4rem;
    }
    p{
        font-size: 1.7rem;
        color: white;
        text-transform: uppercase;
        text-align: center;
        margin-top: 20px;
    }
    span{
        font-size: 1rem;
        margin-top: 20px;
    }
`
