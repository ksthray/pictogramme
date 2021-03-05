import {Containt, BarSlim, Bar} from "./influence.style"

//icons
import {FaCertificate, FaImage, FaHandshake, FaRocket} from "react-icons/fa"

//json lotties
import Analytic from "../../public/lotties/38571-analytics.json"
import Search from "../../public/lotties/46154-searching.json"
import Teams from "../../public/lotties/33624-team-of-businessman.json"

//component lottie
import Lottie from "./Lottie"

const InfluencePage = () => {
    const data = [
        {
            title: "Lancement",
            desc: "Appuyer le lancement d’un nouveau produit, d’une nouvelle offre, ou d’un nouveau service",
            icon: <FaRocket/>
        },
        {
            title: "Collaboration",
            desc: "Soutenir vos ventes en collaborant régulièrement avec les influenceurs",
            icon: <FaHandshake/>
        },
        {
            title: "Contenus",
            desc: "Produire des contenus innovants en collaborant avec des influenceurs réputés",
            icon: <FaImage/>
        },
        {
            title: "Buzz",
            desc: "Lancer une nouvelle marque et intégrer un pool d’influenceurs pour générer du buzz",
            icon: <FaCertificate/>
        },
    ]
    return (
        <Containt>
            <div className={"container-souhait"}>
                <h2>Si vous souhaitez</h2> 
                <BarSlim/><br/>
                <div className={"card-main"}>
                    {data.map((item, i) => (
                        <div className={"card-souhait"} key={i}>
                            <h3>{item.title}</h3>
                            <span>{item.icon}</span>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"steps-container"}>
                <h2>Notre stratégie pour vous aidez</h2>
                <BarSlim/><br/>
                <p className={"p"}>Notre stratégie d’accompagnement repose sur 3 piliers</p>
                <div className={"steps"}>
                    <div className={"step1-text"}>
                        <strong>01</strong>
                        <div className={"contenu"}>
                            <h3>Picto Search</h3>
                            <Bar/>
                            <p>
                                Elle permet d’identifier et de qualifier les bons influenceurs pour votre campagne 
                                (plus de 200 critères de recherche), de les activer et de suivre des KPIs cohérents 
                                par rapport à votre stratégie de communication globale. Le Marketing d’Influence est 
                                une stratégie de Communication mesurable et ROIste.
                            </p>
                        </div>
                    </div>
                    <Lottie svgName={Search}/>
                    <Lottie svgName={Analytic}/>
                    <div className={"step1-text"}>
                        <strong>02</strong>
                        <div className={"contenu"}>
                            <h3>Picto Analytics</h3>
                            <Bar/>
                            <p>
                                Comment les annonceurs peuvent-ils être sûrs de travailler avec les meilleurs 
                                influenceurs s'ils ne les connaissent pas tous? Notre base d’influenceurs est 
                                exhaustive : Picto Analytics permet de collecter et d’analyser les influenceurs 
                                adapter à votre marché.
                            </p>
                        </div>
                    </div>
                    <div className={"step1-text"}>
                        <strong>03</strong>
                        <div className={"contenu"}>
                            <h3>Picto Team's</h3>
                            <Bar/>
                            <p>
                                Nos équipes ont un lien privilégié avec nombre de ces créateurs de contenus, avec qui elles 
                                échangent au quotidien. Dans le cadre de notre accompagnement, nous les impliquons dans les 
                                campagnes afin qu’ils deviennent des ambassadeurs de votre marque.
                            </p>
                        </div>
                    </div>
                    <Lottie svgName={Teams}/>
                </div>
            </div>
        </Containt>
    )
}

export default InfluencePage;