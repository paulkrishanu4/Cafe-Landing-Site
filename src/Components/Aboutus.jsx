import './Aboutus.css';
import { motion } from "framer-motion";

export const Aboutus = () => {
  return (
    <div id='aboutus' className="about-us">
      <div className="about-images">
      <img src="./images/about_us.jpg"></img>
      <img src="./images/aboutus2.jpg"></img>
      </div>
      <div className="text">
        <motion.h1 initial={{opacity:0,y:200}} whileInView={{opacity:1, y:0}} transition={{delay:1,duration:1}}>Who are we?</motion.h1>
        <motion.p initial={{opacity:0,y:200}} whileInView={{opacity:1, y:0}} transition={{delay:1,duration:1}}>Pot Mussels is the first stop of the street delicacies we established under the name of Seyyarhane. In our workshop, we produce the mussels that we receive live from the relevant ministry-approved farms on a "daily" basis in accordance with the Turkish Food Codex and ship them to our branches.

In addition to the traditional taste, we bring a new breath to the street cuisine with our different recipes, always hot, fresh and specially cooked for you whenever you want.</motion.p>
      </div>
    </div>
  )
}
