import styled from "styled-components"

export const PrintStyle = styled("section")`
    width: 100%;
    padding: 2rem 0;

    .main-print{
        display: grid;
        grid-template-columns: 30% 70%;
        grid-gap: 20px;

        img{
            width: 100%;
        }

        .texts{
            
            h2{
                font-size: 1.6rem;
                color: ${({theme}) => theme.primaryRyde};
                font-weight: 500;
            }
            p{
                font-size: 1rem;
                color: ${({theme}) => theme.primaryBlack};
            }
            .imprimentes{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 10px;

                img{
                    width: 100%;
                }
            }
        }
    }
    .prestations{
        h3{
            font-size: 1.6rem;
            color: ${({theme}) => theme.primaryRyde};;
            font-weight: 500;
            text-align: center;
        }

        .grid-prest{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr;
            grid-gap: 20px;

            h4{
                font-size: 1.1rem;
                color: ${({theme}) => theme.primaryBlack};
                text-transform: uppercase;
                text-align: center;
                margin-bottom: 10px;
            }

            img{
                width: 100%;
            }
        }
    }
`
export const Topbar = styled("div")`
    width: 15%;
    height: 3px;
    background: ${({theme}) => theme.primaryRyde};
    margin-bottom: 25px;
    margin-top: 25px;
    margin: 0 auto;
`
export const TopPrint = styled("div")`
    width: 10%;
    height: 3px;
    background: ${({theme}) => theme.primaryRyde};
    margin-bottom: 20px;
`
