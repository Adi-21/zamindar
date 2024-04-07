import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[5rem] lg:pt-[6rem] overflow-hidden lg:backdrop-blur-sm">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Footer />
      </div>

      <ButtonGradient />
      {/* <div className="flex items-center justify-center h-screen">
        <p className="text-black">Hii, This is Aditya </p>
      </div> */}
    </>
  );
};

export default App;
