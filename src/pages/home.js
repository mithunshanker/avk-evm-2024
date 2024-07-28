
import { useEffect, useState } from 'react';
import database from '@/server/firebase';
import Head from 'next/head';
import { useRouter } from 'next/router';



export default function Home() {
  const[sspvoteData,setsspVotes] = useState()
  const[ssvpvoteData,setssvpVotes] = useState()
  const[sssvoteData,setsssVotes] = useState()
  const[sccvoteData,setsccVotes] = useState()


 

const router = useRouter()
 useEffect(() => {
  if(sessionStorage.getItem('Auth')==null||sessionStorage.getItem('Auth')==0){
    router.push('/')
  }
  var sspvotes = database.ref('/ssp');
  sspvotes.on('value', (snapshot) => {
  const sspdata = snapshot.val();
  const ssparray = sspdata&&Object.values(sspdata)
  
  

  setsspVotes(ssparray) 
  
  
},[sspvoteData]);

var ssvpvotes = database.ref('/ssvp');
ssvpvotes.on('value', (snapshot) => {
const ssvpdata = snapshot.val();
const ssvparray = ssvpdata&&Object.values(ssvpdata)



setssvpVotes(ssvparray) 


},[ssvpvoteData]);

var sssvotes = database.ref('/sss');
sssvotes.on('value', (snapshot) => {
const sssdata = snapshot.val();
const sssarray = sssdata&&Object.values(sssdata)



setsssVotes(sssarray) 


},[ssvpvoteData]);

var sccvotes = database.ref('/scc');
sccvotes.on('value', (snapshot) => {
const sccdata = snapshot.val();
const sccarray = sccdata&&Object.values(sccdata)



setsccVotes(sccarray) 


},[ssvpvoteData]);
 
  
 }, [])
 

 

  return (
    <>
<Head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"/>
  <title>EVM Admin Dashboard</title>
</Head>


<div class="d-flex bg-black">
 
  <div class="p-0 w-100">
<nav class="navbar navbar-expand-lg bg-black navbar-dark border-bottom border-2 border-dark">
  <div class="container-fluid my-2">
  <div class="hstack gap-3">
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
        <span class="lead">Admin Portal</span>  
    </a>
  </div>
</div>

    <ul class="nav justify-content-end">
       <li class="nav-item">
           <a class="nav-link">
           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle text-secondary" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
           </a>
       </li>
    </ul>
  </div>
</nav>




<div class="row mx-1">



{/* ssp  */}

      <h1>ssp</h1>
      <div class="col-md-6 mt-3">
        <div class="card bg-dark rounded-0">
          <div class="card-body p-0">
            <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
            <p class="card-text text-white py-1 px-2">{sspvoteData&&sspvoteData.length}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4 mx-1">
      
    <div class="col-md-12">
      <div class="card bg-transparent ">
        <div class="card-body p-0">
          <table class="table table-striped table-dark">
            <thead class="p-0">
              <tr class="table-dark">
                <th><h5 class="p-0">Candidates</h5></th>
                <th><h5 class="p-0">Votes</h5></th>
              </tr>
            </thead>
    { 
   sspvoteData&&sspvoteData.map((v)=>{
    return(


          
           <tbody>
              <tr>
                <td>{v.name}</td>
                <td>{v.value}</td>
              </tr>
            </tbody>
   

    )
   })
   
   }
             </table>
           </div>
      </div>
    </div>
    </div>
  </div>



{/* ssvp  */}



  <h1>ssvp</h1>

  <div class="col-md-6 mt-3">
        <div class="card bg-dark rounded-0">
          <div class="card-body p-0">
            <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
            <p class="card-text text-white py-1 px-2">{ssvpvoteData&&ssvpvoteData.length}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4 mx-1">
      
    <div class="col-md-12">
      <div class="card bg-transparent ">
        <div class="card-body p-0">
          <table class="table table-striped table-dark">
            <thead class="p-0">
              <tr class="table-dark">
                <th><h5 class="p-0">Candidates</h5></th>
                <th><h5 class="p-0">Votes</h5></th>
              </tr>
            </thead>
    { 
   ssvpvoteData&&ssvpvoteData.map((v)=>{
    return(


          
           <tbody>
              <tr>
                <td>{v.name}</td>
                <td>{v.value}</td>
              </tr>
            </tbody>
   

    )
   })
   
   }
             </table>
           </div>
      </div>
    </div>



    {/* sss  */}



  <h1>sss</h1>

<div class="col-md-6 mt-3">
      <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
          <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
          <p class="card-text text-white py-1 px-2">{sssvoteData&&sssvoteData.length}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-4 mx-1">
    
  <div class="col-md-12">
    <div class="card bg-transparent ">
      <div class="card-body p-0">
        <table class="table table-striped table-dark">
          <thead class="p-0">
            <tr class="table-dark">
              <th><h5 class="p-0">Candidates</h5></th>
              <th><h5 class="p-0">Votes</h5></th>
            </tr>
          </thead>
  { 
 sssvoteData&&sssvoteData.map((v)=>{
  return(


        
         <tbody>
            <tr>
              <td>{v.name}</td>
              <td>{v.value}</td>
            </tr>
          </tbody>
 

  )
 })
 
 }
           </table>
         </div>
    </div>
  </div>

  {/* sss  */}



  <h1>scc</h1>

<div class="col-md-6 mt-3">
      <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
          <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
          <p class="card-text text-white py-1 px-2">{sccvoteData&&sccvoteData.length}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-4 mx-1">
    
  <div class="col-md-12">
    <div class="card bg-transparent ">
      <div class="card-body p-0">
        <table class="table table-striped table-dark">
          <thead class="p-0">
            <tr class="table-dark">
              <th><h5 class="p-0">Candidates</h5></th>
              <th><h5 class="p-0">Votes</h5></th>
            </tr>
          </thead>
  { 
 sccvoteData&&sccvoteData.map((v)=>{
  return(


        
         <tbody>
            <tr>
              <td>{v.name}</td>
              <td>{v.value}</td>
            </tr>
          </tbody>
 

  )
 })
 
 }
           </table>
         </div>
    </div>
  </div>




    
    </div>

    


    
  

  <br/><br/>
<br/>
<br/>
<br/>
<br/><br/>
<br/>
<br/>
<br/>







      
      </>
  )
}
