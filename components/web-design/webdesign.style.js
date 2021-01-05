import styled from "styled-components"

export const WebdesignStyle = styled("section")`
    width: 100%;
    padding: 2rem 0;

    h2{
        font-size: 1.6rem;
        color: ${({theme}) => theme.primaryRyde};
    }
    p{
        font-size: 1.1rem; 
        color: ${({theme}) => theme.primaryBlue};
    }
`

export const Left = styled("div")`
    display: flex;
    flex-direction: column;

    

    .block-1{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-gap: 20px;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .block-2{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        margin: 2rem 0;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            grid-template-columns: repeat(1, 1fr);
        }

        .image{
            display: flex;
            justify-content: center;
            align-items: center;

            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                justify-content: flex-start;
            }
        }
    }

`
export const Topbar = styled("div")`
    width: 20%;
    height: 3px;
    background: ${({theme}) => theme.primaryRyde};
    margin-bottom: 25px;
`

export const TopbarCenter = styled("div")`
    width: 20%;
    height: 3px;
    background: white;
    margin-bottom: 25px;
    margin: 0 auto;
`

export const Outils = styled("div")`
    width: 100%;
    background: rgb(217,20,128);
    background: linear-gradient(56deg, rgba(217,20,128,1) 4%, rgba(185,0,101,1) 79%);
    padding: 2rem;

    h3{
        text-align: center; 
        font-size: 1.3rem;
        color: white;
    }

    .icons{
        display: flex;
        justify-content: space-around;
        align-items: center;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            flex-wrap: wrap;

            .container-img{
                margin-bottom: 10px;
            }
        }
        @media screen and (max-width: ${({theme}) => theme.mobile}){
            flex-direction: column;
        }
    }
`
