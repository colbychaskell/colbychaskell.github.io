import { motion } from 'framer-motion'
import React from 'react'

import { textVariant } from '../utils/motion'
import NTT from '../assets/NTTBackground.png'
import TrainIcon from '../assets/TrainIcon.png'
import CesiumAstro from '../assets/Cesium.png'
import Draper from '../assets/Draper.png'
import IPhone from './mockup/iPhone'
import BetterBrewsScreen from '../assets/BetterBrewsScreen.png'

// interface ProjectCardProps {
//   index: number
//   name: string
//   description: string
//   image: JSX.Element
// }

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   image,
// }: ProjectCardProps) => {
//   const controls = useAnimation();
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//   });
//
//   useEffect(() => {
//     if (inView) {
//       controls.start("show");
//     }
//   }, [controls, inView]);
//
//   const isEven = index % 2 === 0;
//
//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       variants={fadeIn(Direction.Up, "spring", 0, 0.75)}
//       className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
//     >
//       <div className='relative w-full md:w-3/5'>
//         <img
//           src={image}
//           alt='project_image'
//           className='w-full h-auto object-cover md:rounded-3xl'
//         />
//       </div>
//
//       <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
//         <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
//         <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description}</p>
//       </div>
//     </motion.div>
//   );
// };

const PortfolioCard = (props: {
  link: string
  desc: string
  team: string
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-col text-left">
      <a href={props.link} className="hover:opacity-40">
        {props.children}
      </a>
      <p className="mt-2 font-light text-sm">
        <a className="hover:cursor-pointer" href={props.link}>
          {props.desc}
        </a>
      </p>
      <p className="font-light caption text-sm opacity-40">
        <a className="hover:cursor-pointer" href={props.link}>
          {props.team}
        </a>
      </p>
    </div>
  )
}

const NewTrainTrackerCard = () => {
  return (
    <PortfolioCard desc="NEW TRAIN TRACKER" team="TRANSIT MATTERS" link="#">
      <div className="grid overflow-clip">
        <img
          src={NTT}
          className="col-start-1 row-start-1 hover:cursor-pointer"
        />
        <div className="relative w-8 mx-auto h-full col-start-1 row-start-1">
          <motion.img
            animate={{ top: ['-45px', '17%', '62.2%', '130%'] }}
            transition={{
              duration: 10,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 2,
            }}
            src={TrainIcon}
            className="absolute w-full col-start-1 row-start-1 bg-none hover:cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
    </PortfolioCard>
  )
}

const CesiumAstroCard = () => {
  return (
    <PortfolioCard desc="SOFTWARE ENGINEER INTERN" team="CESIUM ASTRO" link="#">
      <img src={CesiumAstro} className="hover:cursor-pointer" />
    </PortfolioCard>
  )
}

const DraperCard = () => {
  return (
    <PortfolioCard desc="SIMULATION SOFTWARE ENGINEER" team="DRAPER" link="#">
      <div className="bg-black ps-4 pe-5">
        <img src={Draper} className="hover:cursor-pointer" />
      </div>
    </PortfolioCard>
  )
}

const BetterBrewsCard = () => {
  return (
    <PortfolioCard desc="APP DEVELOPER" team="BETTER BREWS" link="#">
      <div className="bg-[#CFB299] py-10">
        <IPhone>
          <div className="pt-3 pb-8 bg-[#CFB299]">
            <img src={BetterBrewsScreen} />
          </div>
        </IPhone>
      </div>
    </PortfolioCard>
  )
}

const Portfolio = () => {
  return (
    <section className="">
      <motion.div className="md:text-left" variants={textVariant(0)}>
        <p className="opacity-40 my-4">PORTFOLIO.md</p>
      </motion.div>
      <div className="grid grid-gap gap-3 grid-cols-1 md:grid-cols-3 grid-gap">
        <div className="flex flex-col gap-4">
          <NewTrainTrackerCard />
        </div>
        <div className="flex flex-col gap-4">
          <DraperCard />
        </div>
        <div className="flex flex-col gap-4">
          <CesiumAstroCard />
          <BetterBrewsCard />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
