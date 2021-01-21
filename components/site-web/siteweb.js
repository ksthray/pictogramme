import Img from "next/image"
import ButtonDevis from "../button.devis"
import {SitewebStyle, Left, ImageText, Topbar, TopbarCenter} from "./siteweb.style"

const Siteweb = () => {
    const vitrine = [
        {
            id: "1", 
            text: "Rôle d’information mettant en avant l’image de marque de votre entreprise, en présentant votre activité, vos produits, vos services.",
            elements: [
                "💻📱Responsive design (affichage adapté pour smartphone, tablette et ordinateur)",
                "📺Espace Actualité",
                "💻Interface d’administration dédiée",
                "🔍Système d’optimisation SEO (référencement)",
                "🔍🔍Système d’optimisation de performance intégré (offert avec l’hébergement)"
            ]
        }
    ]
    const ecom = [
        {
            id: "1", 
            text: "Permet de vendre directement vos produits aux internautes qui procèdent au paiement directement en ligne",
            elements: [
                "💻📱Responsive design (affichage adapté pour smartphone, tablette et ordinateur)",
                "📱Boutique en ligne e-commerce (avec paiement en ligne)",
                "💻Espace compte client",
                "💻Espace Actualité",
                "💻Interface d’administration dédiée",
                "🔍Système d’optimisation SEO (référencement)",
                "🔍🔍Système d’optimisation de performance intégré (offert avec l’hébergement)"
            ]
        }
    ]
    const images = [
        {id: "1", image: "/images/website1.png", alt: "image écran site internet responsive"},
        {id: "2", image: "/images/website2.png", alt: "image écran site internet responsive"}
    ]
    return (
        <SitewebStyle>
            <Left>
                <div className={"main-site"}>
                    <div className={"grid"}>
                        <div className={"text"}>
                            <h2>
                                Vous avez besoin d'être présent sur internet ? Nous sommes là pour vous.
                            </h2>
                            <Topbar/>
                            <p>
                                Notre agence web fait bien plus que créer ou refondre votre site internet. 
                                Notre intervention s’attache à créer un site internet qui va générer un retour sur 
                                investissement mesurable et programmé pour votre entreprise.
                            </p>
                        </div>
                        <div className={"img-site"}>
                            <img src={"/images/website1.png"} alt={"image site web responsive"} />
                        </div>
                    </div>
                </div>
                <div className={"container-block"}>
                    <div className={"site-vitrine"}>
                        <h3>site vitrine</h3>
                        <Topbar/>
                        {vitrine.map((vit, i) => (
                            <div key={i}>
                                <p>{vit.text}</p>
                                <ul style={{paddingLeft: "20px"}}>
                                    {vit.elements.map((v) => (
                                        <li key={v}>{v}</li> 
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={"site-ecom"}>
                        <h3>site e-commerce</h3>
                        <Topbar/>
                            {ecom.map((com, i) => (
                                <div key={i}>
                                    <p>{com.text}</p>
                                    <ul style={{paddingLeft: "20px"}}>
                                        {com.elements.map((v) => (
                                            <li key={v}>{v}</li> 
                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </div>
                </div>
                <div className={"pwa"}> 
                    <h3>
                        Faite vos premiers pas dans le monde de PWA<br/>
                        (Progressive-web-application)
                    </h3>
                    <TopbarCenter/>
                    <p>Profiter des avantages tel que :</p>
                    <ul>
                        <li>Votre application peut s'executer meme sans connexion</li>
                        <li>Interaction comme sur une application mobila native</li>
                        <li>Sécurisé grace au certificat SSL, qui est obligatoire</li>
                        <li>Notification Push, sur android</li>
                        <li>Installation facile sur votre écran d'accueil</li>
                        <li>Consomme moins de Mo, rapide meme sur une connexion 2G</li>
                    </ul>
                </div>
            </Left>
            <ButtonDevis/>
        </SitewebStyle>
    )
}

export default Siteweb