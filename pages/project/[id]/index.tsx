import Link from 'next/link';
import { useRouter } from 'next/router';
import { server } from '../../../config';
import Meta from '../../../components/Meta';

const project = ({ project }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Meta title={project.title} />
      <h1>{project.title}</h1>
      <p>{project.sub}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/projects/${context.params.id}`);

  const project = await res.json();

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/projects`);

  const projects = await res.json();

  const ids = projects.map((project) => project.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default project;
