import {Containt} from "./nos.realisations.style"
import Img from "next/image"
import Slider from "../carouselrealisation/slider"

const ToutComponent = () => {
    const yebisa = [
        {id: "1", image: "/images/yebisa1.jpg", alt: ""},
        {id: "2", image: "/images/yebisa2.jpg", alt: ""},
        {id: "3", image: "/images/yebisa3.jpg", alt: ""},
        {id: "4", image: "/images/yebisa4.jpg", alt: ""},
        {id: "5", image: "/images/yebisa5.jpg", alt: ""},
        {id: "6", image: "/images/yebisa6.jpg", alt: ""},
    ]
    return (
        <Containt>
            <div className={"top-el"}>
                <video controls loop>
                    <source src={"/videos/mbotespot.mp4"} type={"video/mp4"}/> 
                </video>
                <img src={"/images/liveroom.jpg"}/>
            </div><br/>
            <div className={"sect1"}>
                <img src={"/images/pagembote-min.jpg"} className={"img1"}/>
                <img src={"/images/salontour.jpg"} className={"img2"}/>
                <img src={"/images/mbotesouriez-min.jpg"} className={"img3"}/>
            </div><br/>
            <div className={"sect2"}>
                <img className={"atm"} src={"/images/atm1.jpg"} alt="alexy image"/>
                <div className={"imgs"}>
                    <img className={"img1"} src={"/images/atmaffiche.jpg"} alt="alexy affiche"/>
                    <img className={"img1"} src={"/images/atm2.jpg"} alt="karibu affiche"/>
                </div>
                <img className={"atm"} src={"/images/atm1.jpg"} alt="alexy image"/>
            </div><br/>
            <div className={"sect3"}>
                {yebisa.map((item, index) => (
                    <img key={index} src={item.image} alt={item.alt} />
                ))}
            </div><br/>
            <Slider/>
        </Containt>
    )
}

export default ToutComponent;