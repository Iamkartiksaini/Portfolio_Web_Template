import { Suspense, lazy, useContext } from "react";
import Header from "./Component/Header";
import About from "./Pages/About";
import First_vh from "./Pages/First_vh";
import Second_vh from "./Pages/Second_vh";
import Third_Vh from "./Pages/Third_Vh";
import Footer from "./Pages/Footer";
import { ThemeContext } from "./themeContext";
import Activity from "./Pages/Activity";

const Projects = lazy(() => import("./Pages/Projects"));
const BG = lazy(() => import("./Component/BG"));

function App() {
  const { themeColor } = useContext(ThemeContext)
  return (
    <>
      <div id="MainContainer" className={themeColor} >
        <Header />
        <First_vh />
        <Second_vh />
        <Third_Vh />
        <About />
        <Activity />
        <Suspense fallback={<p>Loading Projects</p>}>
          <Projects />
        </Suspense>
        <Footer />
      </div>
      <Suspense fallback={<p>Loading Background Animation</p>}>
        <BG />
      </Suspense>
    </>
  );
}

export default App;
