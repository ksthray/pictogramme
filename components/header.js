import React, { useState, useEffect } from 'react';
import Link from "next/link"
import Img from "next/image"
import {motion} from "framer-motion"
import {FaPhoneAlt} from "react-icons/fa"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

import styled from 'styled-components';

const HeaderStyle = styled("header")`
    width: 100%;
    
    .navbar{
        width: 100%;
        transition: background 0.5s;
    }
    .navbar-toggler-icon {
        background-image: url("/svg/icons8-menu.svg");
    }
    .navbar-brand{
        color: ${({theme}) => theme.primaryRyde};
    }
    .nav-link{
        color: white;
        font-weight: 400;
        transition: all ease-in-out 0.3s;

        &:hover{
            color: ${({theme}) => theme.primaryRyde};
        }
    }

    .main-btn{
        position: relative;
        top: 8px;
    }

    .button{
            text-decoration: none;
            background-color: transparent;
            border: 2px solid ${({theme}) => theme.primaryRyde};
            color: ${({theme}) => theme.primaryRyde};
            font-weight: bold;
            border-radius: 20px;
            padding: 5px 8px;
            transition: all ease-out 0.3s;
            margin-left: 15px;
            transition: all ease-out 0.3s;
            position: relative;
            top: -5px;

            @media screen and (max-width: ${({theme}) => theme.tabletMini}){
                margin-left: 0;
            }

            &:hover{
                background-color: ${({theme}) => theme.primaryRyde};
                color: white;
            }

            :focus{
                border: 2px solid ${({theme}) => theme.primaryRyde};
                outline: none;
            }
    }

`
const Header = () => {
    const [change, setChange] = useState({
        background: "transparent",
        boxShadow: "",
        transition: "background 0.6s",
    });

    const changeNav =  () => {
        const isChange = window.scrollY < 150;
        if(isChange !== true){
            setChange({
                background: "#000",
                boxShadow: "0px 10px 15px -2px rgba(0,0,0,0.1)",
                transition: "background 0.6s",
            });
        } else {
            setChange({
                background: "transparent",
                boxShadow: "",
                transition: "background 0.6s",
            });
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
        return () => {
            window.removeEventListener("scroll", changeNav)
        }
    }, [])


    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <HeaderStyle>
            <Navbar style={change} fixed="top" expand="lg">
                <div className="container">
                    <NavbarBrand href="/">
                        <motion.span
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1, duration: 1.3}}
                        >
                            <Img
                                src={"/images/logopicto.png"}
                                alt={"logo du site"}
                                width={170}
                                height={60}
                                layout={"intrinsic"}
                                quality={100}
                            />
                        </motion.span>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem id="demo">
                            <NavLink href="/">
                                <motion.span
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 1.1, duration: 1.4}}
                                >
                                    L'agence
                                </motion.span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/services">
                                <motion.span
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 1.1, duration: 1.5}}
                                >
                                    Services
                                </motion.span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/realisations">
                                <motion.span
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 1.1, duration: 1.6}}
                                >
                                    Nos réalisations
                                </motion.span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/apropos">
                                <motion.span
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 1.1, duration: 1.7}}
                                >
                                    A propos
                                </motion.span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">
                            <   motion.span
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 1.1, duration: 1.8}}
                                >
                                    Contact
                                </motion.span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 1.1, duration: 1.8}}
                                className={"main-btn"}
                            >
                                <Link href="tel:+243824029562">
                                    <a>
                                        <button className={"button"}>
                                            <FaPhoneAlt/> +243824029562
                                        </button>
                                    </a>
                                </Link>
                            </motion.div>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </HeaderStyle>
    )
}

export default Header;