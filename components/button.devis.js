import {motion} from "framer-motion"
import styled from "styled-components"

const BtnStyle = styled("div")`
    width: 100%;
    margin: 1.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .btn{
        width: 250px;
        padding: 10px;
        border: 1px solid ${({theme}) => theme.primaryRyde};
        text-decoration: none;
        background-color: ${({theme}) => theme.primaryRyde};
        text-align: center;
        text-transform: uppercase;
        transition: all ease-in-out 0.4s;
        color: white;
        border-radius: 20px;
        font-weight: 600;

        &:hover{
            background-color: ${({theme}) => theme.primaryRyde};
            color: ${({theme}) => theme.white};
        }

        &:focus{
            border: 1px solid ${({theme}) => theme.primaryRyde};
            outline: none;
        }
    }
`

const ButtonDevis = () => {
    return (
        <BtnStyle>
            <motion.button
                className={"btn"}
                whileHover={{
                    scale: 0.9,
                    transition: {duration: 0.1}
                }}
                onClick={() => {
                    if(typeof window !== "undefined"){
                        window.location.href = "/devis"
                    }
                }}
            >
                demander devis
            </motion.button>
        </BtnStyle>
    )
}

export default ButtonDevis;