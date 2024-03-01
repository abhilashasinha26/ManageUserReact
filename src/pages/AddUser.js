import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AddUser() {
    let navigate = useNavigate();
    const[user, setUsers]= useState({
        name: "",
        username :"",
        email:""
    })
const{name,username,email}= user
const onInputchange=(e)=>{
setUsers({...user,[e.target.name]:e.target.value})
};
const onSubmit= async(e)=>{
   e.preventDefault();
    await axios.post("http://localhost:8080/user",user);
    navigate("/");
};

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card shadow">
          <div className="card-body">
            <h4 className="card-title mb-4">Add User</h4>
            <form onSubmit={(e)=>onSubmit(e)}>  
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e)=>onInputchange(e)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e)=>onInputchange(e)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e)=>onInputchange(e)}
                  required
                />
              </div>
              <div className="d-grid-2">
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger mx-2" to={"/"}>Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
