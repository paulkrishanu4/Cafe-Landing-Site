import './Hero.css';
import { motion } from "framer-motion"

export const Hero = () => {
  return (
    <div>
      <div id='home' className="parent">
      <div className="hero_left">
          <motion.h1 initial={{opacity:0,y:200}} whileInView={{opacity:1, y:0}} transition={{delay:1,duration:2}}>Hot and fresh mussels in pots.<br></br><span><button>Products</button></span></motion.h1>
        </div>
        <div className="hero_right">
          <img src="./images/hero1.jpg" ></img>
        </div>
        
      </div>
    </div>
  )
}
