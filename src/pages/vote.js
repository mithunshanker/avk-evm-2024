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
   }


  return (
   <>
   <Head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"/>
  <title>EVM Admin Dashboard</title>
</Head>
    {/* ssp */}
    
   <h1>ssp</h1>

   {
sspNameData&&sspNameData.map((n)=>{
    return(
        <div class="form-check" >
  <input class="form-check-input" type="radio" name="flexRadioDefault1" id={`flexRadioDefault1${n.name}`} onChange={(e)=>{
    if(e.target.checked){
        setsspv(`/ssp/${n.id}/value`)
    }
  }} />
  <label class="form-check-label text-white" for={`flexRadioDefault1${n.name}`}>
    {n.name}
  </label>
</div>

    )
})

   }

     {/* ssvp */}
    
     <h1>ssvp</h1>

{
ssvpNameData&&ssvpNameData.map((n)=>{
    return(
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault2" id={`flexRadioDefault2${n.name}`} onChange={(e)=>{
    if(e.target.checked){
        setssvpv(`/ssvp/${n.id}/value`)
    }
  }} />
  <label class="form-check-label text-white" for={`flexRadioDefault2${n.name}`}>
    {n.name}
  </label>
</div>

    )
})

   }

     {/* sss */}
    
     <h1>sss</h1>

{
sssNameData&&sssNameData.map((n)=>{
    return(
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault3" id={`flexRadioDefault3${n.name}`} onChange={(e)=>{
    if(e.target.checked){
        setsssv(`/sss/${n.id}/value`)
    }
  }} />
  <label class="form-check-label text-white" for={`flexRadioDefault3${n.name}`}>
    {n.name}
  </label>
</div>

    )
})

   }

     {/* scc */}
    
     <h1>scc</h1>

{
sccNameData&&sccNameData.map((n)=>{
    return(
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault4" id={`flexRadioDefault4${n.name}`} onChange={(e)=>{
    if(e.target.checked){
        setsccv(`/scc/${n.id}/value`)
    }
  }} />
  <label class="form-check-label text-white" for={`flexRadioDefault4${n.name}`}>
    {n.name}
  </label>
</div>

    )
})

   }
   

   <button  onClick={castvote} >Submit</button>
   </>
  )
}

export default Name