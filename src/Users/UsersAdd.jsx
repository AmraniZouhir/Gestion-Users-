import React, { useContext, useEffect, useRef } from 'react'
import { UserContext } from './UsersApp'

export default function UsersAdd({ }) {

const context = useContext(UserContext)

    const fullName = useRef(null)
    const city = useRef(null)

    useEffect(()=>{
        console.log(context)
    },[])

    const handelAdd = (e) => {
        e.preventDefault()
       
        context.add(
            {payload:{
                fullName : fullName.current.value,
                city: city.current.value,
                id :context.LastId+1
            }})
            fullName.current.value= ''
            city.current.value= ''

    }

    return (
        <>
            <div className={'container-fluid w-75 mx-auto my-5'}>
                <form onSubmit={handelAdd}>

                    <div >
                        <h1>Add user</h1>
                        <hr />
                        <div className="mb-3 row">
                            <label htmlFor="currentId" className="col-sm-2 col-form-label">Current id</label>
                            <div className="col-sm-5">
                                <input type="text" readOnly className="form-control-plaintext" id="currentId" name='currentId'
                                    value={context.LastId + 1} />
                            </div>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullName" name="fullName" placeholder="FullName" ref={fullName} />

                        </div>





                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <select className="form-select form-select-lg" id="city" name="city" ref={city}>
                                <option value="">Select your city</option>
                                <option value="Maroc">Maroc</option>
                                <option value="Tunisi">Tunisi</option>
                                <option value="Algeri">Algeri</option>
                                <option value="Egept">Egept</option>
                            </select>

                        </div>



                        <button type="submit" className="btn btn-primary w-100 mb-4">Add Users</button>

                    </div>
                </form>

            </div>


        </>
    )
}
