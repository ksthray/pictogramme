import styled from "styled-components"

export const MarketingStyle = styled("section")`
    width: 100%; 
    padding: 2rem 0;

    h2{
        font-size: 1.6rem;
        color: ${({theme}) => theme.primaryRyde};
        margin-bottom: 20px;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            font-size: 1.3rem;
        }
    }
    p{
        font-size: 1.1rem; 
        color: ${({theme}) => theme.primaryBlue};

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            font-size: 0.95rem;
        }
    }
`

export const Left = styled("div")`
    display: flex;
    flex-direction: column;

    .container-block{
        h3{
            font-size: 1.4rem;
            color: ${({theme}) => theme.primaryRyde};
            margin: 2rem 0;

            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                font-size: 1.2rem;
            }
        }
        li{
            background-color: red;
            padding: 7px;
        }
    }

    .digital-marketing{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: ${({theme}) => theme.mobile}){
            grid-template-columns: repeat(1, 1fr);
        }
        .service{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 60px;
            padding: 1rem 10px;
            background-color: ${({theme}) => theme.primaryRyde};
            color: white;
            border-radius: 20px;
            text-align: center;
            box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.2);
        }
    }

`
export const Topbar = styled("div")`
    width: 20%;
    height: 3px;
    background: ${({theme}) => theme.primaryRyde};
    margin-bottom: 25px;
`

export const ImageText = styled("div")`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        grid-template-columns: repeat(1, 1fr);
    }
`
