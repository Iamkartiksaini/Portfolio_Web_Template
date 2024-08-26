import { useState } from "react";
import "./Slide.css";
import rocket from "../rocket.png";

const Slide = () => {
  //   console.log(array);
  const [current, setCurrent] = useState(0);
  const cards = [
    { h1: "HTML", i: "fa-brands fa-html5" },
    { h1: "CSS", i: "fa-brands fa-css3-alt" },
    { h1: "SCSS", i: "fa-brands fa-sass" },
    { h1: "JAVASCRIPT", i: "fa-brands fa-js" },
    { h1: "REACT", i: "fa-brands fa-react" },
    { h1: "JAVASCRIPT", i: "fa-brands fa-js" },
    { h1: "BOOTSTRAP", i: "fa-brands fa-bootstrap" },
    { h1: "NODE.JS", i: "fa-brands fa-node" },
    { h1: "EXPRESS", i: "fa-solid fa-train" },
    { h1: "MONGO_DB", i: "fa-solid fa-leaf" },
    { h1: "RESTAPI", i: "fa-solid fa-server" },
  ];
  if (current >= cards.length) {
    setCurrent(0);
  }

  return (
    <>
      {cards.map((val, index) => {
        let x;
        if (current == cards.length - 1 && index == 0) {
          x = {
            left: "80%",
            zIndex: 6,
            scale: 0.7,
            backgroundColor: "rgb(0, 255, 255)",
          };
        }
        if (current == 0 && index == cards.length - 1) {
          x = {
            left: "-50%",
            zIndex: 3,
            scale: 0.7,
            backgroundColor: "#2196f3",
          };
        }

        return (
          <div
            className={
              (current == index
                ? "card curr "
                : current > index
                  ? "card left"
                  : current < index
                    ? "card right"
                    : "") + (current + 1 == index ? " next " : "")
            }
            style={x}
            key={index}
          >
            <h3>{val.h1}</h3>
            <img src={rocket} height="90px" width="90px" alt="" loading="lazy" />
            <i className={val.i}></i>
          </div>
        );
      })}
      <button onClick={() => setCurrent((pre) => (pre += 1))}>Next</button>
    </>
  );
};

export default Slide;
