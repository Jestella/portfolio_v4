import projectData from '../json/projectData.json';

import Button from './Button';

const PortfolioItems = () => {
  return (
    <div>
      {projectData.map(
        (
          {
            title,
            year,
            imageUrl,
            technologies,
            sub,
            liveDemo,
            gitHub,
            description1,
            description2,
          },
          index
        ) => (
          <div key={index} className='project-item'>
            <h2 className='project-name'>
              {title} / {year}
            </h2>
            <div className='project-container'>
              <div className='project-image-container'>
                {/* <Image
              src={item.imageUrl}
              className='project-image'
              alt='project-image'
              layout='fill'
            ></Image> */}
                <picture>
                  <img src={imageUrl} alt='Project image' />
                </picture>
              </div>
              <div className='project-content-container'>
                <p className='project-technologies'>{technologies}</p>
                <h3 className='project-subname'>{sub}</h3>
                <div className='project-btn'>
                  <Button>
                    <a href={liveDemo} target='_blank' rel='noreferrer'>
                      live demo
                    </a>
                  </Button>
                  <Button>
                    <a href={gitHub} target='_blank' rel='noreferrer'>
                      github
                    </a>
                  </Button>
                </div>
                <p>&#8226; {description1}</p>
                <p>&#8226; {description2}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PortfolioItems;
