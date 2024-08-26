import { useEffect, useState } from "react";
import "../Styles/Second_Vh.css";

const Second_vh = () => {

  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {

    const x = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", () => {
      requestAnimationFrame(x);
    });
  }, [])
  return (
    <div className="Second_Vh">
      <div className="intro">
        <p>UI</p>
        <h1>
          What Services you <br /> will Get from me!
        </h1>
      </div>
      <div className="cardIntro">
        <div
          className={scrollPos > 250 ? "animatedLeft  firstCard " : "firstCard"}
        >
          <div>
            <i className="fa-solid fa-code"></i>
          </div>
          <div>
            <h3> Modern Coding</h3>
            <p>
              I am good in HTML, CSS, and JavaScript and create websites that
              perform good with clean code.
            </p>
          </div>
        </div>
        <div
          className={scrollPos > 250 ? "animatedUp  secondCard " : "secondCard"}
        >
          <div>
            <i className="fa-brands fa-react"></i>+{" "}
            <i className="fa-solid fa-server"></i>
          </div>
          <div>
            <h3>Full Stack</h3>
            <p>
              Familier with React and back-end technologies such as node.js and
              MongoDB.
            </p>
          </div>
        </div>
        <div
          className={
            scrollPos > 250 ? "animatedRight  thirdCard " : "thirdCard"
          }
        >
          <div>
            <i className="fa-solid fa-gauge-simple-high"></i>
          </div>
          <div>
            <h3>Optimized Speed</h3>
            <p>
              Focused on Clean Code for better Team Support and Optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second_vh;
