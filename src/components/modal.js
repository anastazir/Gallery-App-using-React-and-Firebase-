import { motion } from "framer-motion";

const liStyle = {
  margin: 'auto',
  width: '50%',
  fontWeight: '600',
  fontSize: '130%',
    whiteSpace: "nowrap"
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const result = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const flip = {
  hidden: {
    transform: "scale(0) rotate(720deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotate(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotate(-720deg)",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Modal = ({ text, type, data, url }) => {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}   
      className="fixed top-40"
      variants={result}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <img src={url} alt="" />
      {data && 
        <ResultText data={data} />
      }
    </motion.div>
  );
};


const ResultText = ({data}) =>(
  <div >
    <h3 className="result-text">Results</h3>
    <div >
      {data.map((object, i)=>{
          return <li key={i} style={liStyle}> {object} </li>;
      })}
    </div>
  </div>
)

export default Modal;
