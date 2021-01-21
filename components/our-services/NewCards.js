import {useRouter} from "next/router"

import {Card, CardHead, CardBody, CardBottom, CardTitle, NewCardStyle} from "./our.services.style"

const NewCards = () => {
    const router = useRouter()

    const pushPage = (e, link) => {
        e.preventDefault()
        router.push(link)
    }
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
    return (
        <NewCardStyle>
            <h2>Booster votre business</h2><br/>
            <p className={"message-service"}>
                Notre agence de communication accompagne les entreprises en proposant le meilleur 
                service sur n'importe quel marché cible. Nous parlons votre langue, comprenons vos 
                objectifs et proposons les solutions digitales les plus efficaces.
            </p><br/>
            <div className={"grid"}>
                <div className={"image"}>
                    <img
                        src={"/images/gold-min.jpg"}
                        alt={"chesse king"}
                    />
                </div>
                <div className={"grid-item"}>
                    {data.map((item, i) => (
                        <div className={"flat-icon"} key={i}>
                            <img src={item.image} alt={"icon"}/>
                            <h3>{item.nameService}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </NewCardStyle>
    )
}

export default NewCards;