import React, { useState, useEffect } from 'react';

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
        background-color: ${({bgColor}) => bgColor ? "white" : "transparent"};
        box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.1);

        transition: background 0.5s;
    }

    .navbar-brand{
        color: ${({theme}) => theme.primaryRyde};
    }
    .nav-link{
        transition: all ease-in-out 0.3s;

        &:hover{
            color: ${({theme}) => theme.primaryRyde};
        }
    }

`

const Button = styled("button")`
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.primaryRyde};
    color: ${({theme}) => theme.primaryRyde};
    font-weight: bold;
    border-radius: 20px;
    padding: 5px 8px;
    transition: all ease-out 0.3s;
    margin-left: 15px;

    &:hover{
        background-color: ${({theme}) => theme.primaryRyde};
        color: white;
    }

    :focus{
        border: none;
        outline: none;
    }

`

const Header = () => {
    const [change, setChange] = useState({
        background: "transparent",
        boxShadow: "",
        transition: "background 0.6s",
    });

    const [changeNavItem, setChangeNavItem] = useState({
        color: "white"
    })

    const changeNav =  () => {
        const isChange = window.scrollY < 150;
        if(isChange !== true){
            setChangeNavItem({
                color: "#D91480"
            })
            setChange({
                background: "#fff",
                boxShadow: "5px 5px 10px rgba(0,0,0,0.2)",
                transition: "background 0.6s",
            });
        } else {
            setChangeNavItem({
                color: "white"
            })
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
            <Navbar style={change} fixed="top" expand="md">
            <div className="container">
                <NavbarBrand href="/">Pictogramme</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem id="demo">
                        <NavLink style={changeNavItem} href="/">L'agence</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={changeNavItem} href="/apropos">Nos services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={changeNavItem} href="/contact">Nos réalisations</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={changeNavItem} href="/horaires">A propos</NavLink>
                    </NavItem>
                    <NavItem>
                        <Button>
                            +234824029562
                        </Button>
                    </NavItem>
                </Nav>
                </Collapse>
            </div>
            </Navbar>
        </HeaderStyle>
    )
}

export default Header;