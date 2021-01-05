import Img from "next/image"
import {AboutSection, CardGrid, Card} from "./about.style"

const About = () => {
    const persona = [
        {id: "1", nom: "tshibamba", prenom: "guylain", role: "head of project", image: "/images/guylain-min.jpeg"},
        {id: "2", nom: "Nom", prenom: "Dave", role: "Assistant Chef", image: "/images/cover.jpg"},
        {id: "3", nom: "loma", prenom: "guelord", role: "responsable pictoprint", image: "/images/cover-min.jpg"},
        {id: "4", nom: "Nom", prenom: "Gladys", role: "Receptionniste & trésorie", image: "/images/cover-min.jpg"},
        {id: "5", nom: "makila", prenom: "prenom", role: "redacteur", image: "/images/cover-min.jpg"},
        {id: "6", nom: "Nom", prenom: "Israel", role: "Graphiste", image: "/images/cover.jpg"},
        {id: "7", nom: "kisalu", prenom: "patrick", role: "Supervisor project", image: "/images/cover-min.jpg"},
        {id: "8", nom: "Mabala", prenom: "david", role: "Backend developr", image: "/images/cover-min.jpg"},
        {id: "9", nom: "Kongolo", prenom: "camille", role: "Fullstack developer & UX UI designer", image: "/images/camille-min.jpeg"},
        {id: "10", nom: "Bampiki", prenom: "Ketshia", role: "Referente digital", image: "/images/cover-min.jpg"},
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