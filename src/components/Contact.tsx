import Link from './Link'

const Contact = () => {
  return (
    <div id="contact" className="section w-full">
      <p className="opacity-40 mb-3">CONTACT.md</p>
      <p className="max-w-prose">
        If you would like to see more of my work, I actively contribute to
        open-source projects on <Link text="GitHub" to="#" />, where I also host
        most of my personal projects.
        <br />
        <br />I am available for freelance work as a developer or consultant. I
        am also open to other contract or long-term employment opportunities.
        Please reach out to me on any of the platforms below:
      </p>
      <br />
      <ul>
        <li>
          <Link text="Email" to="#" />
        </li>
        <li>
          <Link text="Linkedin" to="#" />
        </li>
        <li>
          <Link text="GitHub" to="#" />
        </li>
        <li>
          <Link text="X/Twitter" to="#" />
        </li>
      </ul>
    </div>
  )
}

export default Contact
