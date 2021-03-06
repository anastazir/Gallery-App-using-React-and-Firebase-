import React from 'react'
import { useEffect, useState,useRef } from "react";
import Image from "../components/image"
import useFetchImage from "../utils/hooks/useFetchImage";
import { AnimateSharedLayout, motion } from "framer-motion";
import CircleLoader from './CircularLoader';
let newSearchText=null;
export default function Images() {
    const [page,setPage]=useState(1)
    const [searchTerm, setSearchTerm] = useState(null)
    const [Images,setImages,errors,isLoading]=useFetchImage(page,searchTerm);
    const inputRef = useRef(null)
    const [showPreview, setShowPreview] = useState(false);

    useEffect(() => {
        console.log('in useeffect errors');
        console.log(errors);
    }, [errors])

    function handleRemove(index){
        setImages(Images.filter((image,i)=>i!==index))
    }
  /////////////////////////////////////
function ShowImage(){
    return (
    <div className="flex flex-wrap " >
        <AnimateSharedLayout type="switch">
            {Images.map((image,index)=>(
            <motion.div className="xl:w-1/5 p-1 border flex justify-center md:w-1/3 sm:w-1"
                key={index}
                layoutId={index}>
                <Image 
                imageId = {image.id}
                createdAt={image.created_at}
                description={image.description}
                show={() => setShowPreview(index)}
                image={image.urls.small} 
                handleRemove={handleRemove}
                imageLarge = {image.urls.regular}
                index={index}/>
            </motion.div>))}
        </AnimateSharedLayout>     
    </div>)
    }

    function scrollToTop(){
        window.scrollTo({top:0,behavior:'smooth'})
    }

    function scrollToBottom(){
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }

    function handleInputChange(e){
        newSearchText= (e.target.value)
    }

    function handleSearch(){
        console.log(newSearchText);
        setPage(1)
        setSearchTerm(newSearchText)
    }
    function handleKeyDown(e){
        if (e.key === 'Enter') {
            setSearchTerm(newSearchText)
        }
    }
    return(
    <section>
        <ShowImage/>
        {
        isLoading?<CircleLoader/>: (
            <div>
                <div className='w-7 h-7  fab-con-top ' >
                    <i className='align-middle  rounded-2xl  fa fa-arrow-up text-2xl cursor-pointer' onClick={scrollToTop}></i>
                    <i className='align-middle  rounded-2xl  fa fa-arrow-down text-2xl cursor-pointer' onClick={scrollToBottom}></i>
                </div>
                
                <button className='p-1 bg-green-600 text-white' onClick={() =>setPage(page+1)}>Load More?</button>
                <div className='flex justify-between my-5'>
                    <div className='w-full'>
                        <input
                        autoComplete='off'
                        placeholder='             Enter Query'
                        className='p-2 border-gray-800 shadow rounded bg-black w-full text-center'
                        ref={inputRef}
                        id='inputBox'  
                        type='text'  
                        onKeyDown={handleKeyDown}
                        onChange={handleInputChange}></input>
                    </div>
                    <div>
                        <button className='p-1 bg-green-600 text-white'  onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        )
        }
    </section>
    )
}
