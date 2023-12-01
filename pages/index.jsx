import Image from "next/image";
import Link from "next/link";

import SectionTitle from "../components/ui/SectionTitle";
import Main from "../components/Main";
import Button from "../components/ui/Button";
import ResponsiveIcons from "../components/ui/ResponsiveIcons";
import ProjectPreview from "../components/ProjectPreview";

import { server } from "../config";

import {
  FaAngular,
  FaReact,
  FaNodeJs,
  FaJs,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";

import typescript from "../public/src/assets/images/typescript.png";
import sass from "../public/src/assets/images/sass.png";
import nextjs from "../public/src/assets/images/next-js.png";
import memoji from "../public/src/assets/images/memoji.png";

export default function Home({}) {
  return (
    <>
      <section className="home">
        <ResponsiveIcons />
        <Main />
      </section>

      <section className="home-project">
        <SectionTitle>project</SectionTitle>
        <div className="home-project-container">
          <p className="home-project-intro">
            These are some of my recent projects.
          </p>
          <ProjectPreview />
        </div>
      </section>

      <section className="skills">
        <SectionTitle>skills</SectionTitle>
        <div className="skills-container">
          <ul>
            <li>
              <FaReact color="#1cc5dc" />
              <p>React</p>
            </li>
            <li>
              <Image src={nextjs} width={40} height={40} alt="nextjs" />
              <p>Next.js</p>
            </li>
            <li>
              <FaAngular color="#DD2331" />
              <p>Angular</p>
            </li>
            <li>
              <FaNodeJs color="#4aa96c" />
              <p>Node.js</p>
            </li>
            <li>
              <Image
                src={typescript}
                width={40}
                height={40}
                alt="typescript"
                className="typescript"
              />
              <p>TypeScript</p>
            </li>
            <li>
              <FaJs color="#fdca40" />
              <p>JavaScript</p>
            </li>
            <li>
              <Image
                src={sass}
                width={40}
                height={40}
                alt="sass"
                className="sass"
              />
              <p>Sass</p>
            </li>
            <li>
              <FaBootstrap color="#542e71" />
              <p>Bootstrap</p>
            </li>
            <li>
              <FaCss3Alt color="#2978b5" />
              <p>CSS3</p>
            </li>
            <li>
              <FaHtml5 color="#ff5200" />
              <p>HTML5</p>
            </li>
          </ul>
        </div>
      </section>

      <div className="home-devlog-lab">
        <section className="home-devlog">
          <SectionTitle>devlog</SectionTitle>
          <div className="home-devlog-container">
            <h2>💻</h2>
            <p>What I am currently working on.</p>
            <div className="center">
              <Button>
                <Link href="/devlog">More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="home-lab">
          <SectionTitle>lab</SectionTitle>
          <div className="home-lab-container">
            <h2>💡</h2>
            <p>Random Experiments.</p>
            <div className="center">
              <Button>
                <Link href="/lab">More</Link>
              </Button>{" "}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
