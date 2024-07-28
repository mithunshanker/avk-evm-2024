// import { useEffect, useState } from 'react';
// import database, { auth } from '@/server/firebase';
// import Head from 'next/head';
// import {  useRouter } from 'next/router';
// import firebase from 'firebase';



// export default function Home() {
//   const[voteData,setVotes] = useState()
//   const router = useRouter()
//  useEffect(() => {
//   if(sessionStorage.getItem('Auth')==null||sessionStorage.getItem('Auth')==0){
//     router.push('/')
//   }
//   var votes = database.ref('/');
//   votes.on('value', (snapshot) => {
//   const data = snapshot.val();
//   const array = data&&Object.values(data)

//   setVotes(array) 
  
  
  
// },[voteData]);
 
  
//  }, [])
 




 

//   return (
//     <>
  


// <Head>
//   <meta charset="UTF-8"/>
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"/>
//   <title>EVM Admin Dashboard</title>
// </Head>


// <div class="d-flex bg-black">
//   {/* <div class="p-0 flex-shrink-1 bg-black mh-100 border-end border-dark">
//     <nav class="nav flex-column py-3 border-dark">
//         <a class="navbar-brand btn btn-transparent justify-center mx-2" href="#">
//             <img src="https://media.licdn.com/dms/image/C510BAQHjLBHoxIBfNg/company-logo_200_200/0/1580626235010?e=1695859200&v=beta&t=uMWv18NJ1_C9XrBAuGxd16Kq2XaIrr8ot62WPzgi9w0" class="rounded-circle" alt="AVK" width="68" height="68"/>
//         </a>
//         <hr class="border-2 text-secondary"/>
//        <a class="btn btn-light fw-bolder rounded-0 m-1 mx-2 py-">S P L</a>
//        <a class="btn btn-dark fw-bolder rounded-0 m-1 mx-2 py-" href="/aspl">A S P L</a>
//        <hr class="border-2 text-secondary"/>
//        <a class="btn btn-dark fw-bolder rounded-0 m-1 mx-2 py-">ABOUT</a>
//     </nav>
//   </div> */}
//   <div class="p-0 w-100">
// <nav class="navbar navbar-expand-lg bg-black navbar-dark border-bottom border-2 border-dark">
//   <div class="container-fluid my-2">
//   <div class="hstack gap-3">
//   <div class="p-1">
//   <a class="navbar-brand" href="#">
//      <span class="fw-bolder font-monospace">Election Commision</span><br/>
//      <span class="lead">Adarsh Vidya Kendra</span>  
//     </a>
//   </div>
//   <div class="vr border-dark text-secondary fw-bolder border-2"></div>
//   <div class="p-1">
//     <a class="nav-link text-white font-decoration-none" href="#">
//         <span class="fw-bolder font-monospace">Electronic Voting Machine</span><br/>
//         <span class="lead">Admin Portal</span>  
//     </a>
//   </div>
// </div>

//     <ul class="nav justify-content-end">
//        <li class="nav-item">
//            <a class="nav-link">
//            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle text-secondary" viewBox="0 0 16 16">
//   <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
//   <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
// </svg>
//            </a>
//        </li>
//     </ul>
//   </div>
// </nav>


// <nav class="navbar navbar-dark bg-dark mx-3 mt-1">
// <div class="container-fluid">
//     <span class="navbar-text lead">S. P. L ( School Pupil Leader )</span>
//   </div>
// </nav>


// <div class="row mx-1">
    
//       <div class="col-md-6 mt-3">
//         <div class="card bg-dark rounded-0">
//           <div class="card-body p-0">
//             <h5 class="card-title text-white bg-black p-2">Total Voters</h5>
//            { voteData&&<p class="card-text text-white py-1 px-2">{voteData[0].value+voteData[1].value+voteData[2].value+voteData[3].value}</p>}
//           </div>
//         </div>
//       </div>
//       <div class="col-md-6 mt-3">
//         <div class="card bg-dark rounded-0">
//           <div class="card-body p-0">
//             <h5 class="card-title text-white bg-black p-2">Total Candidates</h5>
//             <p class="card-text text-white py-1 px-2">{voteData&&voteData.length}</p>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div class="row mt-4 mx-1">
      
//     <div class="col-md-12">
//       <div class="card bg-transparent ">
//         <div class="card-body p-0">
//           <table class="table table-striped table-dark">
//             <thead class="p-0">
//               <tr class="table-dark">
//                 <th><h5 class="p-0">Candidates</h5></th>
//                 <th><h5 class="p-0">Votes</h5></th>
//               </tr>
//             </thead>
//     { 
//    voteData&&voteData.map((v)=>{
  
//     return(


   
//             <tbody>
//               <tr>
//                 <td>{v.name}</td>
//                 <td>{v.value}</td>
//               </tr>
//             </tbody>
   

//     )
//    })
   
//    }
//              </table>
//            </div>
//       </div>
//     </div>
//     </div>
//   </div>
// </div>

      
//       </>
//   )
// }
