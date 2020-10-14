import React, { useState, } from 'react';
import axios from 'axios';
import './App.css';
import Form from './form.js'

function App() {
  const [user, setUser] = useState([])



  const submit = e => {

    axios
      .post('https://reqres.in/api/users', user)
      .then(res => {
        setUser([...user, e])
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <>
      <Form submit={submit}></Form>
      <p>{JSON.stringify(user)}</p>
    </>
  )
}

export default App;
