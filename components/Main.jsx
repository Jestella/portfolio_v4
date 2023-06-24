import Image from "next/image";
import Link from "next/link";

import Navbar from "./Navbar";

import profileImage from "../public/src/assets/images/profile.jpeg";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="main-image">
          <Link href="/about">
            <Image
              src={profileImage}
              width={250}
              height={250}
              alt="Stella Lee"
              className="profile-image"
            />
          </Link>
        </div>
        <div className="main-content">
          <span>Stella Lee</span>
          <br />
          <span>a front-end web developer</span>
          <br />
          <span>based in Toronto,</span>
          <br />
          <span className="gradient-text">who loves everything</span>
          <br />
          <span className="gradient-text">that has to do with</span>
          <br />
          <span className="gradient-text">art, design & technology.</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
