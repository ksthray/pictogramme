import styled from "styled-components"

const ArrowStyle = styled("div")`
    .prev, .next{
        cursor: pointer;
        z-index: 999;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 1rem;
        margin-top: -3rem;
        font-size: 30px;
        font-weight: bold;
        border-radius: 0 5px 5px 0;

        &:hover{
            color: white;
            background-color: rgba(0,0,0,0.6);
            transition: all 0.5s ease-in;
        }
    }
    .next{
        right: 0;
        border-radius: 5px 0 0 5px;
    }
`

const Arrows = (props) => {
    return (
        <ArrowStyle>
            <span className={"prev"} onClick={props.prevSlide}>&#10094;</span>
            <span className={"next"} onClick={props.nextSlide}>&#10095;</span>
        </ArrowStyle>
    )
}

export default Arrows;