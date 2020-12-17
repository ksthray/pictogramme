import styled from "styled-components"

export const SectionStyle = styled("section")`
    width: 100%;
`

export const Title = styled("h2")`
    font-size: 2.5rem;
    color: ${({theme}) => theme.primaryRyde};
    text-transform: uppercase;
    margin: 10px 0;
    text-align: center;
`
export const Topbar = styled("div")`
    width: 5%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};
    margin: 0 auto;
`
export const Bottombar = styled("div")`
    width: 15%;
    height: 4px;
    background: ${({theme}) => theme.primaryRyde};
    margin: 0 auto;
`