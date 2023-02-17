import React from 'react'
import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'


const Admin = (props) => {
  const[number,setNumber]=useState()
  const[loading,setLoading]=useState(false)
  const[count,setCount]=useState(0)
  const[data,setData]=useState([])
  const[flag,setFlag]=useState(false)
  const getNumber=()=>{
    setLoading(true)

    setTimeout(()=>{
      setNumber(Math.floor(Math.random() * 30))
     
      setData((pdata)=>{
        return[number,'-',...pdata]
      })
      setLoading(false)
    },100)
    
    setCount(count+1)
    
    

  }
  const[passi,setPassi]=useState('')
  const pass=(e)=>{
    setPassi(e.target.value)
console.log(passi)
  }
const reset=()=>{
  setCount(0)
  setNumber()

 
  setData([])

}

const Sub=(e)=>{
  e.preventDefault();
  if(passi==='badri'){
    setFlag(true)
  }
  setPassi('')
  console.log('clickec')

}
  return (
    
        <>
      
    <div className='Container'>
     
     {count===5 ? <h2 className= 'gameover'>Game Over</h2>  : <h2 className= 'letsplay'>Let's Play</h2> } 
     <h1 className='threedots'>{loading ? <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 /> : <h1 className='NumberH1'>{number}</h1> }</h1>
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
         <input onChange={pass} type='text'></input>
         <button className='Bsub'>Submit</button>
        </form>
     
    </>
   
  )
}

export default Admin