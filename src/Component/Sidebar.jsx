// import file from "../Resume.pdf";
import PropTypes from 'prop-types';

const Sidebar = ({ themeButtons, toggleTheme }) => {

    const tabsItems = [
        { name: "Home", link: "#Home" },
        { name: "About", link: "#About" },
        { name: "Projects", link: "#Projects" },
        { name: "Contact", link: "#links" },
    ];

    return (
        <div className="sm-navigations">
            <span id="openButton">Menu</span>
            <ul id="ul" className="close hide">
                {tabsItems.map((val, ind) => {
                    return (
                        <a aria-label={val.name} href={val.link} key={ind}>{val.name}</a>
                    );
                })}
                <div className="themeBtn">
                    <button>Theme</button>
                    {themeButtons.map((item, index) => {
                        return (
                            <svg
                                key={index}
                                onClick={() => toggleTheme(item.value)}
                                width="41" height="52" viewBox="0 0 41 52">
                                <path d="M34 8.5H40V19.5L17 22.5V31.5M17 31.5H14V50.5H20V31.5H17Z" stroke="cadetblue" strokeWidth="3" />
                                <rect y="0.5" width="38" height="16" rx="2" fill={item.color} /></svg>);
                    })}
                </div>
                <a aria-label="download kartik saini resume" href="#About" className="resume" >
                    Download Resume
                </a>
            </ul>
        </div>
    )
}
Sidebar.propTypes = {
    themeButtons: PropTypes.any.isRequired,
    toggleTheme: PropTypes.any.isRequired
};


export default Sidebar