import styled from "styled-components"

export const ContainerUi = styled("section")`
    width: 100%;
    padding: 2rem 0;

    .block1{
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 20px;

        @media screen and (max-width: ${({theme}) => theme.tablet}){
            grid-template-columns: repeat(1, 1fr);
        }
        /* @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: ${({theme}) => theme.mobile}){
            grid-template-columns: repeat(1, 1fr);
        } */

        .image{
            width: 100%;
            background-image: url("/images/carte-de-voeux.jpg");
            background-position: center;
            background-size: cover;
            display: flex;
            justify-content: flex-end;

            img{
                width: 260px;
                transform: translate(25px, 60px);
                box-shadow: 10px 10px 10px rgba(0,0,0,0.1);

                @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                    width: 220px;                
                    transform: translate(25px, 20px);
                } 

                @media screen and (max-width: ${({theme}) => theme.mobile}){
                    width: 200px;                
                    transform: translate(25px, 10px);
                } 
            }
        }
        .texts{
            padding-left: 30px;

            @media screen and (max-width: ${({theme}) => theme.tablet}){
                padding-left: 0;
            }

            h2{
                font-size: 1.3rem;
                color: ${({theme}) => theme.primaryRyde};
                font-weight: 500;
            }
            p{
                font-size: 1rem;
                color: ${({theme}) => theme.primaryBlack};
            }
        }
    }

    .article{
        text-align: left;
        padding-top: 2rem;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            padding-top: 10px;
        }

        p{
            margin-bottom: 10px;
        }
    }

    .logo{
        width: 100%;

        .grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;

            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                grid-template-columns: repeat(1, 1fr);
            }

            h3{
                font-size: 1.3rem;
                color: ${({theme}) => theme.primaryRyde};
                font-weight: 500;
            }
            p{
                font-size: 1rem;
                color: ${({theme}) => theme.primaryBlack};
            }

            .leslogo{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: 1fr;
                grid-gap: 10px;
                width: 100%;

                img{
                    width: 170px;
                }
            }
        }
    }

    .mise-en-page{
        width: 100%;

        .grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;

            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                grid-template-columns: repeat(1, 1fr);
            }

            h3{
                font-size: 1.3rem;
                color: ${({theme}) => theme.primaryRyde};
                font-weight: 500;
            }
            p{
                font-size: 1rem;
                color: ${({theme}) => theme.primaryBlack};
            }
            .img{
                width: 100%;
                img{
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
    .charte{
        width: 100%;

        .grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;

            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                grid-template-columns: repeat(1, 1fr);
            }

            h3{
                font-size: 1.3rem;
                color: ${({theme}) => theme.primaryRyde};
                font-weight: 500;
            }
            p{
                font-size: 1rem;
                color: ${({theme}) => theme.primaryBlack};
            }
            .img{
                width: 100%;
                img{
                    width: 100%;
                    height: 350px;
                }
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

