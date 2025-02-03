import NavBar from "./components/navBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Certificate from "./components/Certificate/certificate";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Intro />

      <About />

      <Certificate />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
