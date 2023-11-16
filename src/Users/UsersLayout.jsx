import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import UsersTable from './UsersTable'
import UsersAdd from './UsersAdd'
import UsersEdit from './UsersEdit'
import UsersDelate from './UsersDelate'

export default function UsersLayout() {
  return (<>
    <BrowserRouter>
    <nav class="navbar navbar-dark bg-primary d-flex justify-content-center">

    <ul className="nav justify-content-center ">
        <li className="nav-item text-white">
            <Link rel="stylesheet" className="nav-link active text-white" to={"/"} >User List</Link>
        </li>
        <li className="nav-item text-white">
        <Link rel="stylesheet" className="nav-link active text-white " to={"/user/creacte"} >User Add</Link>

        </li>
   
    </ul>

    </nav>
   <Routes>
    <Route index element={<UsersTable />}></Route>
    <Route path='/user/creacte' element={<UsersAdd />}></Route>
    <Route path='/user/:id/edit' element={< UsersEdit />}></Route>
    <Route path='/user/:id/delete' element={< UsersDelate />}></Route>
   </Routes>
    </BrowserRouter>
    <Outlet/>
    </>
    
  )
}
