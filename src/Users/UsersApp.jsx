import React, {  createContext, useState } from 'react'

import UsersLayout from './UsersLayout'

export  const UserContext = createContext({
    users :[],
    LastId :0 ,
    add : ()=>null ,
    AddUsers : ()=>null 

})

export default function UsersApp() {
   //daba hna jina 3wdna USESTATE B USECONTEXT 
    const [users, setUsers] = useState([
        {id:1,fullName :"zouhir amrani" , city:'Maroc'}
    ])
    const [LastId, setLastId] = useState(users.length)
    
  

    const AddUsers =(data)=>{  
        setUsers(prevState =>[...prevState , data.payload])
        setLastId(prevState =>prevState+1)
        window.history.back()

    }

    const UpdateUser =(data)=>{  
        const {id,...res} =data.payload

        setUsers(prevState => prevState.map(user =>{
            if(user.id === id ){
                return {id : user.id ,...res}
            }
                return user
            })
        )
        alert('User Update Successfully')
        window.history.back()
    }

    const deleteUser = (data) => {
        setUsers(prevState => prevState.filter(user  => user.id !== parseInt(data.payload.id)))
        window.history.back()
    }

    return (
        <>
        <UserContext.Provider value={{
            users :users,
            LastId :LastId,
            add : AddUsers,
            UpdateUser:UpdateUser,
            deleteUser:deleteUser
        }}>
        <UsersLayout/>

        </UserContext.Provider>

        </>
    )
}

