import { use, useEffect, useState } from "react"

 
    
export function Box({sports=[
	{ id:1,name: "Football", icon: "⚽" },
	{ id:2,name: "Basketball", icon: "🏀" },
	{ id:3,name: "Tennis", icon: "🎾" },
	{ id:4,name: "Cricket", icon: "🏏" },
	{ id:5,name: "Baseball", icon: "⚾" },
	{ id:6,name: "Golf", icon: "⛳" },
] ,MyFunct,bottom = "test"}) {



    MyFunct("Hi I am Your Function")

    return(
        <>
        
            <main  className="">
                {sports.map((sport) => (
                    <div key={sport.name}>
                        <img src={sport.image} alt={sport.name}/>
                        <div >
                            <h2 >{sport.name}</h2>
                            <p  >{sport.icon}</p>
                          <div className="bottom">{bottom}</div>
                        </div>
                    </div>
                    
                ))}
            </main>
        
        
        
        
        
        
        
        
        
        
        
        
        </>
    )
    
}

// export default Box