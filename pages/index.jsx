import Image from 'next/image';
import Link from 'next/link';

import SectionTitle from '../components/SectionTitle';
import Main from '../components/Main';
import Button from '../components/Button';
import ResponsiveIcons from '../components/ResponsiveIcons';
import ProjectPreview from '../components/ProjectPreview';
import LabPreview from '../components/LabPreview';

import { server } from '../config';

import {
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

export default function Home({}) {
  return (
    <>
      <div>
        <div className='home'>
          <ResponsiveIcons />
          <Main />
        </div>
      </div>

      <div>
        <div className='about'>
          <SectionTitle>about</SectionTitle>

          <div className='about-container'>
            <h1>
              Hello, I&apos;m Stella!&nbsp;
              <Image
                src={memoji}
                width={80}
                height={80}
                alt='memoji'
                className='Memoji'
              />
            </h1>
            <p>
              Currently looking for a new client & full-time job opportunity.
              Click to learn more about me. &nbsp;
              <Button>
                <Link href='/about'>More</Link>
              </Button>
            </p>
          </div>
        </div>

        <div className='skills'>
          <SectionTitle>skills</SectionTitle>

          <div className='skills-container'>
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
      </div>

      <div>
        <div className='home-project'>
          <SectionTitle>project</SectionTitle>
          <div className='home-project-container'>
            <p>These are some of my recent projects.</p>
            <ProjectPreview />
          </div>
        </div>
      </div>
      <div className='home-devlog'>
        <SectionTitle>devlog</SectionTitle>

        <div className='home-devlog-container'>
          <h2>💻</h2>
          <p>What I am learning & building this month.</p>
          <div className='center'>
            <button className='dev-btn'>
              <Link href='/devlog'>More</Link>
            </button>
          </div>
        </div>
      </div>
      <div className='home-lab'>
        <SectionTitle>lab</SectionTitle>

        <div className='home-lab-container'>
          <h2>💡</h2>
          <LabPreview />

          <div className='center'>
            <button className='dev-btn'>
              <Link href='/lab'>More</Link>
            </button>{' '}
          </div>
        </div>
      </div>

      {/* <div className='home-blog'>
        <SectionTitle>blog</SectionTitle>

        <div className='home-blog-container'>
          <BlogPreview posts={posts} />
        </div>
      </div> */}
    </>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/posts`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };
