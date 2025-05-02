import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import MortgageResources from "./components/MortgageResources";
import MortgageFooter from "./components/MortgageFooter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculators from "./components/NavComponents/Calculators";
import MortgageCalculator from "./components/NavComponents/MortgageCalculator";
import LoanCalculator from "./components/NavComponents/LoanCalculator";
import PrincipalCalculator from "./components/NavComponents/PrincipalCalculator";
import LoanTypeSelector from "./components/NavComponents/LoanTypeSelector";
import Sidebar from "./components/Sidebar";
import FeaturedAreas from "./components/FeaturedAreas";
import RealEstateServices from "./components/RealEstateServices";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import NapkinAnalysis from "./components/NavComponents/NapkinAnalysis";
import Contact from "./components/Contact";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);
  const [isSidebarOn, setIsSidebarOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 770) {
        setIsSidebarOn(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const handleBurgerClick = () => {
    setIsSidebarOn((prev) => !prev);
  };

  return (
    <>
      <Router>
        <div className="relative min-h-screen w-full overflow-hidden sm:block lg:flex z-20">
          <div className="bg-[#ECF0F1]">
            <Navbar isSidebarOn={isSidebarOn} setIsSidebarOn={setIsSidebarOn} handleBurgerClick={handleBurgerClick} setIsModalOpen={setIsModalOpen} />
            <div className="fixed w-[200px] h-screen bg-fixed bg-cover bg-center z-20 ">
              {/* <div className="lg:hidden sm:block absolute " onClick={handleBurgerClick}>
            <BurgerIcon />
          </div> */}
              {isSidebarOn && (
                <div className=" lg:block absolute lg:relative left-2 top-[25vh] w-full h-screen z-20" >
                  <Sidebar setIsSidebarOn={setIsSidebarOn} setIsModalOpen={setIsModalOpen} />
                </div>
              )}
            </div>
            <Routes>
              <Route path="/" element={
                <>
                  <section className="w-[100vw] flex justify-center" id="home">
                    <HomePage />
                  </section>
                  <section className="w-[100vw] flex justify-center" id="about">
                    <WhyChooseUs/>
                  </section>
                  <section className="w-[100vw] flex justify-center">
                    <FeaturedAreas />
                  </section>
                  <section className="w-[100vw] flex justify-center" id="services">
                    <RealEstateServices />
                  </section>
                  {/* <section className="w-[100vw] flex justify-center">
                    <MortgageResources />
                  </section> */}
                  <section className="w-[100vw] flex justify-center" id="testimonials">
                    <Testimonials />
                  </section>
                  
                  {/* <HomePage />
                <MortgageResources /> */}
                  {/* <MortgageFooter/> */}
                </>
              } />
              <Route path="/mortgage-calculators" element={<Calculators />} />
              <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
              <Route path="/loan-calculator" element={<LoanCalculator />} />
              <Route path="/principal-calculator" element={<PrincipalCalculator />} />
              <Route path="/select-loantype" element={<LoanTypeSelector />} />
              <Route path="/napkin-analysis" element={<NapkinAnalysis />} />
            </Routes>
            <div id="contact">
              <Contact />
              <MortgageFooter />
            </div>
              
          </div>
          <ToastContainer
              position="bottom-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
            />
        </div>

      </Router>
      {/* <div className="bg-[#F1F5FA]">
        <Navbar />
        <HomePage />
        <MortgageResources />
        <MortgageFooter/>
      </div> */}
    </>
  );
}

export default App;
