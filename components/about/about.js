import {AboutSection, CardGrid, Card} from "./about.style"

const About = () => {
    const persona = [
        {id: "boss", nom: "eale", prenom: "jean-claude", role: "CEO", image: "/images/fullboss.jpg"},
        {id: "1", nom: "tshibamba", prenom: "guylain", role: "head of project", image: "/images/guylain-min.jpeg"},
        {id: "2", nom: "Nom", prenom: "Dave", role: "Assistant Chef", image: "/images/cover.jpg"},
        {id: "4", nom: "Bora", prenom: "Raissa", role: "Receptionniste & trésorie", image: "/images/cover.jpg"},
        {id: "5", nom: "makila", prenom: "Emmanuel", role: "rédacteur", image: "/images/cover.jpg"},
        {id: "6", nom: "Nom", prenom: "Israel", role: "Graphiste", image: "/images/cover.jpg"},
        {id: "9", nom: "Kongolo", prenom: "camille", role: "Fullstack developer & UX UI designer", image: "/images/camille.jpeg"},
        {id: "10", nom: "Bampiki", prenom: "Ketshia", role: "Referente digital", image: "/images/cover.jpg"},
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