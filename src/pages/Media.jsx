
import Header from "../Component/Header";
import { Mediaa } from "../data/Media";
import MediaList from "./Medialiste";
import Footer from"../Component/Footer";
function About(){
return(
    <>
    <Header
    heroTitle="Explore Our Media"
    heroTagline="Movies and TV shows curated for you"
    heroButtonLink="Browse Now..."
    showSocials={true}
    
    />
    
    <MediaList title="Media" items={Mediaa}/>
    <Footer/>
    </>
)

}
export default About;