import React,{useState} from 'react'
import './crud.css'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const [name, setName] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [driving, setDriving] = useState("");
    const [pan, setPan] = useState("");
    const [voter, setVoter] = useState("");

    const navigate = useNavigate();

    const handlesubmit= (e)=>{
        e.preventDefault();
        Axios.post('http://localhost:8070/card',{
            name:name,
            aadhar:aadhar,
            driving:driving,
            pan:pan,
            voter:voter
        }).then(res=>{
            console.log('Got the Response : ',res.data);
            alert("Got the Response Successfully");
            sessionStorage.setItem("name",name); 
            sessionStorage.setItem("aadhar",aadhar); 
            sessionStorage.setItem("driving",driving); 
            sessionStorage.setItem("pan",pan); 
            sessionStorage.setItem("voter",voter); 
            navigate("/home");
        }).catch((e)=>{
            console.log('Error occured in insert.js', e);
            alert("Something went wrong");
        })
    }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handlesubmit}>
          <h3>Register</h3>
          <div className="mb-3">            
            <label>Name</label>
            <br/>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br/><br/>
          </div>
          <div className="mb-3">
            <label>AADHAR</label>
            <br/>
            <input
              type="password"
              className="form-control"
              placeholder="Enter"
              onChange={(e) => setAadhar(e.target.value)}
              required
            />
          </div>
          <br/>
          <div className="mb-3">
            <label>DRIVING</label>
            <br/>
            <input
              type="password"
              className="form-control"
              placeholder="Enter "
              onChange={(e) => setDriving(e.target.value)}
              required
            />
          </div>
          <br/>
          <div className="mb-3">
            <label>PAN</label>
            <br/>
            <input
              type="password"
              className="form-control"
              placeholder="Enter "
              onChange={(e) => setPan(e.target.value)}
              required
            />
          </div>
          <br/>
          <div className="mb-3">
            <label>VOTER ID</label>
            <br/>
            <input
              type="password"
              className="form-control"
              placeholder="Enter"
              onChange={(e) => setVoter(e.target.value)}
              required
            />
          </div>
          <br/><br/>
          <div className="d-grid">
            <center>
            <button type="submit" className="btn btn-primary" onClick={handlesubmit}>
              Register
            </button>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup