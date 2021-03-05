import Wrapper from "../components/wrapper"
import HomePage from "../components/hero-section/home"
import CardAgency from '../components/cards-agency/cards.agency';
import OurServices from '../components/our-services/our.services';
import NosRealisations from '../components/nos-realisations/nos.realisations';
import Special from "../components/special/special";

export default function Home() {
  return (
    <Wrapper
      titrePage={"Pictogramme Rdc"}
      descriptionPage={"Bienvenue dans Icônes Rdc, agence créa et stratégie"}
      imagePage={"/images/affiche.jpg"}
      motClePage={"Agence, créa, imprimerie, webdesign ux ui, site internet, site web"}
    >
      <HomePage/>
      <Special
        timeTillDate="03 01 2021, 6:00 am" 
        timeFormat="MM DD YYYY, h:mm a"
      />
      <CardAgency/><br/><br/>
      <OurServices/>
      <NosRealisations/>
    </Wrapper>
  )
}
