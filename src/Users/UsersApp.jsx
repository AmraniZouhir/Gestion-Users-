import React, {  createContext, useState } from 'react'

import UsersLayout from './UsersLayout'

export  const UserContext = createContext({
    users :[],
    LastId :0 ,
    add : ()=>null 

})

export default function UsersApp() {
   //daba hna jina 3wdna USESTATE B USECONTEXT 
    const [users, setUsers] = useState([])
    const [LastId, setLastId] = useState(0)
    
  

    const AddUsers =(data)=>{  
        alert("okk")
        setUsers(prevState =>[...prevState , data.payload])
        setLastId(prevState =>prevState+1)
        console.table(data)
    }
    return (
        <>
        <UserContext.Provider value={{
            users :users,
            LastId :LastId,
            add : AddUsers
        }}>
        <UsersLayout/>

        </UserContext.Provider>

        </>
    )
}

