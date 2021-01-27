import MessengerCustomerChat from 'react-messenger-customer-chat';

import Header from "./header"
import Footer from "./footer"
import Invitation from "./invitation"
import Seo from "./seo"
import ClienLogo from "./clients-logo/client.logo"

const Wrapper = ({children, titrePage, descriptionPage, imagePage, motClePage}) => {
    return (
        <>
            <Seo
                title={titrePage}
                description={descriptionPage}
                image={imagePage}
                keywords={motClePage}
            />
            <Header/>
            <main>
                {children}
            </main>
            <ClienLogo/>
            <Invitation/>
            <MessengerCustomerChat
                pageId="106616237991990"
                appId="728171997825328"
            />
            <Footer/>
        </>
    )
}

export default Wrapper