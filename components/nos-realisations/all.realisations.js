import { AllStyle, Affiche } from "./nos.realisations.style"
import Print from "./print"

const AllRealisations = () => {
    const donnees = [
        {
            id: "1",
            image: "/images/carte-visit.jpg",
            alt: "carte de visite"
        },
        {
            id: "2",
            image: "/images/carte-de-voeux1.jpg",
            alt: "calendricarte de voeux"
        },
        {
            id: "3",
            image: "/images/bache1.jpg",
            alt: "calendrier"
        },
        {
            id: "4",
            image: "/images/casquette2.jpg",
            alt: "casquette ouvrier"
        },
        {
            id: "5",
            image: "/images/cartes-visites.jpg",
            alt: "carte de visite"
        },
        {
            id: "6",
            image: "/images/stylo2.jpg",
            alt: "calendrier"
        },
        {
            id: "7",
            image: "/images/flyer1.jpg",
            alt: "flyer"
        },
        {
            id: "8",
            image: "/images/flash-disque1.jpg",
            alt: "flash disque"
        },
        {
            id: "9",
            image: "/images/flash-disque2.jpg",
            alt: "flyer"
        },
        {
            id: "10",
            image: "/images/goblet.jpg",
            alt: "recipiants"
        },
        {
            id: "11",
            image: "/images/chapeau.jpg",
            alt: "chapeau"
        },
        {
            id: "12",
            image: "/images/goblet2.jpg",
            alt: "recipiants"
        }
    ]
    return (
        <AllStyle><br/>
            <Print/>
            <br/>
            <Affiche>
                {
                    donnees.map((item, i) => (
                        <div key={i}>
                            <img 
                                src={item.image}
                                alt={item.alt}
                                className={"img-affiche"}
                            />
                        </div>
                    ))
                }
            </Affiche>
            <br/>
        </AllStyle>
    )
}

export default AllRealisations;