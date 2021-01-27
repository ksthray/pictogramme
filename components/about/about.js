import {AboutSection, CardGrid, Card} from "./about.style"

const About = () => {
    const persona = [
        {id: "boss", nom: "eale", prenom: "jean-claude", role: "CEO group", image: "/images/fullboss.jpg"},
        {id: "ceo", nom: "mpeti", prenom: "lola", role: "CEO Picto", image: "/images/cover.jpg"},
        {id: "redacteur", nom: "diabanza", prenom: "papy", role: "Rédacteur chef", image: "/images/cover.jpg"},
        {id: "1", nom: "tshibamba", prenom: "guylain", role: "DG Picto", image: "/images/guylain-min.jpeg"},
        {id: "6", nom: "Nom", prenom: "Israel", role: "Chef pool crea", image: "/images/cover.jpg"},
        {id: "4", nom: "Bora", prenom: "Raissa", role: "Assistante chef", image: "/images/cover.jpg"},
        {id: "9", nom: "Kongolo", prenom: "camille", role: "Fullstack developer", image: "/images/camille.jpeg"},
    ]
    return (
        <AboutSection>
            <CardGrid>
                {persona.map((pers) => (
                    <Card key={pers.id} bgImage={pers.image}>
                        <div className={"block"}>
                            <h4>{pers.prenom} {pers.nom}</h4>
                            <p>{pers.role}</p>
                        </div>
                    </Card>
                ))}
            </CardGrid>
        </AboutSection>
    )
}

export default About;