import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  
  const backdropCss= {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    background: '#000000e1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '2'
  }

  return (
    <motion.div
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
