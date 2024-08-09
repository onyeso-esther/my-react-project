import Header from "../component/Header/Header";
import HeroSection from "../component/HeroSection/HeroSection";
import HowItWorksSection from "../component/HowItWorksSection/HowItWorksSection";
import FreeMeetingSection from "../component/FreeMeetingSection/FreeMeetingSection";
import ClientsSection from "../component/ClientsSection/ClientsSection";
import Articles from "../component/Articles/Articles";
import Marketing from "../component/Marketing/Marketing";
import Footer from "../component/Footer/Footer";



function Homepage() {
  return (
    <div>

    <Header />
    <HeroSection />
    <HowItWorksSection />
    <FreeMeetingSection />
    <ClientsSection />
    <Articles />
    <Marketing />
    <Footer />
    

    </div>


  );
}

export default Homepage;