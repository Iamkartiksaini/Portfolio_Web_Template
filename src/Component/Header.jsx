import { useContext } from "react";
import "../Styles/Header.scss";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../themeContext";

const Header = () => {
  const { themeColor, setThemeColor } = useContext(ThemeContext)

  const tabsItems = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "Projects", link: "#Projects" },
    { name: "Contact", link: "#links" },
  ];

  const themeButtons = [
    { value: "skyblue", color: "var(--blue-primary)" },
    { value: "green", color: "var(--green-primary)" },
    { value: "orange", color: "var(--orange-primary)" },
  ]
  const filteredThemeButtons = () => {
    return themeButtons.filter((item) => {
      return themeColor !== item.value
    })
  }

  const newArr = filteredThemeButtons()

  const toggleTheme = (color) => {
    setThemeColor(color)
  }

  return (
    <header className="Header2">
      <div className="logo">
        <svg id="wing" width="40" height="40" viewBox="0 0 540 540" fill="none">
          <path
            id="path"
            d="M125.62 281.144L125.62 234.128C125.62 226.427 129.168 219.156 135.239 214.419L304.54 82.2985C326.363 65.2687 355.58 91.0695 341.381 114.831L250.053 267.668C245.129 275.908 245.357 286.238 250.64 294.252L339.482 429.025C354.594 451.95 327.062 478.943 304.44 463.381L136.45 347.814C129.67 343.15 125.62 335.447 125.62 327.217L125.62 281.144Z"
            fill="#D9D9D9"
          />
          <path
            id="path"
            d="M28.7151 487.645C73.445 475.717 59.033 166.608 9.9999 95.9999C-40 24 134 96 134 96C134 96 140.293 489.748 134 488C129.684 486.801 57.8966 487.247 28.7151 487.645C27.8331 487.88 26.9281 488 26 488C10.9233 488 15.3519 487.828 28.7151 487.645Z"
            fill="#D9D9D9"
          />
        </svg>
        <div className="themeBtn">
          <button>Theme</button>
          {newArr.map((item, index) => {
            if (themeColor === item.value) return
            return (
              <p key={index} style={{ backgroundColor: item.color }} onClick={() => toggleTheme(item.value)}></p>
            );
          })}
        </div>
      </div>
      <div className="navigations">
        {tabsItems.map((val, ind) => {
          return (
            <a href={val.link} aria-label={val.name} key={ind}>
              {val.name}
            </a>
          );
        })}
        <a href={"#About"} aria-label="download kartik saini resume" className="resume" >
          Download Resume
        </a>
      </div>
      <Sidebar toggleTheme={toggleTheme} themeButtons={newArr} />
    </header>
  );
};

export default Header;
