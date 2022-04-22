import React, { useContext, useEffect, useRef, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import {useNavigate } from 'react-router-dom';

import Image from '../components/image'
import AppContext from "../store/AppContext";
import {addToLocalStorage, checkLocalStorage, getSavedImages} from "../storage/storeImages";

let newSearchImage=''

export default function User() {
    const history = useNavigate ();
    const [isLoggedIn,user] = useContext(AppContext)
    const userName= user.email? (user.email.substring(0, user.email.indexOf("@"))) : null;
    
    const [Images, setImages] = useState(['https://images.unsplash.com/photo-1616818400884-1c4f3d4d003c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTYyOTB8MHwxfGFsbHw4fHx8fHx8Mnx8MTYxNjg1ODY3OQ&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1616156104743-0ed6f123d8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTYyOTB8MHwxfGFsbHw5fHx8fHx8Mnx8MTYxNjg1ODY3OQ&ixlib=rb-1.2.1&q=80&w=400','https://images.unsplash.com/photo-1616841888027-89693dec0827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTYyOTB8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2MTY4NTg2Nzk&ixlib=rb-1.2.1&q=80&w=400','https://images.unsplash.com/photo-1616732227193-6d556628ede1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTYyOTB8MHwxfGFsbHwxMnx8fHx8fDJ8fDE2MTY4NTkxMDM&ixlib=rb-1.2.1&q=80&w=400'])
    
    const [showPreview, setShowPreview] = useState(false);
    const inputRef = useRef(null)

    if(!isLoggedIn){
        history("/", {replace:true})
    }
    
    function handleRemove(index){
        setImages(Images.filter((image,i)=>i!==index))
    }

    useEffect(() => {
        inputRef.current.focus()
        if (!checkLocalStorage()) {
            setImages(getSavedImages(userName))
        }else{
            addToLocalStorage(Images, userName)
        }
    }, [])

    useEffect(() => {
        addToLocalStorage(Images, userName)
    },[Images])
    
    function handleInputChange(e){
        newSearchImage=e.target.value
    }

    function handleAdd(){
        setImages([...Images,newSearchImage])
        inputRef.current.value=''
    }

    function ShowImage(){
        return (
            <div className="flex flex-wrap " >
                <AnimateSharedLayout type="switch">
                { Images.map((image,index)=>(
                    <motion.div className="xl:w-1/5 p-1 border flex justify-center md:w-1/3 sm:w-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={index}
                        layoutId={index}>
                    <Image 
                        show={() => setShowPreview(index)}
                        image={image} 
                        handleRemove={handleRemove}
                        index={index} />
                    </motion.div>))  }
                </AnimateSharedLayout>      
            </div>   
        )
    }

    return (
        <div>
           <ShowImage/>
           <div className='flex justify-between my-5'>
                <div className='w-full'>
                    <input
                    autoComplete='off'
                    placeholder='             Enter Query'
                    className='p-2 border-gray-800 shadow rounded bg-black w-full text-center'
                    ref={inputRef}
                    id='inputBox'  
                    type='text'  
                    onChange={handleInputChange}></input>
                </div>
                <div>
                    <button className='p-1 bg-green-600 text-white  ' onClick={handleAdd}>Add</button>
                </div>
            </div>
        </div>
    )
}
