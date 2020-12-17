import 'bootstrap/dist/css/bootstrap.min.css';

import Wrapper from "../components/wrapper"
import HomePage from "../components/hero-section/home"
import CardAgency from '../components/cards-agency/cards.agency';
import OurServices from '../components/our-services/our.services';
import NosRealisations from '../components/nos-realisations/nos.realisations';

export default function Home() {
  return (
    <Wrapper>
      <HomePage/>
      <CardAgency/>
      <OurServices/>
      <NosRealisations/>
    </Wrapper>
  )
}
