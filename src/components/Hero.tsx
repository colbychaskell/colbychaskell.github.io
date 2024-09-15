import Contact from "../components/Contact";
import Link from "./Link";

const Readme = () => {
  return (<div className="flex flex-col col-start-1 col-end-7">
    <p className="opacity-40 mb-3">README.md</p>
    <p className="max-w-prose">
      Hello 👋
      <br /><br />
      My name is Colby Haskell. I am a Software Engineer with experience in DevOps, Embedded Software, and Web Development.
      I studied <Link text="Computer Engineering and Computer Science B.S." to="https://viterbischool.usc.edu" /> at the <Link text="University of Southern California" to="https://www.usc.edu" />.
      <br /><br />
      I currently work at <Link text="Draper" to="https://www.draper.com" /> as a Simulation
      Software Engineer, volunteer at <Link text="TransitMatters" to="www.transitmatters.org" />,
      and contribute to open-source projects such as <Link text="nlohmann/json" to="https://github.com/nlohmann/json" />.
      <br /><br />
      I work with C++, TypeScript, and Python most often, but I have experience with a range of other languages.
      Technologies I use, among others, include Docker, Linux, Gitlab CI, CMake, and Node.
      <br /><br />
    </p>
  </div >
  );
};

const Hero = () => {
  return (
    <section id="hero"
      className="my-8 col-start-1 md:col-end-13 grid grid-cols-12 gap-6 grid-layout text-left overflow-x-clip"
    >
      <Readme />
      <div className="col-start-7 col-end-13">
        <Contact />
      </div>
    </section>
  );
};

export default Hero;
