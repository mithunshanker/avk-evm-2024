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
  <title>EVM Admin Dashboard</title>
</Head>
    <div>
    <nav class="navbar navbar-expand-lg bg-black navbar-dark border-bottom border-2 border-dark">
  <div class="container-fluid my-2 justify-content-center">
  <div class="hstack gap-3">
  <a class="navbar-brand btn btn-transparent justify-center " href="#">
            <img src="https://media.licdn.com/dms/image/C510BAQHjLBHoxIBfNg/company-logo_200_200/0/1580626235010?e=1695859200&v=beta&t=uMWv18NJ1_C9XrBAuGxd16Kq2XaIrr8ot62WPzgi9w0" class="rounded-circle" alt="AVK" width="68" height="68"/>
        </a>
  <div class="p-1">
  <a class="navbar-brand" href="#">
     <span class="fw-bolder font-monospace">Election Commision</span><br/>
     <span class="lead">Adarsh Vidya Kendra</span>  
    </a>
  </div>
  <div class="vr border-dark text-secondary fw-bolder border-2"></div>
  <div class="p-1">
    <a class="nav-link text-white font-decoration-none" href="#">
        <span class="fw-bolder font-monospace">Electronic Voting Machine</span><br/>
        <span class="lead">Admin Portal Login</span>  
    </a>
  </div>
</div>


  </div>
</nav>


<div>
  <div  >
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
</div>
</div>
    </div>
    </>
  )
}

export default login
