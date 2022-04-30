import { AnimatePresence } from 'framer-motion'
import React, { useContext, useRef,useState } from 'react'
import { saveImageURL } from '../storage/storeImages';
import Backdrop from './Backdrop';
import AppContext from "../store/AppContext";
import Modal from '../components/modal';
import {downloadImage} from "../utils/helper/downloadImage";

export default function Image({image, handleRemove, index, description, createdAt, imageId}) {
  const [isLoggedIn,user] = useContext(AppContext)
  const userName= user.email? (user.email.substring(0, user.email.indexOf("@"))) : null;
  const date= createdAt ? createdAt.split('T') : null // only get the date and cut out the time
  const imageRef =useRef()
  const [showPreview, setShowPreview] = useState(false)


  return (
    <div>
      <div className="relative">
        <i className="fas fa-download  absolute right-50 cursor-pointer opacity-25 hover:opacity-100 hidden" onClick={()=>{downloadImage(image, imageId)}} ></i>
        <i className="fas fa-plus  absolute left-0 cursor-pointer opacity-25 hover:opacity-100 hidden" onClick={()=>{saveImageURL(image, userName)}}></i>
        <i className="fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 hidden" onClick={()=>{handleRemove(index)}} ></i>
        <i className="fa fa-clipboard absolute bottom-0 right-50 cursor-pointer opacity-25 hover:opacity-100 hidden" onClick={(e)=>navigator.clipboard.writeText(image)}></i>
        <img ref={imageRef} onClick={()=>setShowPreview(true)} src={image} alt="" width='100%' height='auto' crossOrigin='anonymous' />
      </div>
      <AnimatePresence>
        {showPreview && 
          <Backdrop onClick={()=>setShowPreview(false)}>
            <Modal text={description} type='result' data={date} url={image} />             
          </Backdrop>
        }
      </AnimatePresence>
    </div>
  )
}
