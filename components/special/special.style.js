import styled from "styled-components"

export const Containt = styled("section")`
    width: 100%;
    padding: 1rem;
    background: rgb(4,135,217);
    background: linear-gradient(95deg, rgba(4,135,217,1) 0%, rgba(2,73,134,1) 100%);
`
export const BarSlim = styled("div")`
    width: 15%;
    height: 3px;
    background: white;
    margin-bottom: 20px;
    background-color: ${({theme}) => theme.white};

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        margin: 0 auto;
        margin-bottom: 20px;
    }
`

export const ContainerVisuels = styled("div")`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        
    }

    .ctnt{
        width: 31%;
        @media screen and (max-width: ${({theme}) => theme.mobile}){
            width: 100%;
        }
        .visuel{
            width: 100%;

            .images{
                width: 350px;
                @media screen and (max-width: ${({theme}) => theme.mobile}){
                    width: 100%;
                }
            }
        }
    }


    .comm{
        width: 40%;
        margin-left: 20px;

        @media screen and (max-width: ${({theme}) => theme.mobile}){
            width: 100%;
            margin: 0;
            text-align: center;
        }

        h2{
            font-size: 1.3rem;
            color: ${({theme}) => theme.white};
            text-transform: uppercase;
        }

        p{
            font-size: 1rem;
            color: ${({theme}) => theme.white};
        }
        span{
            font-size: 1rem;
            color: white;
            text-transform: uppercase;
        }

        .socials{
            display: flex;
            gap: 20px;
            color: white;
            font-size: 2rem;

            @media screen and (max-width: ${({theme}) => theme.mobile}){
                justify-content: center;
            }

            a{
                transition: color 0.3s ease-out;
                &:hover{
                    color: ${({theme}) => theme.secondaryBlue};
                }
            }
        }
    }
`

export const CountDownStyle = styled("div")`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;

    .countdown-item {
        color: ${({theme}) => theme.primaryRyde};
        font-size: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        line-height: 30px;
        margin: 10px;
        padding-top: 10px;
        position: relative;
        width: 100px;
        height: 100px;

        span {
            color: ${({theme}) => theme.primaryRyde};
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
        }
    }
`

export const SVG = styled("svg")`
    position: absolute;
	top: 0;
	left: 0;
	width: 100px;
	height: 100px;
`