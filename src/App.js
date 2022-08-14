import Header from "./components/Header";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import NavProvider from "./context/NavContext";
import Footer from "./components/Footer";
import {createTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core';

//TODO
  //finish designing site
  //add animations
  //update to material ui v5
    //fix responsiveness for experience cards
  //clean up code

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavProvider>
          <Header />
          <Home />
          <Projects />
          <Experience />
          <Contact />
        </NavProvider>
        <Footer />
    </ThemeProvider>
    </div>
  );
};

export default App;
