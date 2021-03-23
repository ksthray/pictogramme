import styled from "styled-components"

export const Containt = styled("section")`
    width: 100%;

    h2{
        font-size: 1.4rem;
        color: ${({theme}) => theme.primaryRyde};
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
    }
    .p{
        font-size: 1.2rem;
        color: ${({theme}) => theme.primaryRyde};
        text-align: center;
        text-transform: uppercase;
    }

    .container-souhait{
        width: 100%;
        padding: 2rem 0;

        h3{
            font-size: 1.3rem;
            font-weight: 650;
        }

        .card-main{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 30px;
            justify-content: center;

            @media screen and (max-width: ${({theme}) => theme.tablet}){
                grid-template-columns: repeat(3, 1fr);
            }
            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                grid-template-columns: repeat(2, 1fr);
            }
            @media screen and (max-width: ${({theme}) => theme.mobile}){
                grid-template-columns: repeat(1, 1fr);
            }

            .card-souhait{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 100%;
                border-radius: 20px;
                color: ${({theme}) => theme.white};
                background: ${({theme}) => theme.primaryRyde};
                padding: 2rem;
                text-align: center;

                span{
                    font-size: 3rem;
                    margin-bottom: 2rem;
                }
                p{
                    font-size: 1rem;
                }

                @media screen and (max-width: ${({theme}) => theme.mobile}){
                    width: 100%;
                }
            }
        }
    }

    .steps-container{
        width: 100%;

        .steps{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 30px;
            width: 100%;

            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                grid-template-columns: repeat(1, 1fr);
            }

            strong{
                font-size: 4rem;
                font-weight: bold;
                color: ${({theme}) => theme.primaryRyde};
            }

            .contenu{

                h3{
                    font-size: 1.4rem;
                    font-weight: bold;
                    color: ${({theme}) => theme.primaryRyde};
                    text-transform: uppercase;
                }
                p{
                    font-size: 1rem;
                }
            }

            .step1-text{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
            }
        }
    }
`

export const BarSlim = styled("div")`
    width: 10%;
    height: 3px;
    background: white;
    margin: 0 auto;
    margin-bottom: 20px;
    background-color: ${({theme}) => theme.primaryRyde};
`
export const Bar = styled("div")`
    width: 60px;
    height: 2px;
    margin-bottom: 20px;
    background-color: ${({theme}) => theme.primaryRyde};
`

export const LottieStyle = styled("div")`
    width: 100%;
`