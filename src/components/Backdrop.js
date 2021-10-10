import { useEffect, useState } from "react";
import { motion } from "framer-motion";



const Backdrop = ({ children, onClick }) => {
  //  TODO :make the backdrop span the entire height of screen(including scroll)
  // let [windowHeight, setWindowHeight] = useState(0)

  // const handleScroll=()=>{
  //   let t = window.scrollY
  //   console.log('hieght changed scroll', window.scrollY);
  //   setWindowHeight(t)
  //   console.log('changed scroll to ', windowHeight);
  // }
  // window.addEventListener("scroll",handleScroll);


  // console.log("scroll height ", window.scrollY)
  const backdropCss= {
    position: 'absolute',
    top: '0',
    left: '0',
    height: `${window.scrollY+1500}px`,
    width: '100%',
    background: '#000000e1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover'
    // backgroundAttachment: 'scroll'
    zIndex: '2'
  }
  return (
    <motion.div
      className="backdrop"
      style={backdropCss}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
