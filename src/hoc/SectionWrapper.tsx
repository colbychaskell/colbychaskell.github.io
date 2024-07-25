import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName, colStart, colEnd) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`px-0 2xl:px-2 max-w-full mx-auto relative z-0 col-start-${colStart} col-end-${colEnd}`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
