import Wrapper from "../components/wrapper"
import HomePage from "../components/hero-section/home"
import CardAgency from '../components/cards-agency/cards.agency';
import OurServices from '../components/our-services/our.services';
import NosRealisations from '../components/nos-realisations/nos.realisations';

export default function Home() {
  return (
    <Wrapper
      titrePage={"Pictogramme Rdc"}
      descriptionPage={"Bienvenue dans pictogramme, agence créa et imprimerie"}
      imagePage={"/images/affiche.jpg"}
      motClePage={"Agence, créa, imprimerie, webdesign ux ui, site internet, site web"}
    >
      <HomePage/>
      <CardAgency/><br/><br/>
      <OurServices/>
      <NosRealisations/>
    </Wrapper>
  )
}
