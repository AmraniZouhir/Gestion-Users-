import React, { useContext, useEffect, useRef } from 'react'
import { UserContext } from './UsersApp'
import { useParams } from 'react-router-dom'

export default function UsersDelate({ }) {

const context = useContext(UserContext)
const params = useParams()



    useEffect(()=>{
        console.log(context)
    },[])

    const handelDelate = (e) => {
        e.preventDefault()
       
        context.deleteUser(
            {payload:{
             
                id :params.id
            }})
          

    }

    return (
        <>
                <h1 className='px-5'>Do you want to delete this user</h1>

                    <div className="container  justify-content-center ">

            <div className="alert alert-danger" role="alert">
                <strong>danger</strong> Deletion is irreversible (you can't go back)
            </div>
            <button type="submit" className="btn btn-danger" onClick={handelDelate}>Delete Users</button>

</div>
        </>
    )
}
