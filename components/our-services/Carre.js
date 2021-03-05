import React, {useEffect} from "react"

import {motion} from "framer-motion"
import Fade from "react-reveal/Fade"

import {SlimCard, BarSlim, SlimCardContainer } from "./our.services.style"
import { Container } from "reactstrap"

const Carre = ({data}) => {

    const pushPage = (e, link) => {
        e.preventDefault()
        if(typeof window !== "undefined"){
            window.location.href = `${link}`
        }
    }
    return (
        <Container>
            <SlimCardContainer>
                {data.map((element, i) => {
                    if(element.id === "3" || element.id === "4" || element.id === "5"){
                        return (
                            <Fade key={i}>
                            <SlimCard 
                                size={element.size}
                                background={element.background}
                                shadow={element.shadow}
                                sizeIcon={element.sizeIcon}
                                sizeP={element.sizeP}
                                width={element.widthBtn}
                                color={element.color}
                                colorP={element.colorP}
                                colorBtn={element.colorBtn}
                            >
                                <span>{element.icon}</span><br/>
                                <h2>{element.nameService}</h2>
                                <BarSlim/>
                                <p>{element.description}</p>
                                <motion.button 
                                    whileHover={{scale: 0.85}}
                                    type={"button"}
                                    className={"button-carre"} 
                                    onClick={(e) => pushPage(e, element.link)}
                                >
                                    En savoir +
                                </motion.button>
                            </SlimCard>
                            </Fade>
                        )
                    }
                })}
            </SlimCardContainer>
        </Container>
    )
}

export default Carre;