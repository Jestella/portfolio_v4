import Link from 'next/link';
import projectData from '../json/projectData.json';

const ProjectPreview = () => {
  return (
    <div className='cards'>
      {projectData.map(({ imageUrl, title, technologies }, index) => (
        <div className='card' key={index}>
          <div className='card-img'>
            {/* <Image src={imageUrl} alt='project image' layout='fill'></Image> */}
            <picture>
              <img src={imageUrl} alt='Project image' />
            </picture>
          </div>
          <div className='card-text'>
            <p className='card-project-name'>{title}</p>
            <p className='card-project-subname'>{technologies}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPreview;
