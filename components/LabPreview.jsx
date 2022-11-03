import Image from 'next/image';
import SImage from '../public/src/assets/images/S.png';

function LabPreview() {
  return (
    <div>
      <Image
        src={SImage}
        width={250}
        height={250}
        alt='visual with javascript'
        className='T-image'
      />
      <br />
      <p>Random Experiments.</p>
    </div>
  );
}

export default LabPreview;
