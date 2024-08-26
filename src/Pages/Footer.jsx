import "../Styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="links" className="links">
        <a aria-label="Github accound link" rel="noreferrer" href="#" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a aria-label="Twitter accound link" rel="noreferrer" href="#" target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a aria-label="Discord accound link" rel="noreferrer" id="discord" href="#About" title="#">
          <i className="fa-brands fa-discord"></i>
        </a>
        <a aria-label="Gmail accound link" rel="noreferrer" id="gmail" href="#About" title="email.address@gmail.com">
          <i className="fa-sharp fa-solid fa-envelope"></i>
        </a>
      </div>
      <p style={{ fontSize: ".7rem" }}>
        Crafted with ❤️ by
        <span id="a2" style={{ marginLeft: "4px", color: "var(--primary)" }}>
          <strong>Kartik Saini</strong> 🚀
        </span>
      </p>
    </footer>
  );
};

export default Footer;
