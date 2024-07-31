import React from 'react'
import { useState,useEffect } from 'react'
import database from '@/server/firebase'
import Head from 'next/head'
import { useRouter } from 'next/router'


function Sathya() {
  const[sc,setsc] = useState()
  const[svc,setsvc] = useState()

  const[scv,setscv]=useState("")
  const[svcv,setsvcv]=useState("")
 
  const router = useRouter()


  useEffect(() => {
    if(sessionStorage.getItem('Auth')==null||sessionStorage.getItem('Auth')==0){
      router.push('/')
    }
    var scNames = database.ref('/sc');
    scNames.on('value', (snapshot) => {
    const scdata = snapshot.val();
    const scarray = scdata&&Object.values(scdata)
    
    
  
    setsc(scarray) 
    
    
  },[sc]);
  
  var svcNames = database.ref('/svc');
  svcNames.on('value', (snapshot) => {
  const svcdata = snapshot.val();
  const svcArray = svcdata&&Object.values(svcdata)
  
  
  
  setsvc(svcArray) 
  
  
  },[svc]);

    
   }, [])
   const castvote= async()=>{
    if(svc&&svcv!=""){
    try{
      await database.ref(scv).transaction(function(value) {
        return (value || 0) + 1;
      });}
      catch{
        null
      }
     try{ 
      await database.ref(svcv).transaction(function(value) {
        return (value || 0) + 1;
      }); } 
      catch{
        null
      }
      
      
      setscv("")
      setsvcv("")
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
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Sathya House Captain</h1>
            </div>
            <div class="modal-body">
              {
                sc&&sc.map((n)=>{
    return(
        <div class="form-check" >
  <input class="form-check-input" type="radio" name="flexRadioDefault1" id={`flexRadioDefault1${n.name}`} onChange={(e)=>{
    if(e.target.checked){
        setscv(`/sc/${n.id}/value`)
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
    <div class="modal-content mx-auto">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Sathya House Vice Captain</h1>
      </div>
      <div class="modal-body">
      {
svc&&svc.map((n)=>{
    return(
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault4" id={`flexRadioDefault4${n.name}`} onChange={(e)=>{
    if(e.target.checked){
        setsvcv(`/svc/${n.id}/value`)
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
      <button type="submit" class="btn btn-warning rounded-0 text-black fw-bold" data-bs-toggle="modal" data-bs-target="#ssp">
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

export default Sathya     