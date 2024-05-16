

import { motion, useScroll } from "framer-motion"

function Progressbar() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{ scaleX: scrollYProgress }} />  
  )
}

export default Progressbar;

