import React, {useState} from "react"

import styled from "styled-components"

import SliderContent from "./sliderContent"
import Arrows from "./arrows"
import {sliderImages} from "./sliderImage"

const SliderStyle = styled("div")`
    width: 100%;
    height: 450px;
    position: relative;
    margin: auto;
    overflow: hidden;
`

const len = sliderImages.length - 1

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <SliderStyle>
            <SliderContent activeIndex={activeIndex}  />
            <Arrows 
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex -1)}
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex +1)}
            />
        </SliderStyle>
    )
}

export default Slider;