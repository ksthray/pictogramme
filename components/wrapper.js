import Header from "./header"
import Footer from "./footer"
import Invitation from "./invitation"
import Seo from "./seo"

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
            <Invitation/>
            <Footer/>
        </>
    )
}

export default Wrapper