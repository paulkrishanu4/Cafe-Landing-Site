import "./Visitus.css";
import { motion } from "framer-motion";

export const Visitus = () => {
  return (
    <div id='branches' className="visit">
    <div className="heading">
        <h1>Our Stores</h1>
      </div>
    <div className="p">
      <div className="visitus-left">
        <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} src="./images/branch2.jpg"></motion.img>
        <p>Pot Mussel Express
Bahçelievler
Address: Bahçelievler mahallesi 54. cadde (6. cadde)
31-33/A (10)
Çankaya / Ankara
06490
Email: info@tenceremidye.com
Instagram: instagram.com/tenceremidye
Phone: 0312 212 3736</p>
      </div>
      <div className="visitus-right">
      <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1,duration:1}} src="./images/branch1.jpeg"></motion.img>
        <p>Pot Mussel Express
Bahçelievler
Address: Bahçelievler mahallesi 54. cadde (6. cadde)
31-33/A (10)
Çankaya / Ankara
06490
Email: info@tenceremidye.com
Instagram: instagram.com/tenceremidye
Phone: 0312 212 3736</p>
      </div>

    </div>
  </div>
  )
}
