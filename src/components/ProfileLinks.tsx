import {SectionWrapper} from '../hoc';
import {motion} from 'framer-motion';
import {linkedinIcon, twitterIcon} from '../assets';

const ProfileLinks = ()=>{
    return <div className='flex gap-10 justify-center'>
        <motion.div onClick={()=>{window.open("https://twitter.com/Aastik53145", 'blank')}} style={{cursor: 'pointer'}} animate={{scale: 1}} whileHover={{scale: 1.2}} className='w-20 flex flex-col text-center'>
            <div className='flex justify-center p-4' key="twitterIcon">
              <img src={twitterIcon} alt="Twitter Icon"/>
            </div>
            <p className="text-white font-bold">Twitter</p>
        </motion.div>
        <motion.div onClick={()=>{window.open("https://www.linkedin.com/in/aastik-yadav-099865193/", 'blank')}} style={{cursor: 'pointer'}} animate={{scale: 1}} whileHover={{scale: 1.2}} className='w-20 flex flex-col text-center'>
            <div className='flex justify-center p-4' key="linkedinIcon">
              <img src={linkedinIcon} alt="LinkedIn Icon"/>
            </div>
            <p className="text-white justify-center font-bold">LinkedIn</p>
        </motion.div>
    </div>
}

export default SectionWrapper(ProfileLinks, "profileLinks");