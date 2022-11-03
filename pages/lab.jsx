import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';

function Lab() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div className='lab'>
      <Navbar />
      <div className='lab-container'>
        <h1>Coming Soon...💡</h1>
        <p>I am still working on this page. Thanks for your patience!</p>
        <Link href='/' className='btn'>
          <button className='dev-btn'>Home</button>
        </Link>
        {/* <div>
          <button onClick={handleClick}>{likes} Likes</button>
        </div> */}
      </div>
    </div>
  );
}

export default Lab;
