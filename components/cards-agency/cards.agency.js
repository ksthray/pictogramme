import { Container } from 'reactstrap'
import Image from '../image'
import {SectionStyle, Cards, Title, Topbar, Bottombar, P} from './cards.style'

const CardAgency = ( ) => {
    return (
        <SectionStyle>
            <br/>
            <Container>
                <Topbar/>
                <Title>
                    De la conception <br/>
                    à l'imprimerie
                </Title>
                <Bottombar/>
                <P>
                    « Sans imagination, il ne pourrait avoir de création »,
                </P><br/>
                <Cards>
                    <div>
                        <div className={"image1"}>
                            <Image
                                src={"/images/mbotesouriez.jpg"}
                                width={250}
                                height={350}
                                layout={"fixed"}
                            />
                        </div>
                        <p className={"p1"}>
                            Design imaginaire
                        </p>
                    </div>
                    <div>
                        <div className={"image2"}>
                            <Image
                                src={"/images/mbotesrz.jpg"}
                                width={300}
                                height={400}
                                layout={"intrinsic"}
                                className={"image"}
                            />
                        </div>
                        <p className={"p2"}>
                            Travail de qualité
                        </p>
                    </div>
                    <div>
                        <div className={"image3"}>
                            <Image
                                src={"/images/pagembote.jpg"}
                                width={250}
                                height={350}
                                layout={"fixed"}
                                className={"image"}
                            />
                        </div>
                        <p className={"p3"}>
                            Impression de haut niveau
                        </p>
                    </div>
                </Cards>
            </Container>
        </SectionStyle>
    )
}

export default CardAgency;