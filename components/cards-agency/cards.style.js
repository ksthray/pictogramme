import styled from "styled-components"

export const SectionStyle = styled("section")`
    width: 100%;
`

export const Title = styled("h2")`
    font-size: 2.5rem;
    color: ${({theme}) => theme.primaryRyde};
    text-transform: uppercase;
    margin: 10px 0;
    text-align: center;
`
export const P = styled("p")`
    font-size: 1.4rem;
    color: ${({theme}) => theme.primaryBlue};
    margin: 20px 0;
    text-align: center;
`
export const Topbar = styled("div")`
    width: 5%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};
    margin: 0 auto;
`
export const Bottombar = styled("div")`
    width: 15%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};
    margin: 0 auto;
`

export const Cards = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .image1{
        box-shadow: -8px 10px 15px -4px rgba(0,0,0,0.10);
    }
    .p1{
        font-size: 1.1rem;
        color: ${({theme}) => theme.primaryRyde};
        margin-top: 15px;
        text-align: left;
        font-weight: bold;
    }
    .image2{
        box-shadow: 0px 0px 15px 8px rgba(0,0,0,0.10);
    }
    .p2{
        font-size: 1.1rem;
        color: ${({theme}) => theme.primaryRyde};
        margin-top: 15px;
        text-align: center;
        font-weight: bold;
    }
    .image3{
        box-shadow: 9px 10px 15px -4px rgba(0,0,0,0.10);
    }
    .p3{
        font-size: 1.1rem;
        color: ${({theme}) => theme.primaryRyde};
        margin-top: 15px;
        text-align: right;
        font-weight: bold;
    }
`
