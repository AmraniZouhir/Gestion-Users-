import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from './UsersApp'
import { useParams } from 'react-router-dom'

export default function UsersAdd({ }) {

const context = useContext(UserContext)

    const fullName = useRef(null)
    const city = useRef(null)

    const [curentUser ,setcurentUser] = useState({})
    const params = useParams()

    useEffect(()=>{
      const {id} = params
       const user = context.users.filter(user=>user.id ===parseInt(id) )
       if(user.length >0){
        setcurentUser(...user)
       }
       else{
        console.error('Users Not Found')
       }
        console.log(user)
    },[])

    const handelUpdate = (e) => {
        e.preventDefault()
       
        context.UpdateUser(
            {payload:{
                fullName : fullName.current.value,
                city: city.current.value,
                id : parseInt(params.id) 
            }})
      
    }

    return (
        <>
            <div className={'container-fluid w-75 mx-auto my-5'}>
                <form onSubmit={handelUpdate}>

                    <div >
                        <h1>Add user</h1>
                        <hr />
                        <div className="mb-3 row">
                            <label htmlFor="currentId" className="col-sm-2 col-form-label">Current id</label>
                            <div className="col-sm-5">
                                <input type="text" readOnly className="form-control-plaintext" id="currentId" name='currentId'
                                    defaultValue={curentUser?.id} />
                            </div>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullName" name="fullName" placeholder="FullName" ref={fullName} defaultValue={curentUser?.fullName} />

                        </div>





                        <div className="mb-3">
                            <label className="form-label">City</label> 
                            <select className="form-select form-select-lg" id="city" name="city" ref={city} defaultValue={curentUser?.city} key={curentUser?.city}>    {/*defaultValue katrandra 4a mra whda dakchi bach khdmna b key bach njibo city */}
                                <option value="">Select your city</option>
                                <option value="Maroc">Maroc</option>
                                <option value="Tunisi">Tunisi</option>
                                <option value="Algeri">Algeri</option>
                                <option value="Egept">Egept</option>
                            </select>

                        </div>



                        <button type="submit" className="btn btn-primary w-100 mb-4">UPDATE Users</button>

                    </div>
                </form>

            </div>


        </>
    )
}
