import "../Styles/Project.scss";
import { projects } from "./project_Consts";

function DisplayTextWithParagraphs({ text }) {
  const lines = text.split("\n");
  const paragraphs = lines.map((line, index) => <p key={index}>{line}</p>);
  return <>{paragraphs}</>;
}

const Projects = () => {
  return (
    <div className="Projects" id="Projects">
      <div className="P_head">
        <h1>Projects</h1>
      </div>
      <ul>
        {projects?.map((val, ind) => {
          return (
            <li className="card" key={ind}>
              {val.projectType && <span data-projectType={val.projectType} className="projectType">{val.projectType}</span>}
              <img height={350} width={350} src={val.imgSrc} alt={val.imgSrc} loading="lazy" />
              <div className="read">
                <p id="time">{val.date}</p>
                <h3 className="project_heading">{val.heading}</h3>
                {val.description !== undefined ? (
                  <DisplayTextWithParagraphs text={val.description} />
                ) : null}
              </div>
              <div className="discription">
                {val.tag.map((value, index) => {
                  return <span key={index}>{value}</span>;
                })}
              </div>
              <a href={val.link} target="_blank" rel="noreferrer">
                Visit
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
