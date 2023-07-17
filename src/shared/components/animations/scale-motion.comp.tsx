import { motion } from 'framer-motion';
const CompScaleAnimation = ({children}:{children:React.ReactNode})=>{
  return (<motion.div
   
    initial={{
      opacity: 0,
      scale: 0.5,
    }}
    transition={{
      duration: 0.8,
      delay: 0.2,
      ease: [
        0, 0.71, 0.2,
        1.01,
      ],
    }}
    viewport={{
      once: true,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
    }}
  >{children}</motion.div>)
}
export default CompScaleAnimation