import React, { useEffect } from 'react'
import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'


const Admin = (props) => {
  const[number,setNumber]=useState()
  const[loading,setLoading]=useState(false)
  const[count,setCount]=useState(0)
  const[data,setData]=useState([])
  const[flag,setFlag]=useState(false)
  const[nu,setNu]=useState()
  
  const fetchi=async()=>{
    const api=await fetch('https://juices-74cd7-default-rtdb.firebaseio.com/Juices/j3.json',{
        method: 'PUT',
        body: JSON.stringify({
          name: number
        }),
        headers:{
            'content-type':'application.json'
        }
       })
       const resapi=api.json()
      
       console.log(resapi)
  }

  // const df=async()=>{

  //   const res=await fetch('https://juices-74cd7-default-rtdb.firebaseio.com/Juices/j3.json')
  //   const resData=await res.json()
  
  //   console.log(resData.name)
  //   setNu(resData.name)
  // }
  const[passi,setPassi]=useState('')
  const pass=(e)=>{
    setPassi(e.target.value)

  }
  
const reset=()=>{
  setCount(0)
  setNumber()

 
  setData([])

}

const Sub=(e)=>{
  e.preventDefault();
  if(passi==='12345'){

    setFlag(true)
    setPassi('')
  }
  
  
}

// const df=async()=>{

//   const res=await fetch('https://juices-74cd7-default-rtdb.firebaseio.com/Juices/j3.json')
//   const resData=await res.json()

//   console.log(resData.name)
//   setNum(resData.name)
//   setCount(count+1)
//   // setData((pdata)=>{
//   //       return[num,'-',...pdata]
//   //     })
// }
// setInterval(()=>{
//   df()
// },1000)
const getNumber=async()=>{
  console.log('clicked')
  // setLoading(true)

  // setTimeout(()=>{
    
  //   setNumber(Math.floor(Math.random() * 30))
    
    
  //   setData((pdata)=>{
  //     return[number,'-',...pdata]
  //   })
   
  //   setLoading(false)
  // },100)
  console.log('start')
  // setLoading(true)
  
  const api=await fetch('https://juices-74cd7-default-rtdb.firebaseio.com/Juices/j3.json',{
        method: 'PATCH',
        body: JSON.stringify({
          name: (Math.floor(Math.random() * 30))
        }),
        headers:{
            'content-type':'application.json'
        }
       })
       
       const resapi=api.json()
       console.log(resapi)
       console.log('end')
      //  setLoading(true)
      
      // setLoading(false)
       
       
 
  setCount(count+1)
 
  
 
  
  

}

const[num,setNum]=useState()

const df=async()=>{

  const res=await fetch('https://juices-74cd7-default-rtdb.firebaseio.com/Juices/j3.json')
  const resData=await res.json()

  console.log(resData.name)
  setNum(resData.name)
  
  // setData((pdata)=>{
  //       return[num,'-',...pdata]
  //     })
}
setInterval(()=>{
  df()
},10000)

  return (
    
        <>
      
    <div className='Container'>
     
     
     <h1 className='NumberH1'>{num}</h1> 
 
 
 
<button className='generate' disabled={flag===false} onClick={()=>getNumber()}>Generate</button>

{count===5 && <button className='reset' onClick={()=>reset()}>Reset</button>}
{data &&
<h3>Last Numbers
  <br />{data }</h3>
}
    </div>
    <form onSubmit={Sub} >
      <h3 >Admin Login</h3>
         <input onChange={pass} type='password'></input>
         <button className='Bsub'>Submit</button>
        </form>
     
    </>
   
  )
}

export default Admin
