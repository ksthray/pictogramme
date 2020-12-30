import styled from "styled-components"

export const PrintStyle = styled("section")`
    width: 100%;
    padding: 2rem 0;
`
export const Topbar = styled("div")`
    width: 15%;
    height: 3px;
    background: ${({theme}) => theme.primaryRyde};
    margin-bottom: 25px;
    margin-top: 25px;
    margin: 0 auto;
`

export const Left = styled("div")`
    display: flex;
    flex-direction: column;

    h2{
        font-size: 1.6rem;
        color: ${({theme}) => theme.primaryRyde};
    }
    p{
        font-size: 1.2rem;
        color: ${({theme}) => theme.primaryBlue};
    }

    h3{
        font-size: 1.4rem;
        color: ${({theme}) => theme.primaryRyde};
        text-align: center;
    }
`

export const Grid = styled("div")`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .element{
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;

        h5{
            color: ${({theme}) => theme.primaryRyde};
            text-transform: uppercase;
            font-size: 1.1rem;
        }
        
    }
    
`

export const ImageText = styled("div")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
`
