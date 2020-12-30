import styled from "styled-components"

export const SectionStyle = styled("section")`
    width: 100%;
    .button-main{
        padding: 2rem;
        display: flex;
        justify-content: center;
    }
`
export const Button = styled("button")`
    width: 200px;
    background-color: ${({theme}) => theme.primaryRyde};
    color: white;
    border: none;
    font-weight: bold;
    border-radius: 20px;
    padding: 8px 8px;
    transition: all ease-out 0.3s;
    margin-left: 15px;

    &:hover{
        background:  ${({theme}) => theme.primaryRydeHover};
    }

    :focus{
        border: none;
        outline: none;
    }

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

//print style magazine

export const ContainerPrint = styled("div")`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
`

export const Magazine = styled("section")`
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    perspective: 1000px;
    cursor: pointer;

    .book{
        position: relative;
        width: 300px;
        height: 390px;
        box-shadow: 20px 20px 20px rgba(0,0,0,0.2);
        transform-style: preserve-3d;
        transition: 0.5s;

        &:hover{
            transform: rotateY(35deg);
            box-shadow: 0px 20px 20px rgba(0,0,0,0.2);
        }

        &:active{
            transform: rotateY(180deg);
            box-shadow: 0px 20px 20px rgba(0,0,0,0.2);
        }

        &:before{
            content: '';
            position: absolute;
            width: 60px;
            height: 100%;
            transform-origin: left;
            background: url(${({side}) => side});
            background-position: center;
            transform: rotateY(90deg);
        }

        &:after{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            transform-origin: center;
            background: url(${({back}) => back});
            background-position: center;
            transform: rotateY(180deg) translateZ(60px);
        }

        .image{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

// calendar style

export const Affiche = styled("div")`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    .affiche{
        width: 120px;
        height: 210px;
    }
`

//flyer et depliants

export const Flyer = styled("div")`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

`

//All realisations

export const AllStyle = styled("section")`
    width: 100%;

    h2{
        color: ${({theme}) => theme.primaryRyde};
        text-align: center;
        text-transform: uppercase;
        font-size: 1.6rem;
    }
`

export const Bar = styled("div")`
    width: 15%;
    height: 3px;
    background: ${({theme}) => theme.primaryRyde};
    margin-bottom: 25px;
    margin: 0 auto;
`