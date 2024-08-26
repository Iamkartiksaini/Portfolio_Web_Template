import "../Styles/First_Vh.scss";


const First_vh = () => {
  return (
    <>
      <div className="First_Vh " id="Home">
        <div className="text_intro">
          <div className="Minimals_text">
            <h2>Hi, I am</h2>
            <div className="MainText">
              <h1>Name</h1>
            </div>
            <p>
              And I am a full stack developer. I am passionate about building
              web applications and constantly learning new technologies.{" "}
            </p>
          </div>
          <div className="Preview">
            <button>
              <a aria-label="Go to contacts" rel="noreferrer" href="#links">Contact</a>
            </button>
            <button>
              {" "}
              <a aria-label="View Graphical Resume" rel="noreferrer" href="#About">View Resume</a>{" "}
            </button>
          </div>
          <div className="findOn">
            <div className="available_text">
              <p>KEY SKILLS</p>
            </div>
            <div className="available_icons">
              <p>Html</p>
              <p>Css</p>
              <p>Javascript</p>
              <p>React Js</p>
              <p>Next Js</p>
              <p>Express</p>
              <p>Mongoose</p>
              <p>MongoDB</p>
              <p>NodeJs</p>
              <p>Figma</p>
              <p>Chat-GPT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default First_vh;
