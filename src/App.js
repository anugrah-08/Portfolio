import NavBar from "./components/navBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import { BrowserRouter }from "react-router-dom";
import Certificate from "./components/Certificate/certificate";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        
      <NavBar />

      <Intro />

      <About />

      <Certificate />

      <Contact />

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
