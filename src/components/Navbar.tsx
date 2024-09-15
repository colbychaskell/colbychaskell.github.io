import { motion } from 'framer-motion';

interface NavbarLinkProps {
  text: string,
  to: string,
  className?: string
}

const NavbarLink = (props: NavbarLinkProps) => {
  return (
    <p className="mx-2">
      <a href={props.to}
        className={`${props.className} hover:bg-[#ffbd5e] hover:bg-opacity-10 hover:underline
        hover:text-[#ffbd5e] hover:cursor-pointer transition-transform duration-300`}>
        {props.text}
      </a>
      <sup className="leading-[0] font-[300] text-[#ffbd5e]">↗</sup>
    </p>
  );

}

const Navbar = (props: { isVisible: Boolean }) => {
  return (
    <motion.nav
      animate={props.isVisible ? "visibile" : "hidden"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      transition={{ duration: 0.5 }}
      className={`${props.isVisible ? '' : 'hidden'} bg-[#121212] fixed z-10 w-full px-8`}>
      <div className="w-full flex text-lg font-light py-6 justify-between border-b border-b-[#7b8496]">
        <a href="#" className="px-1 hover:text-[#ffbd5e] hover:bg-[#ffbd5e] hover:bg-opacity-10">Colby Haskell</a>
        <div className="sm:flex flex-row hidden">
          <NavbarLink text="portfolio" to="#portfolio" />
          {/* <NavbarLink text="blog" to="#blog" /> */}
          {/* <NavbarLink text="contact" to="#contact" /> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
