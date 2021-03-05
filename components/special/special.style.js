import styled from "styled-components"

export const Containt = styled("section")`
    width: 100%;
    padding: 1.5rem;
    background: rgb(4,135,217);
    background: linear-gradient(95deg, rgba(4,135,217,1) 0%, rgba(2,73,134,1) 100%);
`
export const BarSlim = styled("div")`
    width: 15%;
    height: 3px;
    background: white;
    margin: 0 auto;
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
    flex-direction: column;

    h2{
        font-size: 1.3rem;
        color: ${({theme}) => theme.white};
        text-transform: uppercase;
        text-align: center;

        @media screen and (max-width: ${({theme}) => theme.mobile}){
            font-size: 1.1rem;
        }
    }
    p{
        font-size: 1rem;
        color: ${({theme}) => theme.white};
        text-align: center;
    }
    span{
        margin-top: 10px;
        font-size: 1rem;
        color: ${({theme}) => theme.white};
        text-align: center;
    }

    .visuels{
        width: 90%;
        margin: 0 auto;
        
        .visuel{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .images{
                width: 95%;
                display: flex; 
                margin: 0 auto;
            }
        }
    }

    .follow{
        display: flex;
        justify-content: center;
        gap: 20px;
        width: 100%;

        a{
            font-size: 2rem;
            color: white;
            transition: color 0.3s ease-in;

            &:hover{
                color: rgba(4,135,217,0.8);
            }
        }

    }
    
`