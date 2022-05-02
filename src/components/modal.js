import { motion } from "framer-motion";
import { useNavigate  } from "react-router-dom";

const liStyle = {
  margin: 'auto',
  width: '50%',
  fontWeight: '600',
  fontSize: '130%',
    whiteSpace: "nowrap"
}

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

const Modal = ({ text, type, data, url, imageId }) => {
  const history = useNavigate();
  return (
    <motion.div
    style={{maxWidth:"600px"}}
      variants={result}
      initial="hidden"
      animate="visible"
      exit="exit"
      align="center"
    >
      <img className="rounded img_modal " src={url} alt="" style={{maxHeight:"600px"}}/>
      {data && 
        <ModalText data={data} text={text}/>
      }
    </motion.div>
  );
};


const ModalText = ({data, text}) =>(
  <div >
    <div>
       <p style={liStyle}> {data[0]} </p>
       <p style={{
         wordWrap:'break-word'
       }}>{text}</p>
    </div>
  </div>
)

export default Modal;
