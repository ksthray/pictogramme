import Header from "./header"
import Footer from "./footer"
import Invitation from "./invitation"

const Wrapper = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Invitation/>
            <Footer/>
        </>
    )
}

export default Wrapper