import Link from 'next/link';
import Image from 'next/image';
import projectStyles from '../styles/Project.module.scss';

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
