// Import the functions you need from the SDKs you need
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCRNRbtLiaTHFcY5eKlmbQKnweJia_qzSg",
  authDomain: "avk-evm-2024.firebaseapp.com",
  databaseURL: "https://avk-evm-2024-default-rtdb.firebaseio.com",
  projectId: "avk-evm-2024",
  storageBucket: "avk-evm-2024.appspot.com",
  messagingSenderId: "889302792890",
  appId: "1:889302792890:web:ae311d2b7a229e775f6083"
  };
  
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig)
}
var database = firebase.database()
export var auth = firebase.auth()
export default database
