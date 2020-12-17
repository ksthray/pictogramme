import styled from "styled-components"

export const SectionStyle = styled("section")`
    width: 100%;
    background: rgb(232,34,143);
    background: linear-gradient(156deg, rgba(232,34,143,1) 0%, rgba(217,20,128,1) 35%, rgba(136,1,75,1) 100%);
`

export const Title = styled("h2")`
    font-size: 2.5rem;
    color: white;
    text-transform: uppercase;
    margin: 10px 0;
    text-align: center;
`
export const Topbar = styled("div")`
    width: 5%;
    height: 4px;
    background: white;
    margin: 0 auto;
`
export const Bottombar = styled("div")`
    width: 15%;
    height: 4px;
    background: white;
    margin: 0 auto;
`
export const BottombarCard = styled("div")`
    width: 45%;
    height: 2.5px;
    background: ${({theme}) => theme.primaryBlue};
    margin-bottom: 15px;
`

export const ContainerCards = styled("div")`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
`

export const Cards = styled("div")`
    background-image: url(${({background}) => background});
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    width: 350px;
    height: 270px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.4);
    margin-bottom: 10px;

    .overlay{
        position: absolute;
        width: 350px;
        height: 270px;
        z-index: 1;
        background-color: rgba(0,0,0,0.6);
        border-radius: 15px;
    }

    .all-content{
        width: 100%;
        position: relative;
        padding: 1rem;
        z-index: 2;
        color: white;

        h3{
            text-transform: uppercase;
        }
        p{
            line-height: 1;
        }

        .container-button{
            display: flex;
            justify-content: center;
            z-index: 3;
            margin-top: 30px;
            button{
                width: 200px;
                border-radius: 20px;
                padding: 7px;
                background-color: white;
                color: ${({theme}) => theme.primaryRyde};
                border: none;
                box-shadow: -1px 1px 15px 5px rgba(0,0,0,0.4);
                transition: 0.3s all ease-in-out;
                font-weight: bold;

                :focus{
                    border: none;
                    outline: none;
                }

                &:hover{
                    background-color: ${({theme}) => theme.primaryRyde};
                    color: white;
                }
            }
        }
    }

    
`