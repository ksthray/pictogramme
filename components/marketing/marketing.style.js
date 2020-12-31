import styled from "styled-components"

export const MarketingStyle = styled("section")`
    width: 100%;
    padding: 2rem 0;

    h2{
        font-size: 1.6rem;
        color: ${({theme}) => theme.primaryRyde};
        margin-bottom: 20px;
    }
    p{
        font-size: 1.1rem; 
        color: ${({theme}) => theme.primaryBlue};
    }
`

export const Left = styled("div")`
    display: flex;
    flex-direction: column;

    .container-block{
        h3{
            font-size: 1.4rem;
            color: ${({theme}) => theme.primaryRyde};
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
`
