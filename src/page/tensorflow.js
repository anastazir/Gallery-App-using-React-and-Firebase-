/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import useTFClassify from "../utils/hooks/useTFClassify";
let newSearchImage=''
let tempImages=[];
export default function Tensorflow() {
  const [image, setImage] = useState("https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MjI1Nn0")

  const inputRef = useRef(null)

  const imageRef = useRef();
  const { predict, predictions, isLoading } = useTFClassify();

  useEffect(() => {
    console.log('working');
    inputRef.current.focus()
  }, [])

  function handleInputChange(e){
    newSearchImage=e.target.value
  }
  function handleSearch(){
    console.log(newSearchImage);
    inputRef.current.value=''
    setImage(newSearchImage)
    tempImages.push(newSearchImage)
    console.log(tempImages);
    predict(imageRef.current)
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/3">
        <h1 className="text-center">Image classsifcation</h1>
        <img
          src={image}
          width="400"
          crossOrigin="anonymous"
          ref={imageRef}
        />
        <div className="text-center my-5">

          {predictions.length > 0 &&
            predictions.map((prediction,index) => (
              <div key={index} className="flex justify-between text-sm">
                <p>{prediction.className}</p>
                <p>{Math.floor(prediction.probability * 100)} %</p>
              </div>
            ))}

          <button
            className="p-2 rounded bg-gray-900 text-white w-64"
            onClick={() => predict(imageRef.current)}>
            {isLoading && "⏳"}
            {!isLoading && "Predict Again?"}
          </button>
        </div>
        <div className='flex justify-between my-5'>
                  {/* INPUT FIELD */}
          <div className='w-full'>
              <input
              autoComplete='off'
              placeholder='             Image URL'
              className='p-2 border-gray-800 shadow rounded bg-black w-full text-center'
              ref={inputRef}
              id='inputBox'  
              onChange={handleInputChange}
              type='text'></input>
          </div>
                     {/* SEARCH BUTTON */}
          <div>
              <button className='p-1 bg-green-600 text-white ' onClick={handleSearch} >Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}