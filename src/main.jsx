import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./themeContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
