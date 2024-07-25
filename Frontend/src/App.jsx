import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './App.css'

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const handleUser = () => {
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
    <>
  <div className="container">
    <div className="table-wrapper">
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Model</h2>
          </div>
          <div className="col-sm-6">
            <a href="#addModel" className="btn btn-success" data-toggle="modal">
              <i className="material-icons"></i> <span>Add New </span>
            </a>
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
            <th>Models</th>
            <th>Status</th>
            <th>Schedule</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="custom-checkbox">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="options[]"
                  defaultValue={1}
                />
                <label htmlFor="checkbox1" />
              </span>
            </td>
            <td>jquery.scrollTo.js</td>
            <td>Available</td>
            <td>0:33</td>
            <td>$55</td>
            <td>
              <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  title="Edit"
                >
                  
                </i>
              </a>
              <a
                href="#deleteEmployeeModal"
                className="delete"
                data-toggle="modal"
              >
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  title="Delete"
                >
                  
                </i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <span className="custom-checkbox">
                <input
                  type="checkbox"
                  id="checkbox2"
                  name="options[]"
                  defaultValue={1}
                />
                <label htmlFor="checkbox2" />
              </span>
            </td>
            <td>test.py</td>
            <td>Available</td>
            <td>1:10</td>
            <td>$6.5</td>
            <td>
              <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  title="Edit"
                >
                  
                </i>
              </a>
              <a
                href="#deleteEmployeeModal"
                className="delete"
                data-toggle="modal"
              >
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  title="Delete"
                >
                  
                </i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <span className="custom-checkbox">
                <input
                  type="checkbox"
                  id="checkbox3"
                  name="options[]"
                  defaultValue={1}
                />
                <label htmlFor="checkbox3" />
              </span>
            </td>
            <td>model.ckpt-1500.data-00000-of-00001</td>
            <td>Not Available</td>
            <td />
            <td>$10.5</td>
            <td>
              <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  title="Edit"
                >
                  
                </i>
              </a>
              <a
                href="#deleteEmployeeModal"
                className="delete"
                data-toggle="modal"
              >
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  title="Delete"
                >
                  
                </i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <span className="custom-checkbox">
                <input
                  type="checkbox"
                  id="checkbox4"
                  name="options[]"
                  defaultValue={1}
                />
                <label htmlFor="checkbox4" />
              </span>
            </td>
            <td>setup.py</td>
            <td>Available</td>
            <td>1:35</td>
            <td>$4.7</td>
            <td>
              <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  title="Edit"
                >
                  
                </i>
              </a>
              <a
                href="#deleteEmployeeModal"
                className="delete"
                data-toggle="modal"
              >
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  title="Delete"
                >
                  
                </i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <span className="custom-checkbox">
                <input
                  type="checkbox"
                  id="checkbox5"
                  name="options[]"
                  defaultValue={1}
                />
                <label htmlFor="checkbox5" />
              </span>
            </td>
            <td>model.ckpt-0.data-00000-of-00001</td>
            <td>Available</td>
            <td>0:45</td>
            <td>$18.0</td>
            <td>
              <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  title="Edit"
                >
                  
                </i>
              </a>
              <a
                href="#deleteEmployeeModal"
                className="delete"
                data-toggle="modal"
              >
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  title="Delete"
                >
                  
                </i>
              </a>
            </td>
          </tr>
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
  
  
  
</>

    </>
  )
}

export default App
