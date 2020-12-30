import styled from "styled-components"

export const SitewebStyle = styled("section")`
    width: 100%;
    padding: 2rem 0;

    h2{
        font-size: 1.6rem;
        color: ${({theme}) => theme.primaryRyde};
    }
`

export const Left = styled("div")`
    display: flex;
    flex-direction: column;

    .pwa{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background: rgb(217,20,128);
        background: linear-gradient(56deg, rgba(217,20,128,1) 4%, rgba(185,0,101,1) 79%);
        color: white;
        padding: 1rem 0;
        border-radius: 20px;

        p{
            font-size: 1.1rem;
        }

        h3{
            color: white;
            font-size: 1.2rem; 
            text-transform: uppercase;
            text-align: center;
        }
    }

    .container-block{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

        .site-vitrine{
            h3{
                color: ${({theme}) => theme.primaryRyde};
                font-size: 1.4rem; 
                text-transform: uppercase;
            }

            p{
                color: ${({theme}) => theme.primaryBlue};
                font-size: 1.1rem;
                margin-bottom: 15px;
            }
            li{
                padding: 7px;
            }
        }
        .site-ecom{
            h3{
                color: ${({theme}) => theme.primaryRyde};
                font-size: 1.4rem; 
                text-transform: uppercase;
            }

            p{
                color: ${({theme}) => theme.primaryBlue};
                font-size: 1.1rem;
                margin-bottom: 15px;
            }
            li{
                padding: 7px;
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
    margin: 0 auto;
    margin-bottom: 25px;
`

export const ImageText = styled("div")`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
`
