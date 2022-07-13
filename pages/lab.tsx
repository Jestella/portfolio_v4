import Link from 'next/link';
import { useState } from 'react';

function Lab() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div className='lab'>
      <div className='lab-container'>
        <h1>Coming Soon...💡</h1>
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
