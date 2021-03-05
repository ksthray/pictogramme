import React, {useEffect} from "react"

import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {FaPhoneAlt} from "react-icons/fa"

import {titleAnimation, cupAnimation} from "../utils/functions"

import Link from "next/link";
import { Container } from "reactstrap";
import styled from "styled-components"

const InvitationStyle = styled("section")`
    width: 100%;
    /* height: 350px; */
    /* padding: 2.5rem 0; */
    /* background: rgb(2,73,117);
    background: linear-gradient(72deg, rgba(2,73,117,1) 8%, rgba(8,105,166,1) 91%); */
    /* background: rgb(217,20,128);
    background: linear-gradient(55deg, rgba(217,20,128,1) 0%, rgba(171,7,97,1) 69%); */
    background-image: url("/images/couvertureicones.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    /* clip-path: polygon(0 0, 100% 16%, 100% 100%, 0 100%); */

    @media screen and (max-width: ${({theme}) => theme.tabletMini}){
        flex-direction: column;
    }

    .overlay-invitation{
        width: 100%;
        height: 100%;
        background: rgb(0,0,0);
        background: linear-gradient(55deg, rgba(0,0,0,0.48783263305322133) 10%, rgba(0,0,0,0.8463760504201681) 81%);
        padding: 2.5rem 0
    }

    .container-all{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4rem 0;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            flex-direction: column;
        }
    }
    .message{
        z-index: 2;
        color: white;
        margin-right: 6rem;

        @media screen and (max-width: ${({theme}) => theme.tabletMini}){
            margin-right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-bottom: 3rem;
        }

        

        h2{
            font-size: 1.5rem;
            font-weight: 600;
            text-transform: uppercase;

            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                font-size: 1.2rem;
            }
            @media screen and (max-width: ${({theme}) => theme.mobile}){
                font-size: 1.1rem;
            }
        }
        p{
            font-size: 1.2rem;
            text-align: center;
            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                font-size: 1rem;
            }
            @media screen and (max-width: ${({theme}) => theme.mobile}){
                font-size: 0.95rem;
            }
        }
        .button{
            background-color: ${({theme}) => theme.primaryRyde};
            text-decoration: none;
            text-align: center;
            padding: 7px;
            color: white;
            font-weight: bold;
            border: none;
            border-radius: 20px;
            padding: 7px;
            transition: all ease-out 0.3s;

            &:hover{
                background-color: ${({theme}) => theme.primaryRydeHover};
            }

            :focus{
                border: none;
                outline: none;
            }
        }
    }

    .container-cup{
        z-index: 2;
        .plate{
            position: absolute;
            transform: translate(-28%, 30%);
            width: 350px;
            height: 150px;
            background: linear-gradient(to right, #f9f9f9, #e7e7e7);
            border-radius: 50%;
            box-shadow: 0 35px 35px rgba(0,0,0,0.2);

            &:before{
                content: "";
                position: absolute;
                top: 10px;
                left: 10px;
                right: 10px;
                bottom: 10px;
                border-radius: 50%;
                background: linear-gradient(to left, #f9f9f9, #e7e7e7);
            }
            &:after{
                content: "";
                position: absolute;
                top: 20px;
                left: 20px;
                right: 20px;
                bottom: 20px;
                background: radial-gradient(rgba(0,0,0,0.2), 25%, transparent, transparent);
                border-radius: 50%;
            }
        }

        .cup{
            position: relative;
            width: 150px;
            height: 160px;
            background: linear-gradient(to right, #f9f9f9, #d9d9d9);
            border-bottom-left-radius: 45%;
            border-bottom-right-radius: 45%;

            .top{
                position: absolute;
                top: -30px;
                left: 0;
                width: 100%;
                height: 60px;
                background: linear-gradient(to right, #f9f9f9, #d9d9d9);
                border-radius: 50%;

                .vapeur{
                    position: relative;
                    display: flex;
                    z-index: 3;
                    padding: 0 20px;
                    
                    span{
                        position: relative;
                        bottom: 50px;
                        display: block;
                        margin: 0 2px 50px;
                        min-width: 4px;
                        height: 80px;
                        background: white;
                        border-radius: 50%;
                        animation: animate 5s infinite;
                        opacity: 0;
                        filter: blur(8px);
                        animation-delay: calc(var(--i) * -0.5s);

                        @keyframes animate{
                            0%{
                                transform: translateY(0) scaleX(1);
                                opacity: 0;
                            }
                            15%{
                                opacity: 1;
                            }
                            50%{
                                transform: translateY(-150px) scaleX(5);
                            }
                            95%{
                                opacity: 0;
                            }
                            100%{
                                transform: translateY(-300) scaleX(10);
                            }
                        }
                    }
                }

                .circle{
                    position: absolute;
                    top: 5px;
                    left: 10px;
                    width: calc(100% - 20px);
                    height: 40px;
                    border-radius: 50%;
                    background: linear-gradient(to left, #f9f9f9, #d9d9d9); 
                    box-sizing: border-box;
                    overflow: hidden;

                    .tea{
                        position: absolute;
                        top: 20px;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(#c57e65, #e28462);
                        border-radius: 50%;

                    }
                }
            }
            .handle{
                position: absolute;
                right: -37px;
                top: 13px;
                width: 100px;
                height: 105px;
                border: 20px solid #dcdcdc;
                border-left: 25px solid transparent;
                border-bottom: 25px solid transparent;
                border-radius: 50%;
                transform: rotate(42deg);
            }
        }
    }
`

const Invitation = () => {
    const animation = useAnimation();
    const [refContent, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if(inView){
            animation.start("visible");
        }
    }, [animation, inView]);
    return (
        <InvitationStyle>
            <div className={"overlay-invitation"}>
                <Container>
                    <div className={"container-all"}>
                        <div className={"message"}>
                            <motion.h2
                                ref={refContent}
                                animate={animation}
                                initial="hidden"
                                variants={titleAnimation}
                            >
                                Vous avez un projet ?
                            </motion.h2>
                            <motion.p
                                ref={refContent}
                                animate={animation}
                                initial="hidden"
                                variants={titleAnimation}
                            >
                                Contactez-nous enfin d'en discuter autour d'un café chaud !
                            </motion.p><br/>
                            <motion.div
                                ref={refContent}
                                animate={animation}
                                initial="hidden"
                                variants={titleAnimation}
                            >
                                <Link href="tel:+243824029562">
                                    <a>
                                        <button className={"button"} type="button">
                                            <FaPhoneAlt/> +243817187048
                                        </button>
                                    </a>
                                </Link>
                            </motion.div>
                        </div>
                        <motion.div 
                            ref={refContent}
                            animate={animation}
                            initial="hidden"
                            variants={cupAnimation}
                            className={"container-cup"}
                        >
                            <div className={"plate"}/>
                            <div className={"cup"}>
                                <div className={"top"}>
                                    <div className={"vapeur"}>
                                        <span style={{"--i": "1"}} />
                                        <span style={{"--i": "8"}} />
                                        <span style={{"--i": "2"}} />
                                        <span style={{"--i": "6"}} />
                                        <span style={{"--i": "3"}} />
                                        <span style={{"--i": "10"}} />
                                        <span style={{"--i": "5"}} />
                                        <span style={{"--i": "7"}} />
                                        <span style={{"--i": "9"}} />
                                        <span style={{"--i": "4"}} />
                                        <span style={{"--i": "15"}} />
                                        <span style={{"--i": "11"}} />
                                        <span style={{"--i": "13"}} />
                                        <span style={{"--i": "12"}} />
                                        <span style={{"--i": "14"}} />
                                    </div>
                                    <div className={"circle"}>
                                        <div className={"tea"}/>
                                    </div>
                                </div>
                                <div className={"handle"}/>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </div>
        </InvitationStyle>
    )
}

export default Invitation;