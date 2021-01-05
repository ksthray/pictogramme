import Wrapper from "../components/wrapper"
import HomePage from "../components/hero-section/home"
import CardAgency from '../components/cards-agency/cards.agency';
import OurServices from '../components/our-services/our.services';
import NosRealisations from '../components/nos-realisations/nos.realisations';
import ClientLogo from '../components/clients-logo/client.logo';

import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function Home() {
  return (
    <Wrapper
      titrePage={"Pictogramme Rdc"}
      descriptionPage={"Page d'accueil de Pictogramme Rdc"}
      imagePage={"/images/affiche.jpg"}
      motClePage={"Agence, créa, imprimerie, webdesign ux ui"}
    >
      <HomePage/>
      <CardAgency/>
      <OurServices/>
      <NosRealisations/>
      <ClientLogo/>
      <MessengerCustomerChat
        pageId="106616237991990"
        appId="728171997825328"
      />
    </Wrapper>
  )
}
