import { AnimatePresence, motion } from 'framer-motion'
import React, { useRef,useState } from 'react'
import useTFClassify from "../utils/hooks/useTFClassify";

export default function Image({image,handleRemove,index}) {
    const imageRef =useRef()
    const [showPreview, setShowPreview] = useState(false)
    const { predict, predictions, setPredictions, isLoading } = useTFClassify();
    return (
        <div >
            <div className="relative">
            {(predictions.length > 0 || isLoading) && (
        <span
          className="absolute bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-5"
          onClick={() => setPredictions([])}
        >
          {isLoading && <p>Fetching results...</p>}
          {predictions.map((prediction) => (
            <div className="flex justify-between text-sm">
              <p>{prediction.className}</p>
              <p>{Math.floor(prediction.probability * 100)} %</p>
            </div>
          ))}
        </span>
      )}
                    <i className="fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 hidden" onClick={()=>{handleRemove(index)}} ></i>
                    <i className="fas fa-search absolute left-0 cursor-pointer opacity-25 hover:opacity-100 hidden" onClick={()=>{predict(imageRef.current)}} ></i>
                    <img ref={imageRef} onClick={()=>setShowPreview(true)} src={image} alt="" width='100%' height='auto' crossOrigin='anonymous' />
            </div>
            <AnimatePresence>
            {showPreview && 
            <motion.section 
                className="fixed w-full h-full flex justify-center items-center top-0 left-0 z-40" onClick={()=>setShowPreview(false)}>
                <div className="bg-white text-black">
                <img className='rounded-md' onClick={()=>setShowPreview(false)} src={image} alt="" width='400' height='auto' />
                </div>
            </motion.section> }
        </AnimatePresence>
             
        </div>
    )
}
