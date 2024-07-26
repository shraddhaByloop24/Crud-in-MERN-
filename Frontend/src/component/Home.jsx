import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Style.css';

const Home = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        axios.get('http://localhost:3001/getUsers')
            .then(result => {
                console.log('Fetched users:', result.data); 
                if (Array.isArray(result.data)) {
                    setUsers(result.data);
                } else {
                    setUsers([]);
                    console.error('Data fetched is not an array:', result.data);
                }
            })
            .catch(error => console.error('Error fetching users:', error));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUser = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createUser', {
            name,
            email,
            age
        })
            .then(response => {
                Swal.fire({
                    title: 'Success!',
                    text: 'User has been created.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                fetchUsers();
                setName('');
                setEmail('');
                setAge('');
                console.log(response.data);
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error creating the user.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                console.error('There was an error creating the user!', error);
            });
    };


    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title bg-info">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Model</h2>
                            </div>
                            <div className="col-sm-6">
                                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    + Add Data
                                </button>
                            </div>
                        </div>
                    </div>

                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="selectAll" />
                                        <label htmlFor="selectAll" />
                                    </span>
                                </th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(users) && users.map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                id={`checkbox${user.id}`}
                                                name="options[]"
                                                defaultValue={1}
                                            />
                                            <label htmlFor={`checkbox${user.id}`} />
                                        </span>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                                            <i className="fa-solid fa-pen-to-square text-warning"></i>
                                        </a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                            <i className="fa-solid fa-trash text-danger"></i>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="clearfix">
                        <div className="hint-text">
                            Showing <b>5</b> out of <b>25</b> entries
                        </div>
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a href="#">Previous</a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">
                                    2
                                </a>
                            </li>
                            <li className="page-item active">
                                <a href="#" className="page-link">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">
                                    4
                                </a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">
                                    5
                                </a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleUser}>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Age</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-info">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
