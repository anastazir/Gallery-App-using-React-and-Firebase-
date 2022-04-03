import './assets/css/styles.css'
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router,Navigate ,Route, Routes } from 'react-router-dom';
import Header from "./components/header"
import firebase from './config/firebase'
import AppContext from './store/AppContext';
import NotFound from './page/404';
import Home from './page/Home';
import Gallery from './page/Gallery';
import User from './page/User';
import Login from './page/Login';
import SignUp from './page/SignUp';

function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user=>{
      if(user) {
        setIsLoggedIn(true);
        setUser(user)
      }
      else{
        setUser({})
        setIsLoggedIn(false)
      }
    })
  },[])

  return (
    <Router>
      <AppContext.Provider value={[isLoggedIn,user]}>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/gallery" exact element={<Gallery/>}/>
          <Route path="/user" exact element={<User/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/signUp" exact element={<SignUp/>}/>
          <Route path="/user" exact element={() => (!user ? <User /> : <Navigate  to="/login" />)}/>
          <Route path="*" exact element={<NotFound/>} />
        </Routes>
      </AppContext.Provider>
    </Router>
  )
}
export default App;