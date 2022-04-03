import React, { useState } from 'react'
import { Navigate  } from 'react-router'
import firebase from '../config/firebase'
export default function Login() {
    const [isLoading, setIsLoading] = useState(false) 
    const [form, setForm] = useState({email:'',password:''})   
    const [error, setError] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    function handleForm(e){
        if(isLoading) return;
        setIsLoading(true)
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(form.email, form.password).then((res)=>{
            setError(false)
            setIsLoading(false)
            setIsLoggedIn(true)
        }).catch(e =>{
            setError(e.message);
            console.log(e);
            setIsLoading(false)
        })
    }

    function handleInput(e){
        setForm({
            ...form,[e.target.name]:e.target.value
        });
    }

    if(isLoggedIn) return <Navigate  to="/gallery"/>

    return (
        <div className="flex h-screen">
            <div className="m-auto text-3xl">
            {(error!=='') && <p className='text-red-500'>{error}</p> }   
                <h1 className="text-center">Login</h1>
                <form>
                
                    <div className="mb-6">
                        <label  className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" value={form.email} onChange={handleInput} id="email" placeholder="you@company.com" required className="text-black w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <label  className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Password</label>
                        <input type="password" name="password" value={form.password} onChange={handleInput} id="email"  required className="text-black w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none" onClick={handleForm}>
                        {
                            isLoading?<i className="fas fa-circle-notch fa-spin"></i>:("Submit")
                        }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
