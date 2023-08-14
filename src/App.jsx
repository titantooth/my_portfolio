import "./App.css";
import NavBar from "./components/navbar/navbar";
import Banner from "./components/hero/banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import ContactMe from "./components/contact/contactMe";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
