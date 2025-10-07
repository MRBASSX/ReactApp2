import { useEffect, useState } from 'react'
import '../static/css/App.css'

function CounterPage() {


    const [Count,SetCount] = useState(0)
//  useEffect(()=>{
//     SetCount(166666);
//  })
    return (
        <>
<div className="row" style={{height:"800px",display:"flex",justifyContent:"center"}} >

        <button style={{fontSize:"200px",}} onClick={(e)=>{SetCount(Count + 1)}}>{"+"}</button>
        <div className="count"  style={{fontSize:"200px",}}>{Count}</div>
         <button style={{fontSize:"200px",}} onClick={(e)=>{SetCount(Count -1)}}>{"-"}</button>

    </div>      
    
      </>
    )
    
}

export default CounterPage