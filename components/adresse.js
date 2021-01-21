import styled from "styled-components"
import {FaLocationArrow, FaMapMarkerAlt, FaRegEnvelope, FaWhatsapp} from "react-icons/fa"

const AdresseStyle = styled('div')`
    width: 100%;
    border-radius: 20px;
    border: 1px solid ${({theme}) => theme.primaryRyde};

    .head-contact{
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
        width: 100%;
        background-color: ${({theme}) => theme.primaryRyde};
        color: white;
        font-size: 1.5rem;
        text-transform: uppercase;
        padding: 1rem;

        border-top-left-radius: 19px;
        border-top-right-radius: 19px;
    }
    .body-contact{
        padding: 10px 1rem;

        .items{
            display: flex;
            gap: 10px;
            font-size: 1.15rem;
            margin-bottom: 10px;

            .icon{
                position: relative;
                top: 6px;
                color: ${({theme}) => theme.primaryRyde};
            }
        }
    }
`

const Adresse = () => {
    return (
        <AdresseStyle>
            <div className={"head-contact"}>
                <FaLocationArrow/> Nos coordonnées
            </div>
            <div className={"body-contact"}>
                <div className={"items"}>
                    <FaMapMarkerAlt className={"icon"}/> 
                    <span>Kinshasa, avenue Pierre Mulele n°9 bis ex-24 Novembre</span> 
                </div>
                <div className={"items"}>
                    <FaWhatsapp className={"icon"}/> 
                    <span>+ 243 824 029 562</span> 
                </div>
                <div className={"items"}>
                    <FaRegEnvelope className={"icon"}/> 
                    <span>pictogrammerdc@gmail.com</span> 
                </div>
            </div>
        </AdresseStyle>
    )
}

export default Adresse;