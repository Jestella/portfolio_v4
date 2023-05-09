import Link from 'next/link';
import Navbar from '../components/Navbar';

import DevlogItems from '../components/DevlogItems';

const Devlog = () => {
  return (
    <div className='devlog'>
      <Navbar />
      <div className='devlog-container'>
        <div className='devlog'>
          <h2 className='center'>Work & Study Log</h2>
          <DevlogItems />
        </div>
      </div>
    </div>
  );
};

export default Devlog;
