import styled from "styled-components"

export const SectionStyle = styled("section")`
    width: 100%;
`

export const Title = styled("p")`
    font-size: 1.6rem;
    color: ${({theme}) => theme.primaryRyde};
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

export const LogoContainer = styled("div")`
    display: flex;
    justify-content: space-around;
`