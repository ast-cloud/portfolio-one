import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index, title, icon}:{index:number, title:string, icon:any})=>{
  return <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("right", "spring", index*0.5, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div data-options={{max:45, scale:1, speed:450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt="icon" className="w-16 h-16 object-contain"/>
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>  
  </Tilt>
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview.</p>
      </motion.div>
      <motion.p variants={fadeIn('','',0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[29px]">
        I'm a software developer with experience in TypeScript and
        JavaScript, and well-versed in MERN stack and technologies like Next.js, Postgres, GraphQL, Redis, Web-sockets, Docker, AWS. I quickly grasp new concepts and work closely with clients to develop solutions that are both efficient and scalable, with a focus on user-friendly design. I am dedicated to creating practical solutions that address real-world challenges. Let's collaborate to turn your ideas into reality!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');