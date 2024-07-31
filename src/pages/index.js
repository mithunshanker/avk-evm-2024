import React, { useState } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import firebase from 'firebase';
import { auth } from '@/server/firebase';

function login() {
  const [Email,setEmail]= useState("")
  const[Pass,setPass]=useState("")

 const router =useRouter()
const logIn = async (e) => {

  e.preventDefault()
    if(Email=="eca@avk.edu.in" && Pass=="avkeca@2024"){
      sessionStorage.setItem('Auth','1')
    router.push('/home')
    }

};
  return (
<>
<Head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"/>
  <title>AVK EVM Login</title>
</Head>
  

<nav class="navbar navbar-expand-lg bg-black navbar-dark border-bottom border-1 border-dark mb-3">
  <div class="container-fluid text-center my-2 ">
    
  <div class="p-1 mx-auto">
  <a class="navbar-brand" href="#">
     <span class="fw-bolder font-monospace">Election Commission</span><br/>
     <span class="lead">Adarsh Vidya Kendra</span>  
    </a>
  </div>


    
  </div>
</nav>


<div class="input-group input-group-lg justify-content-center py-4" data-bs-theme="dark">
<div class="d-flex flex-column mb-3">
  <div class="p-0">
  <input onChange={(e)=>{
    setEmail(e.target.value)
  }} type="email" class="form-control rounded-0 bg-dark my-1 text-white" placeholder="Username" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required/>
  </div>
  <div class="p-0">
  <input onChange={(e)=>{
    setPass(e.target.value)
  }} type="password" class="form-control rounded-0 bg-dark my-1 text-white" placeholder="Password" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required/>
  </div>
  <div class="p-0">
  <button  type="button" onClick={logIn} class="form-control btn btn-light rounded-0 my-1 font-monospace fw-bolder" >LOGIN</button>

  </div>
</div>

</div>

<footer class="border-top border-dark border-1 py-2 fixed-bottom">
  <center>
  <p class="text-dark fw-semibold font-monospace">Developed by <span class="font-monospace text-secondary">AVK IT CELL</span></p>

  </center>
</footer>  
    </>
  )
}

export default login