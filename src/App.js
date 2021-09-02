import './assets/css/styles.css'
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import routes from "./utils/index";
import Header from "./components/header"
import firebase from './config/firebase'
import AppContext from './store/AppContext';
import AuthRoute from './utils/routes/AuthRoute';
import GuestRoute from './utils/routes/GuestRoute';
import NotFound from './page/404';

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
            <Switch>
            {routes.map((route, index) =>
                {
                    if(route.path==='/login'){
                        return(<GuestRoute key={index} path={route.path} exact={route.exact} component={route.component}/>)
                        
                    }
                    if(route.path==='/gallery'){
                        return(<AuthRoute key={index} path={route.path} exact={route.exact} component={route.component}/>)
                        
                    }
                    if(route.path==='/user'){
                        return(<AuthRoute key={index} path={route.path} exact={route.exact} component={route.component}/>)
                        
                    }
                    return(<Route key={index} path={route.path} exact={route.exact} component={route.component}/>)
                }
            )}
            <Route  path='*' >
                <NotFound/>
            </Route>
            </Switch>
            </AppContext.Provider>
        </Router>
    )
}
export default App;