import Link from 'next/link';

import Button from './Button';

import './ErrorPage.styles.scss';

const ErrorPage = () => {
  return (
    <div>
      <h1>
        Oops. This page doesn't exist.
        <Link href='/' className='btn'>
          <Button>Home</Button>
        </Link>
      </h1>
    </div>
  );
};

export default ErrorPage;
