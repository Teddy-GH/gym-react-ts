import { useState, useEffect } from "react";
import Navbar from "@/scenes/navbar";
import { SELECTEDPAGE } from "@/shared/types";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses";
import ContactUs from "./scenes/contactUs";
import Footer from "@/scenes/footer";


function App() {
  const [selectedPage, setSelectedPage] = useState<SELECTEDPAGE>(SELECTEDPAGE.HOME);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SELECTEDPAGE.HOME);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // clear event when componet dissmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
