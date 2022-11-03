import Link from 'next/link';
import Navbar from '../components/Navbar';

import Button from '../components/Button';
import DevlogItems from '../components/DevlogItems';

const Devlog = () => {
  return (
    <div className='devlog'>
      <Navbar />
      <div className='devlog-container'>
        <h1 className='center'>2022</h1>
        <DevlogItems />
      </div>
    </div>
  );
};

export default Devlog;
