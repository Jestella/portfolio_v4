import Image from 'next/image';
import Navbar from '../components/Navbar';
import memoji from '../public/src/assets/images/memoji.png';

const About = () => {
  return (
    <>
      <div className='about'>
        <Navbar />
        <div className='about-container'>
          <h1>
            Hello, I`&apos;m Stella!&nbsp;
            <Image
              src={memoji}
              width={60}
              height={60}
              alt='memoji'
              className='Memoji'
            />
          </h1>
          <p>
            I am a self-taught front end web developer,
            <br />
            who has a <span>strong passion</span> for building creative websites
            and learning new skills.
          </p>
          <h3>When it comes to work</h3>
          <p>
            As a firm believer that <span>tenacity and grit</span> are drivers
            of success, I am <span>disciplined and do not give up easily </span>
            on complex or challenging tasks. I approach every single project
            with an <span>ownership mentality</span> and push the limits to get
            things done.
          </p>
          <h3>Outside of work</h3>
          <p>
            When I am not staring at my code, I walk or bike around the city,
            pet someone else’s dog and watch sunsets.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
