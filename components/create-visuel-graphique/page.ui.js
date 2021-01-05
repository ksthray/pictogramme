import Img from "next/image"
import ButtonDevis from "../button.devis"

import {ContainerUi, Left, ImageText, Topbar} from "./page.ui.style"

const PageUI = () => {
    const items = [
        {
            id: "1",
            title: "Le logo",
            alt: "image descriptive",
            images: ["/images/orange.jpg", "/images/bcdc.jpeg", "/images/logopicto.png"],
            heading: "Le logo est l’élément fondateur d’une identité visuelle",
            text: "Notre processus de conception conduit par notre équipe de designers talentueux, avec une expérience dans différents styles, pour toutes les industries.",
        },
        {
            id: "2",
            title: "La mise en page",
            alt: "image descriptive",
            images: ["/images/miseenpage.png"],
            heading: "Elle est importante pour tout type de documents.",
            text: "joue un rôle important pour faire passer un message. Si la mise en page n'est pas adaptée à votre cible, ou si elle ne véhicule pas correctement l’image de votre marque, le message ne sera pas transmis efficacement, particulièrement pour un document publicitaire.",
        },
        {
            id: "3",
            title: "La charte graphique",
            alt: "image descriptive",
            images: ["/images/chartegraphique.png"],
            heading: "Cela inclus le logo, mise en page, des flyer et beaucoup d'autres elements",
            text: "Une charte graphique vise à créer cohérence et uniformité dans la communication de votre entreprise, en regroupant graphiquement son identité, son univers et ses valeurs.",
        }
    ]
    return (
        <ContainerUi>
            <Left>
                <h2>
                    Qu'est-ce qu'une identité visuelle et quelle est sa valeur ajoutée 
                    pour votre entreprise ?
                </h2>
                <Topbar/>
                <ImageText>
                    <div>
                        <Img
                            src={"/images/affiche-min.jpg"}
                            layout={"responsive"}
                            width={200}
                            height={150}
                            quality={100}
                            alt={"affiche pictogramme"}
                        />
                    </div>
                    <div>
                        <Img
                            src={"/images/pictoqween-min.jpg"}
                            layout={"responsive"}
                            width={200}
                            height={150}
                            quality={100}
                            alt={"affiche pictogramme"}
                        />
                    </div>
                </ImageText><br/>
                <div className={"article"}>
                    <h3>Qu'est-ce qu'une identité visuel ?</h3><br/>
                    <p>
                        Une identité visuelle est constituée par un ensemble d’éléments graphiques permettant 
                        d’identifier une entreprise ou une institution. Les éléments graphiques constituant une 
                        identité visuelle sont : le nom (marque), le logotype, la griffe, l’emblème, la couleur, 
                        la typographie, des pictogrammes, …
                    </p><br/>

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
                    {items.map((item) => (
                        <div key={item.id} className={"present"}>
                            <h4>{item.title} </h4>
                            <p>{item.heading}</p>
                            <p>{item.text}</p>
                            <div className={"images"}>
                                {item.images.map((image) => (
                                    <Img 
                                        key={item.id} 
                                        src={image} 
                                        layout={"intrinsic"}
                                        width={230}
                                        height={"auto"}
                                        quality={100}
                                        alt={item.alt}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Left>
            <ButtonDevis/>
        </ContainerUi>
    )
}

export default PageUI;