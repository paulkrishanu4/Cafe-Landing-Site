import './Products.css';
import { motion } from "framer-motion";
export const Products = () => {
  return (
    <div id='products'>
      <div className="header">
        <h1>Mussels</h1>
      </div>
      <div className="product-images">
        <div className="product1">
         <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1,duration:1}}src="./images/p1.jpg"/>
         <h4>Mussels from the counter</h4>
        </div>
        <div className="product1">
         <motion.img  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1,duration:1}} src="./images/p2.jpg"/>
         <h4>Mussels in pot</h4>
        </div>
        <div className="product1">
         <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1,duration:1}}  src="./images/p3.jpg"/>
         <h4>Spicy Mussels</h4>
        </div>
        <div className="product1">
         <motion.img  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1,duration:1}} src="./images/p4.jpg"/>
         <h4>Mussels in Sauce</h4>
        </div>
        <div className="product1">
         <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1,duration:1}} src="./images/p5.jpg"/>
         <h4>Mussels with olive oil</h4>
        </div>
        <div className="product1">
         <motion.img  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1,duration:1}} src="./images/p6.jpg"/>
         <h4>Mussel Pan</h4>
        </div>
        
      </div>
      <div className="ad">
        <img src="./images/ad.jpg"></img>
      </div>

      <div className="header">
        <h1>Our Products</h1>
      </div>
      <div className="product-images">
        <div className="product1">
         <motion.img initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{delay:1,duration:2}}  src="./images/pro1.jpg"/>
         <h4>Pilaf</h4>
        </div>
        <div className="product1">
         <motion.img initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{delay:1,duration:2}}  src="./images/pro2.jpg"/>
         <h4>Chicken Pilaf</h4>
        </div>
        <div className="product1">
         <motion.img initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{delay:1,duration:2}}  src="./images/pro3.jpg"/>
         <h4>Mussel Rice</h4>
        </div>
        <div className="product1">
         <motion.img initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{delay:1,duration:2}}  src="./images/pro4.jpg"/>
         <h4>Kokoreçli Rice</h4>
        </div>
        <div className="product1">
         <motion.img initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{delay:1,duration:2}}  src="./images/pro5.jpg"/>
         <h4>Halka Kokorec</h4>
        </div>
        
      </div>

      
    </div>
  )
}
