import Img from "next/image"
import ButtonDevis from "../button.devis"

import {ImageText, MarketingStyle, Left, Topbar} from "./marketing.style"

const Marketing = () => {
    const items = [
        {id: "1", text: "Référencement naturel (SEO)"},
        {id: "2", text: "Content Marketing"},
        {id: "3", text: "Campagne de emailing"},
        {id: "4", text: "Rédaction et optimisation de contenu"},
        {id: "5", text: "Création et animation de Blog"},
        {id: "6", text: "Community management sur les réseaux sociaux"},
        {id: "7", text: "Campagne publicitaires (Adwords)"}
    ]
    return (
        <MarketingStyle>
            <Left>
                <h2>
                    Rendez vous plus visible ! Augmentez vos ventes et la notoriété <br/>de votre marque
                    avec le web marketing.
                </h2>
                <p>
                Notre équipe est derrière pour vous aidez de mettre à jour et d’alimenter votre site Internet en contenu, d’animer 
                votre communauté sur les réseaux sociaux, d’analyser le trafic de votre site web, la création 
                et le suivi de campagnes publicitaires en ligne,…
                </p>
                <ImageText>
                    <Img
                        src={"/images/digital4.jpg"}
                        layout={"responsive"}
                        width={"70%"}
                        height={40}
                        quality={100}
                        alt={"image info"}
                    />
                    <Img
                        src={"/images/digital5.jpg"} 
                        layout={"responsive"}
                        width={"100%"}
                        height={35}
                        quality={100}
                        alt={"image info"}
                    />
                </ImageText><br/>
                <div className={"container-block"}>
                    <h3>
                    Nous mobilisons les leviers adaptés à vos besoins pour vous assurer <br/>croissance et solidité 
                    dans le développement de votre activité.
                    </h3>
                    <Topbar/>
                    <div className={"digital-marketing"}>
                        {items.map((item) => (
                            <div key={item.id} className={"service"}>
                                <strong>{item.text}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            </Left>
            <ButtonDevis/>
        </MarketingStyle>
    )
}

export default Marketing;