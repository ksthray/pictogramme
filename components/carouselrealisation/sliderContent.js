import Fade from 'react-reveal/Fade';
// import {motion, AnimatePresence} from "framer-motion"

import styled from "styled-components"

import {sliderImages} from "./sliderImage"

// const Fade = keyframes`
//     from { opacity: 1.0; }
//     to { opacity: 0.0; }
// `

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

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            height: 300px;
        }
        @media screen and (max-width: ${({theme}) => theme.mobile}){
            height: 250px;
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
                <div key={index} className={index === props.activeIndex ? "slides active" : "inactive"}>
                    <Fade >
                        <img className={"slide-image"} src={slide.image} alt={slide.alt}/>
                    </Fade>
                    {/* <AnimatePresence custom={slide} initial={false}>
                    <motion.img
                        className={"slide-image"} 
                        src={slide.image} 
                        alt={slide.alt}
                        custom={slide}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{opacity: {duration: 1}}}
                    />
                    </AnimatePresence> */}
                </div>
            ))}
        </SectionStyle>
    )
}

export default SliderContent;