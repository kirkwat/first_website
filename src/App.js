import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import NavProvider from "./context/NavContext";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>
        <NavProvider>
          <Header />
          <Home />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </NavProvider>
      </div>
      <Footer />
    </div>
  );
};

export default App;
