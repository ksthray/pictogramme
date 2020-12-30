import Link from "next/link"

import {GrMail} from "react-icons/gr"
import {BiMap, BiPhoneCall} from "react-icons/bi"

import styled from "styled-components"

const PanneauStyle = styled("div")`
    background-color: ${({theme}) => theme.primaryRyde};
    color: white;
    position: fixed;
    right: 0;
    padding: 1rem;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: -6px 5px 12px -4px rgba(0,0,0,0.5);
    
    .button{
        background-color: white;
        text-decoration: none;
        text-align: center;
        width: 100%;
        color: ${({theme}) => theme.primaryRyde};
        font-weight: bold;
        border: none;
        border-radius: 20px;
        padding: 7px;
        transition: all ease-out 0.3s;

        :focus{
            border: none;
            outline: none;
        }
    }
`

const Panneau = () => {
    return (
        <PanneauStyle className={"adresse"}>
            <div className={"adresse"}>
                <h5><BiMap/> Gombe justice 232</h5>
            </div>
            <div className={"numero"}>
                <h5><BiPhoneCall/> +243824029562</h5>
            </div>
            <div className={"mail"}>
                <h5><GrMail/>pictogramme@gmail.com</h5>
            </div><br/>
            <Link href="/devis">
                <a className={"button"} type="button">
                    demander un devis
                </a>
            </Link>
        </PanneauStyle>
    )
}

export default Panneau;