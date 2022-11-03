import Head from 'next/head';

const Meta = (props) => {
  const { title, keywords, description } = props;

  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />

      <meta charSet='utf-8' />
      <link rel='icon' href='/logo.ico' />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Stella Lee | Front-end Developer',
  keywords: 'Front-end Developer, Toronto based Web Developer',
  description: 'A selt-taught web developer',
};

export default Meta;
