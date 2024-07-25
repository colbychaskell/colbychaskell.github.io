import Link from "./Link";

const Contact = () => {
  return (
    <div id="contact" className="section w-full">
      <p className="opacity-40 mb-3">CONTACT.md</p>
      <p className="max-w-prose">If you are interested in any of my work, I
        actively contribute to open-source projects on <Link
          className='text-sm' text='GitHub' to='#' />, where I also
        host most of my personal projects.
        <br /><br />
        I am available for freelance work as a developer or consultant. I am also
        open to other contract or long-term employment opportunities. Please
        reach out to me on any of the platforms below:</p>
      <br />
      <ul>
        <li><Link className='text-sm' text='Email' to='#' /></li>
        <li><Link className='text-sm' text='Linkedin' to='#' /></li>
        <li><Link className='text-sm' text='GitHub' to='#' /></li>
        <li><Link className='text-sm' text='X/Twitter' to='#' /></li>
      </ul>
    </div >
  );
};

export default Contact;
