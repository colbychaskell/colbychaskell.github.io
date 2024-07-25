import { SpacemanCanvas } from '.';
import Spline from '@splinetool/react-spline';
import { motion, useAnimation } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import Contact from "../components/Contact";
import Link from "./Link";

const Experience = () => {
  return (<div className="flex flex-col col-start-5 col-end-9">
    <p className="opacity-40 mb-3">README.md</p>
    <p className="hover:text-[#ffbd5e]">
      Draper<br />2023-Present
    </p>
  </div>
  );
};

const Readme = () => {
  return (<div className="flex flex-col col-start-1 col-end-7">
    <p className="opacity-40 mb-3">README.md</p>
    <p className="max-w-prose">
      Hello 👋
      <br /><br />
      I am a Software Engineer with experience in Embedded Software and Web Development.
      <br /><br />
      I currently work at <Link className='text-sm' text="Draper" to="#" />, where
      I am developing real-time and distributed simulation software for aerospace
      systems. I write most of this code in C++, and I work heavily on our DevOps
      infrastructure using technologies such as Docker, Gitlab CI, CMake, and Linux.
      <br /><br />
      In my spare time I work on full-stack web applications for <Link className='text-sm' text="TransitMatters" to="#" />, a Boston-based transit advocacy group. I use technologies such as React, NodeJS, Django, and PostgreSQL among other technologies.
      <br /><br />
      I graduated from the <Link className='text-sm' text="University of Southern California" to="#" />, B.S. <Link className='text-sm' text="Computer Engineering and Computer Science" to="#" /> in 2022.
    </p>
  </div >
  );
};

const Hero = ({ scrollContainer }) => {
  return (
    <section id="hero"
      className="my-8 col-start-1 col-end-13 grid grid-cols-12 gap-6 grid-layout text-left overflow-x-clip"
    >
      <Readme />
      <div className="col-start-7 col-end-13">
        <Contact />
      </div>
      {/* <Experience /> */}
      {/* <p className="">Press &lt;space&gt; to continue...<br />↓</p> */}
      {/* <SpacemanCanvas scrollContainer={scrollContainer} /> */}
    </section>
  );
};

export default Hero;
