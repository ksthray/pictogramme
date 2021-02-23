import Fade from 'react-reveal/Fade';

import styled from "styled-components"

import {sliderImages} from "./sliderImage"

const SectionStyle = styled("section")`
    width: 100%;

    .slides{
        width: 100%;
        height: 450px;
        position: relative;

        .active{
            display: inline-block;
        }

        .inactive{
            display: none;
        }
    }
    .slide-image{
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
    }
`

const SliderContent = (props) => {
    return (
        <SectionStyle>
            {sliderImages.map((slide, index) => (
                <div className={index === props.activeIndex ? "slides active" : "inactive"}>
                    <Fade>
                        <img className={"slide-image"} src={slide.image} alt={slide.alt}/>
                    </Fade>
                </div>
            ))}
        </SectionStyle>
    )
}

export default SliderContent;