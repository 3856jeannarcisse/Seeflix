import Header from "../Component/Header";
import MediaList from "./Medialiste";
import Footer from"../Component/Footer";
import { trending_movies } from "../data/trending_movies";
import { top_shows } from "../data/top_shows";

function Home() {
  return (<>
    <div>
      <Header
      heroTitle="Welcome to our Tize Movies Platform"
      heroTagline="Stream the best moves anytime,anywhere"
      heroButtonLink="Get Started"
      showSocials={true}
      background="https://i.pinimg.com/736x/3c/a9/47/3ca947f7c1e4b9f68c8a7e0653b918be.jpg"
      
      />

      <MediaList
        title="Trending Movies"
        items={trending_movies}
      />

      <MediaList
        title="Top TV Shows"
        items={top_shows}
      />
    </div>
    <Footer/>
    </>
  );
}

export default Home;

