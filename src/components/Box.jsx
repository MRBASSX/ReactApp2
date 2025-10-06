import { use, useEffect, useState } from "react"

 
    
function Box({sports}) {

    return(
        <>
        
            <main  className="">
                {sports.map((sport) => (
                    <div key={sport.name}>
                        <img src={sport.image} alt={sport.name}/>
                        <div >
                            <h2 >{sport.name}</h2>
                            <p  >{sport.description}</p>
                          
                        </div>
                    </div>
                    
                ))}
            </main>
        
        
        
        
        
        
        
        
        
        
        
        
        </>
    )
    
}

export default Box