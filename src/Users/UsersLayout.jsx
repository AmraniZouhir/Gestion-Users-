import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import UsersTable from './UsersTable'
import UsersAdd from './UsersAdd'
import UsersEdit from './UsersEdit'

export default function UsersLayout() {
  return (<>
    <BrowserRouter>
    <nav>
    <ul className="nav justify-content-center ">
        <li className="nav-item">
            <Link rel="stylesheet" className="nav-link active" to={"/"} >User List</Link>
        </li>
        <li className="nav-item">
        <Link rel="stylesheet" className="nav-link active" to={"/user/creacte"} >User Add</Link>

        </li>
        <li className="nav-item">
        <Link rel="stylesheet" className="nav-link active" to={"/"} >User Edit</Link>

        </li>
    </ul>

    </nav>
   <Routes>
    <Route index element={<UsersTable />}></Route>
    <Route path='/user/creacte' element={<UsersAdd />}></Route>
    <Route path='/user/:id/edit' element={< UsersEdit />}></Route>
   </Routes>
    </BrowserRouter>
    <Outlet/>
    </>
    
  )
}
