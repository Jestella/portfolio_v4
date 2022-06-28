import Link from 'next/link';
import projectStyles from '../styles/Project.module.css';

const ProjectItem = ({ project }) => {
  return (
    <Link href={`/project/${project.id}`}>
      <a className={projectStyles.card}>
        <h3>{project.title}</h3>
        <p>{project.sub}</p>
      </a>
    </Link>
  );
};

export default ProjectItem;
