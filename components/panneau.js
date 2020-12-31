
import {BiMap} from "react-icons/bi"
import {FaWhatsapp, FaLocationArrow, FaEnvelope} from "react-icons/fa"

import styled from "styled-components"

const PanneauStyle = styled("div")`
    background-color: white;
    border-radius: 20px;
    border: 2px solid ${({theme}) => theme.primaryRyde};
    height: 250px;

    .head{
        display: flex;
        justify-content: start;
        align-items: center;
        background-color: ${({theme}) => theme.primaryRyde};
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        height: 60px;
        padding: 0 2rem;

        .icon{
            color: white;
            font-size: 1.5rem;
            position: relative;
            top: -3px;
        }
        h6{
            color: white;
            margin-left: 20px;
            font-size: 1.3rem;
            text-transform: uppercase;
        }
    }
    .second{
            display: flex;
            justify-content: start;
            align-items: center;
            background-color: white;
            height: 60px;
            padding: 0 2rem;

            .iconet{
                color: ${({theme}) => theme.primaryRyde};
                font-size: 1.5rem;
                position: relative;
                top: -5px;
            }
            p{
                color: ${({theme}) => theme.primaryRyde};;
                margin-left: 20px;
                font-size: 1.1rem;
                text-transform: uppercase;
            }
        }
`

export const Adresse = () => {
    return (
        <PanneauStyle className={"adresse"}>
            <div className={"head"}>
                <FaLocationArrow className={"icon"}/> <h6>Nos cordonnées</h6>
            </div>
            <div className={"second"}>
                <BiMap className={"iconet"}/> <p>Gombe justice 232</p>
            </div>
            <div className={"second"}>
                <FaWhatsapp className={"iconet"}/> <p>+243824029562</p>
            </div>
            <div className={"second"}>
                <FaEnvelope className={"iconet"}/> <p>pictogramme@gmail.com</p>
            </div>
        </PanneauStyle>
    )
}