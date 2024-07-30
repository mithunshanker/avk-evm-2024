import { useEffect, useState } from 'react';
import database from '@/server/firebase';
import Head from 'next/head';
import { useRouter } from 'next/router';



export default function Home() {
  const[sspvoteData,setsspVotes] = useState()
  const[ssvpvoteData,setssvpVotes] = useState()
  const[sssvoteData,setsssVotes] = useState()
  const[sccvoteData,setsccVotes] = useState()
  const[jspvoteData,setjspVotes] = useState()
  const[jsvpvoteData,setjsvpVotes] = useState()
  const[jssvoteData,setjssVotes] = useState()
  const[jccvoteData,setjccVotes] = useState()



 

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


},[sssvoteData]);

var sccvotes = database.ref('/scc');
sccvotes.on('value', (snapshot) => {
const sccdata = snapshot.val();
const sccarray = sccdata&&Object.values(sccdata)



setsccVotes(sccarray) 


},[sccvoteData]);

var sspvotes = database.ref('/jsp');
sspvotes.on('value', (snapshot) => {
const sspdata = snapshot.val();
const ssparray = sspdata&&Object.values(sspdata)



setjspVotes(ssparray) 


},[jspvoteData]);

var ssvpvotes = database.ref('/jsvp');
ssvpvotes.on('value', (snapshot) => {
const ssvpdata = snapshot.val();
const ssvparray = ssvpdata&&Object.values(ssvpdata)



setjsvpVotes(ssvparray) 


},[jsvpvoteData]);

var sssvotes = database.ref('/jss');
sssvotes.on('value', (snapshot) => {
const sssdata = snapshot.val();
const sssarray = sssdata&&Object.values(sssdata)



setjssVotes(sssarray) 


},[jssvoteData]);

var sccvotes = database.ref('/jcc');
sccvotes.on('value', (snapshot) => {
const sccdata = snapshot.val();
const sccarray = sccdata&&Object.values(sccdata)



setjccVotes(sccarray) 


},[jccvoteData]);
 
  
 }, [])
 

 

  return (
    <>
<Head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"/>
  <title>Avk EVM Admin Dashboard</title>
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

<div class="container-fluid text-center">
  <div class="row">
    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Senior Students President</h3>
      </center>
      <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
          <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
          <p class="card-text text-white py-1 px-2">{sspvoteData&&sspvoteData.length}</p>
        </div>
      </div>
      <div class="card bg-transparent mt-2">
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
    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Senior Students Vice President</h3>
      </center>
      <div class="card bg-dark rounded-0">
          <div class="card-body p-0">
            <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
            <p class="card-text text-white py-1 px-2">{ssvpvoteData&&ssvpvoteData.length}</p>
          </div>
      </div>
      <div class="card bg-transparent mt-2">
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
  </div>
</div>

<div class="container-fluid text-center">
  <div class="row">
    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Senior Students Secratary</h3>
      </center>
      <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
          <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
          <p class="card-text text-white py-1 px-2">{sssvoteData&&sssvoteData.length}</p>
        </div>
      </div>
      <div class="card bg-transparent mt-2">
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
    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Senior Cultural Coordinator</h3>
      </center>
      <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
          <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
          <p class="card-text text-white py-1 px-2">{sccvoteData&&sccvoteData.length}</p>
        </div>
      </div>
      <div class="card bg-transparent mt-2">
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


  <div class="row">
    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Junior Students President</h3>
      </center>
      <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
          <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
          <p class="card-text text-white py-1 px-2">{jspvoteData&&jspvoteData.length}</p>
        </div>
      </div>
      <div class="card bg-transparent mt-2">
        <div class="card-body p-0">
          <table class="table table-striped table-dark">
            <thead class="p-0">
              <tr class="table-dark">
                <th><h5 class="p-0">Candidates</h5></th>
                <th><h5 class="p-0">Votes</h5></th>
              </tr>
            </thead>
    { 
   jspvoteData&&jspvoteData.map((v)=>{
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
    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Junior Students Vice President</h3>
      </center>
      <div class="card bg-dark rounded-0">
          <div class="card-body p-0">
            <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
            <p class="card-text text-white py-1 px-2">{jsvpvoteData&&jsvpvoteData.length}</p>
          </div>
      </div>
      <div class="card bg-transparent mt-2">
        <div class="card-body p-0">
          <table class="table table-striped table-dark">
            <thead class="p-0">
              <tr class="table-dark">
                <th><h5 class="p-0">Candidates</h5></th>
                <th><h5 class="p-0">Votes</h5></th>
              </tr>
            </thead>
    { 
   jsvpvoteData&&jsvpvoteData.map((v)=>{
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

<div class="container-fluid text-center">
  <div class="row">
    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Junior Students Secratary</h3>
      </center>
      <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
          <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
          <p class="card-text text-white py-1 px-2">{jssvoteData&&jssvoteData.length}</p>
        </div>
      </div>
      <div class="card bg-transparent mt-2">
      <div class="card-body p-0">
        <table class="table table-striped table-dark">
          <thead class="p-0">
            <tr class="table-dark">
              <th><h5 class="p-0">Candidates</h5></th>
              <th><h5 class="p-0">Votes</h5></th>
            </tr>
          </thead>
  { 
 jssvoteData&&jssvoteData.map((v)=>{
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
    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Junior Cultural Coordinator</h3>
      </center>
      <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
          <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
          <p class="card-text text-white py-1 px-2">{jccvoteData&&jccvoteData.length}</p>
        </div>
      </div>
      <div class="card bg-transparent mt-2">
      <div class="card-body p-0">
        <table class="table table-striped table-dark">
          <thead class="p-0">
            <tr class="table-dark">
              <th><h5 class="p-0">Candidates</h5></th>
              <th><h5 class="p-0">Votes</h5></th>
            </tr>
          </thead>
  { 
 jccvoteData&&jccvoteData.map((v)=>{
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

<footer class="border-top border-dark border-1 py-2">
  <center>
  <p class="text-dark fw-semibold font-monospace">Developed by <span class="font-monospace text-secondary">AVK IT CELL</span></p>

  </center>
</footer>

      
      </>
  )
}
