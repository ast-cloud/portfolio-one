import { SectionWrapper } from "../hoc";
import { technologies } from '../constants';
import {motion} from 'framer-motion';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology)=>(
        <motion.div initial={{scale: 0.8, opacity: 0}} animate={{scale: 1, opacity: 1, transition:{delay: 0.8}}} whileHover={{scale: 1.2, transition:{delay: 0}}} variants={{
          hidden: {scale: 0.8, opacity: 0},
          visible: {scale: 1, opacity: 1, transition:{delay: 0.4}}
        }}>
          <div className="flex flex-col items-center" key={`tech-${technology.name}`}>
            <div className='w-28 h-28 bg-white flex justify-center rounded-full p-4' key={technology.name}>
              <img src={technology.icon} alt={technology.name} />
            </div>
            <p className="mt-2 text-white font-bold">{technology.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '');