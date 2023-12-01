import Link from "next/link";
import projectData from "../json/projectData.json";

const ProjectPreview = () => {
  return (
    <div className="cards">
      {projectData.map(({ imageUrl, title, technologies }, index) => (
        <div className="card" key={index}>
          <picture className="card-img">
            <img
              src={imageUrl}
              alt="Project image"
              style={{ borderRadius: "20px" }}
            />
          </picture>

          <div className="card-text">
            <p className="card-project-name">{title}</p>
            <p className="card-project-tech">{technologies}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPreview;
