import React, { useState } from 'react'

const User = (props) => {
  const[num,setNum]=useState()
  const[count,setCount]=useState(0)
  const[data,setData]=useState([])
  const df=async()=>{

    const res=await fetch('https://juices-74cd7-default-rtdb.firebaseio.com/Juices/j3.json')
    const resData=await res.json()
  
    console.log(resData.name)
    setNum(resData.name)
    setCount(count+1)
    // setData((pdata)=>{
    //       return[num,'-',...pdata]
    //     })
  }
  setInterval(()=>{
    df()
  },1000)
  return (
<>
    <div className='Container'>
     
     
     {count===6 ? <h2 className= 'gameover'>Game Over</h2>  : <h2 className= 'letsplay'>Let's Play</h2> } 
     {/* <h1 className='threedots'>{loading ? <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 /> : <h1 className='NumberH1'>{num}</h1> }</h1> */}
 <h1 className='NumberH1'>{num}</h1> 
 

{data &&
<h3>Last Numbers
  <br />{data }</h3>
}
    </div>
   
     
    </>
   
    
  )
}

export default User
