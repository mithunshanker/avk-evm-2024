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
  const [ac, setac] = useState();
  const [avc, setavc] = useState();
  const[DC,setDC] = useState()
  const[DVC,setDVC] = useState()
  const[sc,setsc] = useState()
  const[svc,setsvc] = useState()
  const [shc, setshc] = useState();
  const [shvc, setshvc] = useState();


 

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


var acNames = database.ref('/ac');
acNames.on('value', (snapshot) => {
  const acdata = snapshot.val();
  const acarray = acdata && Object.values(acdata);
  setac(acarray);
},[ac]);

var avcNames = database.ref('/avc');
avcNames.on('value', (snapshot) => {
  const avcdata = snapshot.val();
  const avcArray = avcdata && Object.values(avcdata);
  setavc(avcArray);
},[avc]);

var dcNames = database.ref('/dc');
dcNames.on('value', (snapshot) => {
const dcdata = snapshot.val();
const dcarray = dcdata&&Object.values(dcdata)



setDC(dcarray) 


},[DC]);

var dvcNames = database.ref('/dvc');
dvcNames.on('value', (snapshot) => {
const dvcdata = snapshot.val();
const DVCArray = dvcdata&&Object.values(dvcdata)



setDVC(DVCArray) 


},[DVC]);

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

var shcNames = database.ref('/shc');
shcNames.on('value', (snapshot) => {
  const shcdata = snapshot.val();
  const shcarray = shcdata && Object.values(shcdata);
  setshc(shcarray);
},[shc]);

var shvcNames = database.ref('/shvc');
shvcNames.on('value', (snapshot) => {
  const shvcdata = snapshot.val();
  const shvcArray = shvcdata && Object.values(shvcdata);
  setshvc(shvcArray);
},[shc]);
  
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
    
  <div class="mx-auto">
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
      <div class="d-flex p-0">
  <div class="p-2 w-100 text-white bg-black p-2 text-start fs-5 fw-semibold">Total Candidates</div>
  <div class="p-2 flex-shrink-1 text-white py-1 px-4">{sspvoteData&&sspvoteData.length}</div>
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
      <div class="d-flex p-0">
  <div class="p-2 w-100 text-white bg-black p-2 text-start fs-5 fw-semibold">Total Candidates</div>
  <div class="p-2 flex-shrink-1 text-white py-1 px-4">{ssvpvoteData&&ssvpvoteData.length}</div>
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
    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Senior Students Secretary</h3>
      </center>
      <div class="card bg-dark rounded-0">
      <div class="d-flex p-0 text-start">
  <div class="p-2 w-100 text-white bg-black p-2 fs-5 fw-semibold">Total Candidates</div>
  <div class="p-2 flex-shrink-1 text-white py-1 px-4">{sssvoteData&&sssvoteData.length}</div>
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
  </div>
</div>

<div class="container-fluid text-center">
  <div class="row">

    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Senior Cultural Coordinator</h3>
      </center>
      <div class="card bg-dark rounded-0">
      <div class="d-flex p-0">
  <div class="p-2 w-100 text-white bg-black p-2 text-start fs-5 fw-semibold">Total Candidates</div>
  <div class="p-2 flex-shrink-1 text-white py-1 px-4">{sccvoteData&&sccvoteData.length}</div>
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
    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Junior Cultural Coordinator</h3>
      </center>
      <div class="card bg-dark rounded-0">
      <div class="d-flex p-0">
  <div class="p-2 w-100 text-white bg-black p-2 text-start fs-5 fw-semibold">Total Candidates</div>
  <div class="p-2 flex-shrink-1 text-white py-1 px-4">{jccvoteData&&jccvoteData.length}</div>
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


  <div class="row">
    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Junior Students President</h3>
      </center>
      <div class="card bg-dark rounded-0">
      <div class="d-flex p-0">
  <div class="p-2 w-100 text-white bg-black p-2 text-start fs-5 fw-semibold">Total Candidates</div>
  <div class="p-2 flex-shrink-1 text-white py-1 px-4">{jspvoteData&&jspvoteData.length}</div>
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

          <div class="d-flex p-0">
  <div class="p-2 w-100 text-white bg-black p-2 text-start fs-5 fw-semibold">Total Candidates</div>
  <div class="p-2 flex-shrink-1 text-white py-1 px-4">{jsvpvoteData&&jsvpvoteData.length}</div>
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
    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Junior Students Secratary</h3>
      </center>
      <div class="card bg-dark rounded-0">
      <div class="d-flex p-0">
  <div class="p-2 w-100 text-white bg-black p-2 text-start fs-5 fw-semibold">Total Candidates</div>
  <div class="p-2 flex-shrink-1 text-white py-1 px-4">{jssvoteData&&jssvoteData.length}</div>
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
  </div>
</div>

<div class="container-fluid text-center">
  <div class="row">



    <div class="col p-1 rounded-2 ">
      <center>
        <h3 class="text-white">Ahimsa Captain</h3>
      </center>
      <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
          <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
          <p class="card-text text-white py-1 px-2">{ac&&ac.length}</p>
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
 ac&&ac.map((v)=>{
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
        <h3 class="text-white">Ahimsa Vice-Captain</h3>
    </center>
    <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
            <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
            <p class="card-text text-white py-1 px-2">{avc && avc.length}</p>
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
                    avc && avc.map((v) => {
                        return (
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
        <h3 class="text-white">Dharma Captain</h3>
    </center>
    <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
            <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
            <p class="card-text text-white py-1 px-2">{DC && DC.length}</p>
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
                    DC && DC.map((v) => {
                        return (
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
        <h3 class="text-white">Dharma Vice-Captain</h3>
    </center>
    <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
            <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
            <p class="card-text text-white py-1 px-2">{DVC && DVC.length}</p>
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
                    DVC && DVC.map((v) => {
                        return (
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
        <h3 class="text-white">Shaurya Captain</h3>
    </center>
    <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
            <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
            <p class="card-text text-white py-1 px-2">{shc && shc.length}</p>
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
                    shc && shc.map((v) => {
                        return (
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
        <h3 class="text-white">Shaurya Vice-Captain</h3>
    </center>
    <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
            <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
            <p class="card-text text-white py-1 px-2">{shvc && shvc.length}</p>
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
                    shvc && shvc.map((v) => {
                        return (
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
        <h3 class="text-white">Sathya Captain</h3>
    </center>
    <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
            <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
            <p class="card-text text-white py-1 px-2">{sc && sc.length}</p>
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
                    sc && sc.map((v) => {
                        return (
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
        <h3 class="text-white">Sathya Vice-Captain</h3>
    </center>
    <div class="card bg-dark rounded-0">
        <div class="card-body p-0">
            <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
            <p class="card-text text-white py-1 px-2">{svc && svc.length}</p>
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
                    svc && svc.map((v) => {
                        return (
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
