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
    var sspNames = database.ref('/jsp');
    sspNames.on('value', (snapshot) => {
    const sspdata = snapshot.val();
    const ssparray = sspdata&&Object.values(sspdata)
    
    
  
    setsspNames(ssparray) 
    
    
  },[sspNameData]);
  
  var ssvpNames = database.ref('/jsvp');
  ssvpNames.on('value', (snapshot) => {
  const ssvpdata = snapshot.val();
  const ssvparray = ssvpdata&&Object.values(ssvpdata)
  
  
  
  setssvpNames(ssvparray) 
  
  
  },[ssvpNameData]);
  
  var sssNames = database.ref('/jss');
  sssNames.on('value', (snapshot) => {
  const sssdata = snapshot.val();
  const sssarray = sssdata&&Object.values(sssdata)
  
  
  
  setsssNames(sssarray) 
  
  
  },[sssNameData]);
  
  var sccNames = database.ref('/jcc');
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
      alert("Please Vote For All The Posts")
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

      <div class="h-100 d-flex align-items-center justify-content-center ">
      <button type="button" class="btn btn-lg btn-dark rounded-0 border border-1 border-secondary" data-bs-toggle="modal" data-bs-target="#ssp">      
        <h1 class="display-1">Vote !</h1>

    </button>
      </div>


      
     
      
      <div class="modal fade" id="ssp" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">      
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Senior Student President</h1>
            </div>
            <div class="modal-body">
              {
                sspNameData&&sspNameData.map((n)=>{
    return(
        <div class="form-check" >
  <input class="form-check-input" type="radio" name="flexRadioDefault1" id={`flexRadioDefault1${n.name}`} onChange={(e)=>{
    if(e.target.checked){
        setsspv(`/jsp/${n.id}/value`)
    }
  }} required/>
  <label class="form-check-label text-black" for={`flexRadioDefault1${n.name}`}>
    {n.name}
  </label>
  
</div>

    )
                })
              }
            </div>
            <div class="modal-footer">
            <button type="submit" class="btn btn-dark fw-bold rounded-0" data-bs-toggle="modal" data-bs-target="#ssvp">
        Next
      </button>
            </div>
          </div>
        </div>
      </div>

      

      <div class="modal fade" id="ssvp" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Senior Student Vice President</h1>
      </div>
      <div class="modal-body">
              {
        ssvpNameData&&ssvpNameData.map((n)=>{
    return(
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault2" id={`flexRadioDefault2${n.name}`} onChange={(e)=>{
    if(e.target.checked){
        setssvpv(`/jsvp/${n.id}/value`)
    }
  }} required/>
  <label class="form-check-label text-black fw-semibold " for={`flexRadioDefault2${n.name}`}>
    {n.name}
  </label>
</div>

    )
        })
        
           }
      </div>
      <div class="modal-footer">
      <button type="submit" class="btn btn-warning rounded-0 text-black fw-bold" data-bs-toggle="modal" data-bs-target="#ssp">
  Previous
</button>
      <button type="submit" class="btn btn-dark fw-bold rounded-0" data-bs-toggle="modal" data-bs-target="#sss">
  Next
</button>
      </div>
    </div>
  </div>
      </div>



      <div class="modal fade" id="sss" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Senior Student Secretary</h1>
      </div>
      <div class="modal-body">
      {
sssNameData&&sssNameData.map((n)=>{
    return(
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault3" id={`flexRadioDefault3${n.name}`} onChange={(e)=>{
    if(e.target.checked){
        setsssv(`/jss/${n.id}/value`)
    }
  }} />
  <label class="form-check-label text-black" for={`flexRadioDefault3${n.name}`}>
    {n.name}
  </label>
</div>

    )
})

   }
      </div>
      <div class="modal-footer">
      <button type="submit" class="btn btn-warning rounded-0 text-black fw-bold" data-bs-toggle="modal" data-bs-target="#ssvp">
  Previous
</button>
      <button type="button" class="btn btn-dark fw-bold rounded-0" data-bs-toggle="modal" data-bs-target="#scc">
  Next
</button>
      </div>
    </div>
  </div>
      </div>




<div class="modal fade" id="scc" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content mx-auto">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Senior Cultural Coordinator</h1>
      </div>
      <div class="modal-body">
      {
sccNameData&&sccNameData.map((n)=>{
    return(
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault4" id={`flexRadioDefault4${n.name}`} onChange={(e)=>{
    if(e.target.checked){
        setsccv(`/jcc/${n.id}/value`)
    }
  }} />
  <label class="form-check-label text-black" for={`flexRadioDefault4${n.name}`}>
    {n.name}
  </label>
</div>

    )
})

   }
      </div>
      <div class="modal-footer">
      <button type="submit" class="btn btn-warning rounded-0 text-black fw-bold" data-bs-toggle="modal" data-bs-target="#sss">
  Previous
</button>
      <button type="button" class="btn btn-success rounded-0 text-black fw-bold" onClick={castvote} >Submit</button>

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
