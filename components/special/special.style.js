import styled from "styled-components"

export const Containt = styled("section")`
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 2.5rem;
    background-color: #f0f0f0;

    h2{
        font-size: 1.8rem;
        color: ${({theme}) => theme.primaryRyde};
        text-transform: uppercase;
        margin: 10px 0;
        text-align: center;
    }
    p{
        font-size: 1.2rem;
        color: ${({theme}) => theme.primaryRyde};
        text-transform: uppercase;
        margin: 10px 0;
        text-align: center;
    }
`
export const BarSlim = styled("div")`
    width: 15%;
    height: 3px;
    background: white;
    margin: 0 auto;
    margin-bottom: 20px;
    background-color: ${({theme}) => theme.primaryRyde};
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