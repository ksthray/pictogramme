import {FaBuffer, FaUserFriends, FaRegClock, FaProjectDiagram} from "react-icons/fa"
import Wrapper from "../components/wrapper";

import styled from "styled-components"
import { Container } from "reactstrap";

const AgenceStyle = styled("section")`
    width: 100%;
    
    .agence{
        width: 100%;
        height: 400px;
        background-image: url("/images/christina.jpg");
        background-position: center;
        background-size: cover;

        h2{
            text-align: center;
            color: ${({theme}) => theme.white};
            font-size: 1.5rem;
            text-transform: uppercase;
            margin-top: 20px;
        }
        p{
            text-align: center;
            color: ${({theme}) => theme.white};
            font-size: 1.2rem;
        }

        .overlay-agence{
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            width: 100%;
            height: 400px;
            background: rgb(0,0,0);
            background: rgb(0,0,0);
            background: linear-gradient(180deg, rgba(0,0,0,0.700717787114846) 18%, rgba(0,0,0,0.22172619047619047) 100%);
            /* background: rgb(65,1,36);
            background: linear-gradient(180deg, rgba(65,1,36,0.4906337535014006) 18%, rgba(217,20,128,0.4514180672268907) 100%); */
        }
    
        .lagence{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 20px;
            /* background: rgb(217,20,128);
            background: linear-gradient(180deg, rgba(217,20,128,0.06206232492997199) 0%, rgba(217,20,128,0.4654236694677871) 100%); */
            padding: 1rem;

            .item{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                span{
                    font-size: 2.5rem;
                    color: ${({theme}) => theme.white};
                }

                h3{
                    color: ${({theme}) => theme.white};
                    font-size: 1.3rem;
                    text-transform: uppercase;
                }
                strong{
                    font-size: 2.2rem;
                    color: ${({theme}) => theme.white};
                }
            }
        }
    }
    //Video Player
    .player{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 350px;

        .player-tube{
            /* display: flex;
            justify-content: center;
            align-items: center; */
            position: relative;
            top: -80px;
            width: 560px;
            height: 100%;
            /* background-color: ${({theme}) => theme.primaryBlack}; */
            box-shadow: 0px 2px 31px 4px rgba(0,0,0,0.3);
        }
    }
`

export default function Agence() {
    const dataAgence = [
        {id: "1", heading: "Réalisations", number: "+550", icon: <FaProjectDiagram/>},
        {id: "2", heading: "Année experience", number: "4", icon: <FaRegClock/>},
        {id: "3", heading: "Nos clients", number: "+700", icon: <FaBuffer/>},
        {id: "4", heading: "Employés", number: "18", icon: <FaUserFriends/>},
    ]
    return (
        <Wrapper
            titrePage={"Contact Pictogramme"}
            descriptionPage={"Contactez-nous"}
            imagePage={"/images/affiche.jpg"}
        >
            <AgenceStyle>
                <div className={"agence"}>
                    <div className={"overlay-agence"}>
                        <Container>
                            <h2>L'agence</h2>
                            <div className={"lagence"}>
                                {dataAgence.map((item, i) => (
                                    <div key={i} className={"item"}>
                                        <span>{item.icon}</span>
                                        <h3>{item.heading}</h3>
                                        <strong>{item.number}</strong>
                                    </div>
                                ))}
                            </div>
                        </Container>
                    </div>
                </div>
                <div className={"player"}>
                    <div className={"player-tube"}>
                    <iframe 
                        width="560" 
                        height="350" 
                        src="https://www.youtube.com/embed/9l7l-OhLyf0" 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>
                    </div>
                </div>
            </AgenceStyle>
        </Wrapper>
    )
}