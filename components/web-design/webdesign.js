import Img from "next/image"

import {WebdesignStyle, Left, Topbar, Outils, TopbarCenter } from "./webdesign.style"

const Webdesign = () => {
    const icons = [
        {id: "1", image: "/images/framer.png"},
        {id: "2", image: "/images/figma1.png"},
        {id: "3", image: "/images/xd.png"},
        {id: "4", image: "/images/photoshop.png"}
    ]
    return (
        <WebdesignStyle>
            <Left>
                <h2>
                    Retenir l’attention de vos utilisateurs
                </h2>
                <Topbar/>
                <div className={"block-1"}>
                    <p>
                        Sur Internet, chaque seconde compte lorsqu’il est question de convaincre un internaute 
                        d’utiliser votre produit. Si la qualité des services proposés et la fluidité de navigation 
                        (ce qu’on appelle l’ergonomie) sont essentielles, le design graphique constitue une surcouche 
                        déterminante pour atteindre vos objectifs marketing/commerciaux. 
                        Afin de concevoir cet écrin visuel attractif, nous restons en veille sur les dernières 
                        tendances UI (pour user interface) et prenons le temps d’établir à chaque nouveau projet 
                        des planches de tendance (ou moodboard), un univers coloriel, ainsi qu’un benchmark 
                        graphique. Cette perspective artistique fait partie de l’ADN d’Adeliom depuis la création 
                        de l’agence en 2010. Notre objectif : diffuser au sein de votre plateforme web une ambiance unique, tout en lui donnant une bonne dose de caractère.
                    </p>
                    <Img
                        src={"/images/design1.jpg"}
                        layout={"responsive"}
                        width={"50%"}
                        height={30}
                    />
                </div><br/>
                <div className={"block-2"}>
                    <div>
                        <h3>UX design</h3>
                        <Topbar/>
                        <p>
                            L’UX design acronyme de User eXperience, traduit chez nous par l’expérience utilisateur, 
                            renvoie à l’étude et l’optimisation du ressenti qu’un utilisateur va avoir, lorsqu’il sera 
                            confronté à votre site web. L’UX se concentre sur l’aspect émotionnel et psychologique de 
                            l’expérience client. Il a pour but d’optimiser la navigation et de proposer un plaisir 
                            d’utilisation et une facilité de compréhension.
                        </p>
                    </div>
                    <div className={"image"}>
                        <Img
                            src={"/images/design2.jpg"}
                            quality={100}
                            width={350}
                            height={260}
                        />
                    </div>
                    <div>
                        <h3>UI design</h3>
                        <Topbar/>
                        <p>
                        L’UI design acronyme de User Interface, ou interface utilisateur va permettre d’améliorer 
                        l’interaction d’un utilisateur avec un produit. Il s’agit d’optimiser le design du site pour 
                        capter l’attention de son utilisateur afin qu’il reste et qu’il navigue le plus longtemps sur 
                        l’interface. L’UI est un processus plus approfondi qui va mettre de côté la prise en 
                        considération globale de l’utilisateur. Il apporte des solutions efficaces aux problèmes 
                        ou attentes des internautes.
                        </p>
                    </div>
                </div>
                <Outils>
                    <h3>TECHNOLOGIES ET OUTILS QUE NOUS UTILISONS</h3>
                    <TopbarCenter/><br/><br/>
                    <div className={"icons"}>
                        {
                            icons.map((icon) => (
                                <Img
                                    key={icon.id}
                                    src={icon.image}
                                    width={150}
                                    height={150}
                                    quality={100}
                                />
                            ))
                        }
                    </div>
                </Outils>
            </Left>
        </WebdesignStyle>
    )
}

export default Webdesign;