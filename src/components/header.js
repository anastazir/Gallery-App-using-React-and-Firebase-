import React, { useContext}  from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import firebase from '../config/firebase'
import AppContext from '../store/AppContext';
export default function Header() {
  const history = useNavigate ();
  const [isLoggedIn,user] = useContext(AppContext)
  const userName= user.email? (user.email.substring(0, user.email.indexOf("@"))) : null;


  function logout(){
    firebase.auth().signOut().then(res =>{
      history.replace('/login')
    }).catch(e=>{
      console.log(e);
    })
  }
  return (
    <nav className='py-5 sticky top-0 z-10 bg-black'>
      <ul className="flex justify-between px-10">
        <span className="flex">
          <li  className="mr-5">
            <NavLink exact={true} className={(navData) => (navData.isActive ? "underline text-blue-200" : 'none')} to="/">Home</NavLink>
          </li>
          <li className="mr-5">
            <NavLink exact={true} className={(navData) => (navData.isActive ? "underline text-blue-200" : 'none')} to="/gallery">Gallery</NavLink>
          </li>
          {/* <li className="mr-5">
            <NavLink exact={true} className={(navData) => (navData.isActive ? "underline text-blue-200" : 'none')} to="/tensorflow">Tensorflow</NavLink>
          </li> */}
        </span>
        <span className="flex">
          <li className="mr-5">
            {
              isLoggedIn ? ([<button className="mx-5" onClick={logout}>Logout</button>,
              <NavLink exact={true} className={(navData) => (navData.isActive ? "underline text-blue-200" : 'none')} to="/user">{userName}</NavLink>]):(<NavLink exact={true} activeClassName="underline text-blue-200" to="/login">Login</NavLink>)
            }
          </li>
          <li>
            {
              isLoggedIn? null :(<NavLink exact={true} className={(navData) => (navData.isActive ? "underline text-blue-200" : 'none')} to="/signup" >Sign up</NavLink>)
            }
          </li>
        </span>
      </ul>
    </nav>
  )
}
