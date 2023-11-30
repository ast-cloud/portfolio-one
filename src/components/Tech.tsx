import { SectionWrapper } from "../hoc";
import { technologies } from '../constants';
import {motion} from 'framer-motion';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology)=>(
        <motion.div animate={{scale: 1}} whileHover={{scale: 1.2}}>
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