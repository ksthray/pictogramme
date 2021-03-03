import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import styled from "styled-components"


import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./menuToggle";
import {Navigation} from "./navigations"

const Menu = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    background: #fff;
`

const Nav = styled(motion.nav)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;

    
`

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
        }
    }
};

export const Sidebar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <Nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            <Menu className="background" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
        </Nav>
    );
};
