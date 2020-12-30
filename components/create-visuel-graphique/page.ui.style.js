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
    }

    h2{
        color: ${({theme}) => theme.primaryRyde};
        font-size: 1.6rem;
    }
    h4{
        color: ${({theme}) => theme.primaryRyde};
        font-size: 1.4rem;
    }

    .article{
        h3{
            font-size: 1.6rem;
            color: ${({theme}) => theme.primaryRyde};
        }

        p{
            font-size: 1rem;
            color: ${({theme}) => theme.primaryBlue};
        }
    }
`
export const ImageText = styled("div")`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`
