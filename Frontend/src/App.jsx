import { useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')

  const handleUser = (e) =>{
          e.preventDefault();
          axios.post('http://localhost:3001/createUser',{name,email,age})
          .then(result=> console.log(result))
          .catch(err =>console.log(err))
  }
  return (
    <>
    <div className="container">
        <form onChange={handleUser} method={post}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        value={email} onChange={(e)=>setEmail(e.target.value)}
        />
       
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="text" class="form-control" id="exampleInputPassword1"
        value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"
        value={age} onChange={(e)=>setAge(e.target.value)}/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    </>
  )
}

export default App
