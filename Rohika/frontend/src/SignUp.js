import React, { useState } from 'react'
import './index.css'
import axios from 'axios'

function SignUp(){
    const [values, setValues] = useState({
        name: '',
        email:'', 
        password:'',
        balance:''
    })
    const handleChange = (event) => {
        setValues({...values, [event.target.name]:event.target.value})
    }
    const handleSubmit = (event) =>{
        console.log(values)
        event.preventDefault();
        axios.post('http://localhost:5000/users', values)
        .then(res=> console.log("registered Successfully..."))
        .catch(err => console.Consolel.log(err));
    }
    return (
        <form onSubmit={handleSubmit}>
        <div className="form">
            <h1>Sign Up</h1>
          <div className="form-body">
              <div className="username">
                  <label className="form__label" htmlFor="Name">First Name </label>
                  <input className="form__input" name="name" type="text" id="firstName" placeholder="First Name" onChange={handleChange} />
              </div>
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" name="email" className="form__input" placeholder="Email" onChange={handleChange} />
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" name="password" type="password"  id="password" placeholder="Password" onChange={handleChange} />
              </div>
              <div className="Balance">
                  <label className="form__label" htmlFor="Balance">Currency</label>
                  <input className="form__input" name="balance" type="Balance" id="Balance" placeholder="Balance" onChange={handleChange} />
              </div>
          </div>
          <div className="footer">
              <button type="submit" className="btn">Register</button>
          </div>
      </div>
      </form>      
    )
}

export default SignUp;