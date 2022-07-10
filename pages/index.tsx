import Image from 'next/image';
import Link from 'next/link';

import ProjectList from '../components/ProjectList';
import SectionTitle from '../components/SectionTitle';
import Main from '../components/Main';
import Button from '../components/Button';

import { server } from '../config';

import {
  FaCodeBranch,
  FaCode,
  FaWrench,
  FaCog,
  FaStarOfLife,
  FaReact,
  FaNodeJs,
  FaJs,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
} from 'react-icons/fa';

import typescript from '../public/src/assets/images/typescript.png';
import sass from '../public/src/assets/images/sass.png';
import nextjs from '../public/src/assets/images/next-js.png';
import memoji from '../public/src/assets/images/memoji.png';

export default function Home({ projects }) {
  // let navigate = useNavigate();

  return (
    <>
      <div>
        <div className='home'>
          <div className='image_container hue_shift'>
            <FaCodeBranch className='fa-code-branch responsive_icon' />
            <FaCog className='fa-cog responsive_icon' />
            <FaCode className='fa-code responsive_icon' />
            <FaWrench className='fa-wrench responsive_icon' />
            <FaStarOfLife className='fa-star responsive_icon' />
          </div>

          <Main />
        </div>
      </div>

      <div>
        <div className='about'>
          <SectionTitle>about</SectionTitle>

          <div className='about_container'>
            <h1>
              Hello, I'm Stella!&nbsp;
              <Image
                src={memoji}
                width={100}
                height={100}
                alt='memoji'
                className='Memoji'
              />
            </h1>
            <p>
              Currently looking for a new client & full-time job opportunity.
              Click to learn more about me. &nbsp;
              <Link href='/about'>
                <Button>Click</Button>
              </Link>
            </p>
          </div>
        </div>

        <div className='skills'>
          <SectionTitle>skills</SectionTitle>

          <div className='skills_container'>
            <ul>
              <li>
                <FaReact color='#1cc5dc' />
                <p>React</p>
              </li>
              <li>
                <Image
                  src={nextjs}
                  width={40}
                  height={40}
                  alt='nextjs'
                  className='sass'
                />
                <p>Next.js</p>
              </li>
              <li>
                <FaNodeJs color='#4aa96c' />
                <p>Node.js</p>
              </li>
              <li>
                <Image
                  src={typescript}
                  width={40}
                  height={40}
                  alt='typescript'
                  className='typescript'
                />
                <p>TypeScript</p>
              </li>
              <li>
                <FaJs color='#fdca40' />
                <p>JavaScript</p>
              </li>
              <li>
                <Image
                  src={sass}
                  width={40}
                  height={40}
                  alt='sass'
                  className='sass'
                />
                <p>Sass</p>
              </li>
              <li>
                <FaBootstrap color='#542e71' />
                <p>Bootstrap</p>
              </li>
              <li>
                <FaCss3Alt color='#2978b5' />
                <p>CSS3</p>
              </li>
              <li>
                <FaHtml5 color='#ff5200' />
                <p>HTML5</p>
              </li>
            </ul>
          </div>
        </div>
        {/* <GoToTop /> */}
      </div>

      <div>
        <SectionTitle>project</SectionTitle>

        <p>These are some of my recent projects.</p>
        <ProjectList projects={projects} />
      </div>
      <div className='home-devlog'>
        <SectionTitle>devlog</SectionTitle>

        <div className='home-devlog-container'>
          <h2>💻</h2>
          <p>What I learned & built this month.</p>
          <div className='center'>
            <Button>More</Button>
          </div>
        </div>
      </div>
      <div className='home-lab'>
        <SectionTitle>lab</SectionTitle>

        <div className='home-lab-container'>
          <h2>💡</h2>
          <p>Random Experiments.</p>
          <div className='center'>
            <Button className='dev-btn'>More</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};
