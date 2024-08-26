import "../Styles/About.scss";

const About = () => {
  const skills = [
    "Html",
    "Css",
    "Scss",
    "Bootstrap",
    "Tailwind.css",
    "Gsap",
    "Javascript",
    "React Prime",
    "React Js",
    "Next Js",
    "Redux",
    "Node Js",
    "Express Js",
    "Websocket",
    "Mongoose",
    "MongoDB",
    "Figma",
    "Chat-GPT",
  ];

  const d = new Date("2001-06-23");
  const d2 = new Date();
  var years = d2.getFullYear() - d.getFullYear()


  return (
    <div className="About" id="About">
      <div className="centered">
        <div className="card">
          <div className="profileImg"></div>
          <div className="name">
            <h1>Name</h1> <p>emailaddress@gmail.com</p>
            <p>
              <a aria-label="kartik saini github account link" target="_blank" href="https://github.com/">
                https://github.com/account
              </a>
            </p>
            <p style={{ paddingTop: ".5rem", color: "var(--primary)" }}>
              <a aria-label=" github account link" target="_blank" href="">
                Working At XYZ
              </a>
            </p>
          </div>
        </div>
        <div className="bio">
          <div className="area">
            <span>
              <h3>Current Location</h3>
              <p>Loc</p>
            </span>
            <span>
              <h3>Hometown</h3>
              <p> Gurgaon,HR</p>
            </span>
            <span>
              <h3>
                Gender , Age <br />
              </h3>
              <p> Male ,{years} years</p>
            </span>
          </div>
          <div className="bhasha">
            <h3>Languages</h3>
            <p>Hindi</p>
            <p>English</p>
          </div>
          <div className="education">
            <h3>Education</h3>
            <p>Education level : Graduate</p>
            <p>Bachelor of Computer Application from Gurugram University</p>
            <p>Batch : 2019-2022</p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="discription">
              {skills.map((value, index) => {
                return <span key={index}>{value}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
