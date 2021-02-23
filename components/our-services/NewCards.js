import {FaStar, FaRocket, FaHeart, FaCode, FaSlidersH,FaChessQueen,FaBullhorn} from "react-icons/fa"
import {AiFillPrinter} from "react-icons/ai"

import {NewCardStyle, BarSlim, FlatIcon} from "./our.services.style"

const NewCards = () => {
    const data = [
        {
            id: "1",
            nameService: "Création identité graphique",
            description: "Nous accompagnons les entreprises dans la définition de leur identité de marque.",
            image: "/images/pen-tool.png",
            bgG: "rgb(47,229,255)",
            bgL: "linear-gradient(112deg, rgba(47,229,255,0.24693627450980393) 0%, rgba(255,0,159,0.2861519607843137) 100%)"
        },
        {
            id: "2",
            nameService: "impression sur papiers",
            description: "Notre agence de print vous accompagne dans la création et l’impression de vos supports physiques.",
            image: "/images/printer.png",
            bgG: "rgb(255,246,47)",
            bgL: "linear-gradient(112deg, rgba(255,246,47,0.24693627450980393) 0%, rgba(86,255,0,0.2861519607843137) 100%)"
        },
        {
            id: "4",
            nameService: "web design UX & UI design",
            description: "Nous vous accompagons dans la définition de vos besoins, nous identifions ensemble les contraintes et le périmètre de conception.",
            image: "/images/ux-design.png",
            bgG: "rgb(255,47,47)",
            bgL: "linear-gradient(112deg, rgba(255,47,47,0.24693627450980393) 0%, rgba(124,0,255,0.2861519607843137) 100%)"
        },
        {
            id: "3",
            nameService: "création de site web",
            description: "Nous intervenons sur toute la chaîne du développement web, de la création de sites web à la création d’application mobile sur mesure.",
            image: "/images/programming.png",
            bgG: "rgb(255,176,47)",
            bgL: "linear-gradient(112deg, rgba(255,47,149,0.24693627450980393) 0%, rgba(0,255,218,0.2861519607843137) 100%)"
        },
        {
            id: "5",
            nameService: "Web marketing digital",
            description: "Nous créons, développons, animons et engageons vos communautés à travers un contenu social riche et hyper adapté aux usages de vos cibles.",
            image: "/images/bullhorn.png",
            bgG: "rgb(255,47,149)",
            bgL: "linear-gradient(112deg, rgba(255,47,149,0.24693627450980393) 0%, rgba(255,252,0,0.2861519607843137) 100%)"
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
            phrase: "Emouvoir vos cibles avec des messages de marque captivants.",
            icon: <FaHeart/>
        },
        {
            id: "5",
            phrase: "Créer ou réfondre votre site web, (site vitrine ou e-commerce).",
            icon: <FaCode/>
        },
        {
            id: "6",
            phrase: "Optimiser vos plans médias et augmenter vos performances.",
            icon: <FaSlidersH/>
        },
        {
            id: "7",
            phrase: "amplifier votre notoriété de marque et développer votre préférence de marque",
            icon: <FaChessQueen/>
        },
        {
            id: "8",
            phrase: "rouver une alternative digitale plus efficace et plus rentable à vos campagnes offline",
            icon: <FaBullhorn/>
        }
    ]
    return (
        <NewCardStyle>
            <div className={"container-top"}>
                <div className={"grid-item1"}>
                    <h2>Booster votre business</h2>
                    <BarSlim/>
                    <p >
                        Notre agence de communication accompagne les entreprises en proposant le meilleur 
                        service sur n'importe quel marché cible. Nous parlons votre langue, comprenons vos 
                        objectifs et proposons les solutions digitales les plus efficaces.
                    </p>
                </div> 
                <div className={"grid-item2"}>
                    {data.map((item, i) => (
                        <FlatIcon bgG={item.bgG} bgL={item.bgL} key={i}>
                            <img src={item.image} alt={"icon"}/>
                            <h3>{item.nameService}</h3>
                        </FlatIcon>
                    ))}
                </div>
            </div>
            <div className={"container-souhait"}>
                <h2>Si vous souhaitez</h2>
                <BarSlim/><br/>
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