import { useEffect } from "react";
import { motion } from "framer-motion";

const backdropCss= {
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  background: '#000000e1',
  display: 'flex',
  alignItems: 'center',
  justifContent: 'center',
}

const Backdrop = ({ children, onClick }) => {

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
