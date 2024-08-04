import React from 'react'
import { useState,useEffect } from 'react'
import database from '@/server/firebase'
import Head from 'next/head'
import { useRouter } from 'next/router'


function Name() {
  const[sspNameData,setsspNames] = useState()
  const[ssvpNameData,setssvpNames] = useState()
  const[sssNameData,setsssNames] = useState()
  const[sccNameData,setsccNames] = useState()
  const[sspv,setsspv]=useState("")
  const[ssvpv,setssvpv]=useState("")
  const[sssv,setsssv]=useState("")
  const[sccv,setsccv]=useState("")
  const router = useRouter()


  useEffect(() => {
    if(sessionStorage.getItem('Auth')==null||sessionStorage.getItem('Auth')==0){
      router.push('/')
    }
    var sspNames = database.ref('/ssp');
    sspNames.on('value', (snapshot) => {
    const sspdata = snapshot.val();
    const ssparray = sspdata&&Object.values(sspdata)
    
    
  
    setsspNames(ssparray) 
    
    
  },[sspNameData]);
  
  var ssvpNames = database.ref('/ssvp');
  ssvpNames.on('value', (snapshot) => {
  const ssvpdata = snapshot.val();
  const ssvparray = ssvpdata&&Object.values(ssvpdata)
  
  
  
  setssvpNames(ssvparray) 
  
  
  },[ssvpNameData]);
  
  var sssNames = database.ref('/sss');
  sssNames.on('value', (snapshot) => {
  const sssdata = snapshot.val();
  const sssarray = sssdata&&Object.values(sssdata)
  
  
  
  setsssNames(sssarray) 
  
  
  },[sssNameData]);
  
  var sccNames = database.ref('/scc');
  sccNames.on('value', (snapshot) => {
  const sccdata = snapshot.val();
  const sccarray = sccdata&&Object.values(sccdata)
  
  
  
  setsccNames(sccarray) 
  
  
  },[sccNameData]);
   
    
   }, [])
   const castvote= async()=>{
    if(sspv&&ssvpv&&sssv&&sccv!=""){
    try{
      await database.ref(sspv).transaction(function(value) {
        return (value || 0) + 1;
      });}
      catch{
        null
      }
     try{ 
      await database.ref(ssvpv).transaction(function(value) {
        return (value || 0) + 1;
      }); } 
      catch{
        null
      }
      try{
      await database.ref(sssv).transaction(function(value) {
        return (value || 0) + 1;
      });}
      catch{
        null
      }
      try{
      await database.ref(sccv).transaction(function(value) {
        return (value || 0) + 1;
      });}
      catch{
        null
      }
      
      setsspv("")
      setssvpv("")
      setsssv("")
      setsccv("")
      new Audio('./assets/sucess.wav').play().then(router.reload())
    
    }
    else{

      alert("Make Sure To Vote For Every Category")
    }
   }


  return (
  <>
    <Head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"/>
      <title>EVM Admin Dashboard</title>
    </Head>

    <div class="container-fluid mx-auto">

      <div class="h-100 d-flex align-items-center justify-content-center mt-5 pt-5">
      <button type="button" class="btn btn-lg btn-dark rounded-0 border border-1 border-secondary mt-5" data-bs-toggle="modal" data-bs-target="#ssp">      
        <h1 class="display-1">Vote !</h1>

    </button>
      </div>

      <footer class="border-top border-dark border-1 py-2 fixed-bottom">
  <center>
  <p class="text-secondary fw-semibold font-monospace">Developed by <span class="font-monospace fst-italic">AVK IT CELL @2024</span></p>

  </center>
</footer>
      
     
      
      <div class="modal fade" id="ssp" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header mx-auto">      
        <h1 class="modal-title display-2" id="staticBackdropLabel">Senior Student President</h1>
            </div>
            <div class="modal-body">
              {
                sspNameData&&sspNameData.map((n)=>{
    return(
        <div class="form-check " >
                    <div class="container mx-auto ">

          <div class="container mx-auto ">
          <br/>
  <input class="form-check-input btn btn-lg p-0 border-dark rounded-0 ms-auto mt-3 mx-3" type="radio" name="flexRadioDefault1" id={flexRadioDefault1${n.name}} onChange={(e)=>{
    if(e.target.checked){
        setsspv(/ssp/${n.id}/value)
    }
  }} required/>
  <label class="form-check-label text-black ms-auto mb-3 " for={flexRadioDefault1${n.name}}>
    <h1 class="display-3">{n.name}</h1>
  </label>
  </div>
  </div>
</div>

    )
                })
              }
            </div>
            <div class="modal-footer mx-auto">
            <button type="submit" class="btn btn-dark btn-lg fw-bold rounded-0 fs-2 p-4" data-bs-toggle="modal" data-bs-target="#ssvp">
        Next
      </button>
            </div>
          </div>
        </div>
      </div>

      

      <div class="modal fade" id="ssvp" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header mx-auto">
        <h1 class="modal-title display-2" id="staticBackdropLabel">Senior Student Vice President</h1>
      </div>
      <div class="modal-body">
              {
        ssvpNameData&&ssvpNameData.map((n)=>{
    return(
        <div class="form-check">
          <div class="container mx-auto ">

<div class="container mx-auto ">
<br/>
  <input class="form-check-input btn btn-lg p-0 border-dark rounded-0 ms-auto mt-3 mx-3" type="radio" name="flexRadioDefault2" id={flexRadioDefault2${n.name}} onChange={(e)=>{
    if(e.target.checked){
        setssvpv(/ssvp/${n.id}/value)
    }
  }} required/>
  <label class="form-check-label text-black ms-auto mb-3" for={flexRadioDefault2${n.name}}>
    <h1 class="display-3">{n.name}</h1>
  </label>
</div>
</div>
</div>

    )
        })
        
           }
      </div>
      <div class="modal-footer mx-auto">
      <button type="submit" class="btn btn-warning btn-lg rounded-0 text-black fw-bold fs-2 p-4" data-bs-toggle="modal" data-bs-target="#ssp">
  Previous
</button>
      <button type="submit" class="btn btn-dark btn-lg fw-bold rounded-0 fs-2 p-4" data-bs-toggle="modal" data-bs-target="#sss">
  Next
</button>
      </div>
    </div>
  </div>
      </div>



      <div class="modal fade" id="sss" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header mx-auto">
        <h1 class="modal-title display-2" id="staticBackdropLabel">Senior Student Secretary</h1>
      </div>
      <div class="modal-body">
      {
sssNameData&&sssNameData.map((n)=>{
    return(
        <div class="form-check">
          <div class="container mx-auto ">

<div class="container mx-auto ">
<br/>
  <input class="form-check-input btn btn-lg p-0 border-dark rounded-0 ms-auto mt-3 mx-3" type="radio" name="flexRadioDefault3" id={flexRadioDefault3${n.name}} onChange={(e)=>{
    if(e.target.checked){
        setsssv(/sss/${n.id}/value)
    }
  }} />
  <label class="form-check-label text-black ms-auto mb-3" for={flexRadioDefault3${n.name}}>
  <h1 class="display-3">{n.name}</h1>

  </label>
</div>
</div>
</div>

    )
})

   }
      </div>
      <div class="modal-footer mx-auto">
      <button type="submit" class="btn btn-warning btn-lg rounded-0 text-black fw-bold fs-2 p-4" data-bs-toggle="modal" data-bs-target="#ssvp">
  Previous
</button>
      <button type="button" class="btn btn-dark btn-lg fw-bold rounded-0 fs-2 p-4" data-bs-toggle="modal" data-bs-target="#scc">
  Next
</button>
      </div>
    </div>
  </div>
      </div>




<div class="modal fade" id="scc" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content mx-auto">
      <div class="modal-header mx-auto">
        <h1 class="modal-title display-2" id="staticBackdropLabel">Senior Cultural Coordinator</h1>
      </div>
      <div class="modal-body">
      {
sccNameData&&sccNameData.map((n)=>{
    return(
        <div class="form-check">
           <div class="container mx-auto ">

<div class="container mx-auto ">
<br/>
  <input class="form-check-input btn btn-lg p-0 border-dark rounded-0 ms-auto mt-3 mx-3" type="radio" name="flexRadioDefault4" id={flexRadioDefault4${n.name}} onChange={(e)=>{
    if(e.target.checked){
        setsccv(/scc/${n.id}/value)
    }
  }} />
  <label class="form-check-label text-black ms-auto mb-3" for={flexRadioDefault4${n.name}}>
  <h1 class="display-3">{n.name}</h1>
  </label>
</div>
</div>
</div>

    )
})

   }
      </div>
      <div class="modal-footer mx-auto">
      <button type="submit" class="btn btn-warning rounded-0 text-black fw-bold btn-lg fs-2 p-4" data-bs-toggle="modal" data-bs-target="#sss">
  Previous
</button>
      <button type="button" class="btn btn-success rounded-0 text-black fw-bold btn-lg fs-2 p-4" onClick={castvote} >Submit</button>

      </div>
    </div>
  </div>
</div>


    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

   </>
  )
}

export default Name
