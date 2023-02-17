import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './user';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Admin from './Admin';
import { ThreeDots } from 'react-loader-spinner'

import pic from './Bp.jpg'

function App() {
  const[nu,setNu]=useState()
  


  
  
//   const[number,setNumber]=useState()
//   const[loading,setLoading]=useState(false)
//   const[count,setCount]=useState(0)
//   const[data,setData]=useState([])
//   const getNumber=()=>{
//     setLoading(true)

//     setTimeout(()=>{
//       setNumber(Math.floor(Math.random() * 30))
//       setData((pdata)=>{
//         return[number,'-',...pdata]
//       })
//       setLoading(false)
//     },100)
    
//     setCount(count+1)
    
    
    
   
    

//   }
// const reset=()=>{
//   setCount(0)
//   setNumber()
 
//   setData([])

// }
  
  return (
    <>
    <Routes>
    <Route path="/" element={<Admin onData={Number()}/>}/>
   
  </Routes>
   
    </>
  );
}

export default App;
