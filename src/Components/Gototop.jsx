import './Gototop.css';
import { FaArrowUp } from "react-icons/fa";

export const Gototop = () => {

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };


  return (
    <div>
      <h5 onClick={goToBtn}>Back to top<FaArrowUp id='top-btn'></FaArrowUp></h5>
    </div>
    
  )
}

