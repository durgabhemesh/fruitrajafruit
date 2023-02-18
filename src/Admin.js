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

  const df=async()=>{

    const res=await fetch('https://juices-74cd7-default-rtdb.firebaseio.com/Juices/j3.json')
    const resData=await res.json()
  
    console.log(resData.name)
    setNu(resData.name)
  }
  const[passi,setPassi]=useState('')
  const pass=(e)=>{
    setPassi(e.target.value)

  }
  const blast=()=>{
    fetchi()
    df()

  }
const reset=()=>{
  setCount(0)
  setNumber()

 
  setData([])

}

const Sub=(e)=>{
  e.preventDefault();
  if(passi==='frf@7394'){

    setFlag(true)
    setPassi('')
  }
  
  
}
const getNumber=()=>{
  setLoading(true)

  setTimeout(()=>{
    setCount(count+1)
    setNumber(Math.floor(Math.random() * 30))
    fetchi()
    df()
    setData((pdata)=>{
      return[number,'-',...pdata]
    })
   
    setLoading(false)
  },10000)
  
  
 
  
  

}
useEffect(()=>{
  fetchi()
},[count])
  return (
    
        <>
      
    <div className='Container'>
     
     
     {count===6 ? <h2 className= 'gameover'>Game Over</h2>  : <h2 className= 'letsplay'>Let's Play</h2> } 
     <h1 className='threedots'>{loading ? <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 /> : <h1 className='NumberH1'>{nu}</h1> }</h1>
 {number}
 {count!=5 &&
<button className='generate' disabled={flag===false} onClick={()=>getNumber()}>Generate</button>
}
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
