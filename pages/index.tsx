import type { ReactElement } from 'react';
import Layout from '../components/layout';
import NestedLayout from '../components/nested-layout';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <p>hellooo</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>
        <div>
          <div>
            <span>Stella Lee</span>
            <br />
            <span>a front-end web developer</span>
            <br />
            <span>based in Toronto,</span>
            <br />
            <span>who loves everything</span>
            <br />
            <span>that has to do with</span>
            <span>art, design & technology.</span>
            <br />
          </div>
          <div>
            <button>EN</button>
            <button>FR</button>
            <button>KR</button>
          </div>
        </div>
        <div>
          <h3>about</h3>
          <h1>Hello, I'm Stella!</h1>
          <p>
            Currently looking for a new client & full-time job opportunity.
            Click to learn more about me. <button>Click</button>
          </p>
        </div>
        <div>
          <h3>skills</h3>
        </div>
        <div>
          <h3>project</h3>
          <p>These are some of my recent projects.</p>
        </div>
        <div>
          <h3>devlog</h3>
          <p>What I learned & built this month.</p>
        </div>
        <div>
          <h3>lab</h3>
          <p>Random Experiments.</p>
        </div>
      </Layout>
    </>
  );
};

export default Page;
