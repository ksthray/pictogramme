import Wrapper from "../components/wrapper"
import HomePage from "../components/hero-section/home"
import CardAgency from '../components/cards-agency/cards.agency';
import OurServices from '../components/our-services/our.services';
import NosRealisations from '../components/nos-realisations/nos.realisations';
import ClientLogo from '../components/clients-logo/client.logo';

export default function Home() {
  return (
    <Wrapper>
      <HomePage/>
      <CardAgency/>
      <OurServices/>
      <NosRealisations/>
      <ClientLogo/>
    </Wrapper>
  )
}
