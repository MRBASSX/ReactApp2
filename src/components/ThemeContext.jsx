import { useContext } from "react";
import { createContext } from "react-router-dom";
import Home from "../pages/Home";






function ThemeContext() {  


    const  MyContext  = createContext("Lightr")

  
    


    return (

        <>

        <MyContext.Provider  value= {"Hi I Am Here"}>
               <Home  value = {"Hi I Am Here "}/>
        </MyContext.Provider>
        


        </>
    )
    
}




export  default ThemeContext
