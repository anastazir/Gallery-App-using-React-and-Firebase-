import  { useEffect, useState } from 'react'
import axios from 'axios';

export default function useFetchImage(page,searchTerm) {
    const [images, setImages] = useState([])
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        const url=searchTerm===null ?'/photos':'/search/photos'
        axios.get('https://api.unsplash.com'+url+'?client_id=LwvhouipV18RfuOnid5X2CkZosnGWREPiqbSlRPHHXk&page='+page+'&query='+searchTerm).then((res)=>{
            console.log('no error');
            if(searchTerm){
            setImages([...images,...res.data.results])
            }
            else{
            setImages([...images,...res.data])
            }
            setIsLoading(false)
        }).catch((e) =>{
            console.log('in error',e);
            setErrors(e.response.data.errors)
            setIsLoading(false)
        })
    }, [page,searchTerm]);
    
    return [images, setImages,errors,isLoading]
}
