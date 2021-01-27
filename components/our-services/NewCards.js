import {FaStar, FaRocket, FaHeart, FaCode, FaSlidersH} from "react-icons/fa"
import {AiFillPrinter} from "react-icons/ai"

import {NewCardStyle, BarSlim} from "./our.services.style"

const NewCards = () => {
    const data = [
        {
            id: "1",
            nameService: "Création identité graphique",
            description: "Nous accompagnons les entreprises dans la définition de leur identité de marque.",
            image: "/images/pen-tool.png",
        },
        {
            id: "2",
            nameService: "impression sur papiers",
            description: "Notre agence de print vous accompagne dans la création et l’impression de vos supports physiques.",
            image: "/images/printer.png",
        },
        {
            id: "4",
            nameService: "web design UX & UI design",
            description: "Nous vous accompagons dans la définition de vos besoins, nous identifions ensemble les contraintes et le périmètre de conception.",
            image: "/images/ux-design.png",
        },
        {
            id: "3",
            nameService: "création de site web",
            description: "Nous intervenons sur toute la chaîne du développement web, de la création de sites web à la création d’application mobile sur mesure.",
            image: "/images/programming.png",
        },
        {
            id: "5",
            nameService: "Web marketing digital",
            description: "Nous créons, développons, animons et engageons vos communautés à travers un contenu social riche et hyper adapté aux usages de vos cibles.",
            image: "/images/bullhorn.png",
        },
    ]
    const items = [
        {
            id: "1",
            phrase: "Définir ou réfondre votre identité de marque.",
            icon: <FaStar/>
        },
        {
            id: "2",
            phrase: "Appuyer le lancement d'un nouveau produit ou d'une nouvelle offre.",
            icon: <FaRocket/>
        },
        {
            id: "3",
            phrase: "Imprimer vos supports physiques, pour une marketing traditionnel.",
            icon: <AiFillPrinter/>
        },
        {
            id: "4",
            phrase: "Emouvoir vos cibles avec des messagesde marque captivants.",
            icon: <FaHeart/>
        },
        {
            id: "5",
            phrase: "Créer ou réfondre votre site web, (site vitrine ou e-commerce).",
            icon: <FaCode/>
        },
        {
            id: "6",
            phrase: "Vous souhaitez optimiser vos plans médias et augmenter vos performances.",
            icon: <FaSlidersH/>
        },
    ]
    return (
        <NewCardStyle>
            <div className={"container-top"}>
                <h2>Booster votre business</h2>
                <BarSlim/>
                <p >
                    Notre agence de communication accompagne les entreprises en proposant le meilleur 
                    service sur n'importe quel marché cible. Nous parlons votre langue, comprenons vos 
                    objectifs et proposons les solutions digitales les plus efficaces.
                </p>
                <div className={"grid-item"}>
                    {data.map((item, i) => (
                        <div className={"flat-icon"} key={i}>
                            <img src={item.image} alt={"icon"}/>
                            <h3>{item.nameService}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"container-souhait"}>
                <h2>Si vous souhaitez</h2>
                <BarSlim/>
                <div className={"card-main"}>
                    {items.map((item, i) => (
                        <div className={"card-souhait"} key={i}>
                            <span>{item.icon}</span>
                            <p>{item.phrase}</p>
                        </div>
                    ))}
                </div>
            </div>
        </NewCardStyle>
    )
}

export default NewCards;