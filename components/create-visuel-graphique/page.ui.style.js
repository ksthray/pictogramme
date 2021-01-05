import styled from "styled-components"

export const ContainerUi = styled("section")`
    width: 100%;
    padding: 2rem 0;
`
export const Topbar = styled("div")`
    width: 20%;
    height: 3px;
    background: ${({theme}) => theme.primaryRyde};
    margin-bottom: 25px;
`

export const Left = styled("div")`
    display: flex;
    flex-direction: column;

    .images{
        display: flex; 
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: ${({theme}) => theme.mobile}){
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }

    h2{
        color: ${({theme}) => theme.primaryRyde};
        font-size: 1.6rem;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            font-size: 1.3rem;
        }
        @media screen and (max-width: ${({theme}) => theme.mobile}){
            font-size: 1.1rem;
        }
    }
    h4{
        color: ${({theme}) => theme.primaryRyde};
        font-size: 1.4rem;
        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            font-size: 1.15rem;
        }
    }

    .article{
        h3{
            font-size: 1.55rem;
            color: ${({theme}) => theme.primaryRyde};

            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                font-size: 1.25rem;
            }
        }

        p{
            font-size: 1rem;
            color: ${({theme}) => theme.primaryBlue};

            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                font-size: 0.9rem;
            }
        }
    }
`
export const ImageText = styled("div")`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        grid-template-columns: repeat(1, 1fr);
    }
`
