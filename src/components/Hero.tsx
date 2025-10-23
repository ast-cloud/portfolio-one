import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputerCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Aastik</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full-stack applications
          </p>
        </div>
      </div>
      <ComputerCanvas />
      <div className='absolute xs:bottom-4 bottom-8 w-full flex justify-center items-center pointer-events-none'>
        <a href='#about' className="pointer-events-auto">
          <div className='w-[22px] h-[38px] rounded-2xl border-2 border-secondary opacity-60 flex justify-center items-start p-1'>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1 opacity-80'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero