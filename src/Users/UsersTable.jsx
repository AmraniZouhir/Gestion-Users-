import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './UsersApp';
import { Link } from 'react-router-dom';

export default function UsersTable({  }) {

    const context = useContext(UserContext)

    return (
        <>
            <h1 className='px-5'>Users</h1>

            <div className="container d-flex justify-content-center ">


                <table className="table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Country</th>
                            <th scope="col">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(context.users.length > 0) ? context.users.map((user, key) => <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.fullName}</td>
                            <td>{user.city}</td>
                            <td>
                                <Link to={`/user/${user.id}/edit`} className='btn btn-primary mx-1'>Update</Link>
                                <Link to={`/user/${user.id}/delete`} className='btn btn-danger'>Delete</Link>
                            </td>
                        </tr>):<tr><td colSpan={3} align='center'>No Items</td></tr> 
                    }

                    </tbody>
                </table>
            </div>

        </>
    )
}

