import React from "react"

const AppContext = React.createContext({loggedIn : false, user : {}, images : []})

export default AppContext