import Image from 'next/image';
import Navbar from './Navbar';

import profileImage from '../public/src/assets/images/profile.jpeg';

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='main'>
        <div className='main-image'>
          <Image
            src={profileImage}
            width={250}
            height={250}
            alt='Stella Lee'
            className='profile-image'
          />
        </div>
        <div className='main-content'>
          <span>Stella Lee</span>
          <br />
          <span>a front-end web developer</span>
          <br />
          <span>based in Toronto,</span>
          <br />
          <span className='gray1'>who loves everything</span>
          <br />
          <span className='gray2'>that has to do with</span>
          <br />
          <span className='gray3'>art, design & technology.</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
