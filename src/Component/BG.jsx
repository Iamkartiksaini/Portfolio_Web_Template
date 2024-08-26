import { useEffect, useState } from "react";
import "../Styles/CoolBG.scss";

const BG = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    setBoxes(createBoxes());
  }, []);

  const createBoxes = () => {
    const items = [];
    for (let index = 0; index < 15; index++) {
      const min_width = (Math.random() * 150).toFixed(0);
      const pos = (Math.random() * window.innerWidth).toFixed(0);
      const box_width = min_width > 20 ? min_width : min_width + 20;
      const position =
        pos + min_width >= window.innerWidth ? pos - min_width : pos;
      const delay =
        index < 5
          ? (Math.random() * 1).toFixed(0)
          : (Math.random() * 20).toFixed(0);
      items.push({
        box_width,
        position,
        delay,
      });
    }
    return items;
  };
  var tm

  window.addEventListener("scroll", () => {
    if (tm) {
      clearTimeout(tm)
    }
    tm = setTimeout(() => {
      requestAnimationFrame(catchUpToViewPort);
    }, 100);
  });

  const catchUpToViewPort = () => {
    document.getElementById("area").style.transform = `translateY(${window.scrollY}px)`
  };
  return (
    <div id="area">
      <ul className="circles">
        {boxes.map((val, ind) => {
          let wx = val.box_width > 150 ? 40 : val.box_width;
          return (
            <li
              style={{
                width: wx + "px",
                height: wx + "px",
                left: val.position + "px",
                animationDelay: val.delay + "s",
              }}
              key={ind}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default BG;
