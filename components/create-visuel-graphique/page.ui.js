import Img from "next/image"
import ButtonDevis from "../button.devis"

import {ContainerUi, Left, ImageText, Topbar} from "./page.ui.style"

const PageUI = () => {
    const items = [
        {
            id: "1",
            title: "Un logo",
            alt: "image descriptive",
            images: ["/images/logopicto.png", "/images/bibidigi.png", "/images/ram.png", "/images/blackbox.png"],
            heading: "Le logo est l’élément fondateur d’une identité visuelle",
            text: "Notre processus de conception conduit par notre équipe de designers talentueux, avec une expérience dans différents styles, pour toutes les industries.",
        },
        {
            id: "2",
            title: "La mise en page",
            alt: "image descriptive",
            images: ["/images/flyer1.jpg"],
            heading: "Elle est importante pour tout type de documents.",
            text: "joue un rôle important pour faire passer un message. Si la mise en page n'est pas adaptée à votre cible, ou si elle ne véhicule pas correctement l’image de votre marque, le message ne sera pas transmis efficacement, particulièrement pour un document publicitaire.",
        },
        {
            id: "3",
            title: "La charte graphique",
            alt: "image descriptive",
            images: ["/images/flyer2.jpg"],
            heading: "Cela inclus le logo, mise en page, des flyer et beaucoup d'autres elements",
            text: "Une charte graphique vise à créer cohérence et uniformité dans la communication de votre entreprise, en regroupant graphiquement son identité, son univers et ses valeurs.",
        }
    ]
    return ( 
        <ContainerUi>
            <div className={"block1"}>
                <div className={"image"}>
                    <img src={"/images/guylain2.jpg"} alt="DG picto image"/>
                </div>
                <div className={"texts"}>
                    <h2>Qu'est-ce qu'une identité visuelle ?</h2>
                    <Topbar/>
                    <p>Quelle est sa valeur ajoutée 
                    pour votre entreprise ?</p>
                    <p>
                    Une identité visuelle est constituée par un ensemble d’éléments graphiques permettant 
                        d’identifier une entreprise ou une institution. Les éléments graphiques constituant une 
                        identité visuelle sont : le nom (marque), le logotype, la griffe, l’emblème, la couleur, 
                        la typographie, des pictogrammes, …
                    </p>
                </div>
            </div><br/><br/>
            <div className={"article"}>
                    <p>
                        Dans le cas d’une entreprise, tous les éléments graphiques de l’identité visuelle sont
                        détaillés et figés dans un document nommé « charte graphique » 
                        (corporate identity code). L’objectif premier de cette charte graphique est de décliner
                        fidélement une identité visuelle sur tous les supports de communication d’une entreprise 
                        (site internet, signature de mail, emballage de produits, enseigne, véhicules de société, 
                        papier à lettres, cartes de visites, flyers, dépliants, plaquettes commerciales…).
                    </p><br/>
                    <p>
                        L’enjeu d’une identité visuelle est donc de faire valoir la marque de votre entreprise 
                        grâce à un ensemble de points invariants :
                    </p>
            </div><br/>
            <div className={"logo"}>
                {items.map((item, i) => {
                    if(item.title === "Un logo"){
                        return (
                            <div className={"grid"} key={i}>
                                <div className={"leslogo"}>
                                    {item.images.map((image, i) => (
                                        <img 
                                            key={i} 
                                            src={image} 
                                            alt={item.alt}
                                        />
                                ))}
                                </div>
                                <div className={"text"}>
                                    <h3>{item.title}</h3>
                                    <Topbar/>
                                    <p>{item.heading}</p>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div><br/>
            <div className={"mise-en-page"}>
                {items.map((el, i) => {
                    if(el.title === "La mise en page"){
                        return (
                            <div className={"grid"} key={i}>
                                <div className={"text"}>
                                    <h3>{el.title}</h3>
                                    <Topbar/>
                                    <p>{el.heading}</p>
                                    <p>{el.text}</p>
                                </div>
                                <div className={"img"}>
                                    <img 
                                        key={i} 
                                        src={el.images} 
                                        alt={el.alt}
                                    />
                                </div>
                            </div>
                        )
                    }
                })}
            </div><br/>
            <div className={"charte"}>
                {items.map((chart, i) => {
                    if(chart.title === "La charte graphique"){
                        return (
                            <div className={"grid"} key={i}>
                                <div className={"img"}>
                                    <img 
                                        key={i} 
                                        src={chart.images} 
                                        alt={chart.alt}
                                    />
                                </div>
                                <div className={"text"}>
                                    <h3>{chart.title}</h3>
                                    <Topbar/>
                                    <p>{chart.heading}</p>
                                    <p>{chart.text}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <ButtonDevis/>
        </ContainerUi>
    )
}

export default PageUI;