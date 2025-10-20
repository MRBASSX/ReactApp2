import { PriceContext } from "../App.jsx"
import { useContext } from "react"


function Contact() {



    const Price= useContext(PriceContext)
    return (
        <>
        <h1>Contact</h1>

        <h1> Price:{Price}</h1>
        </>
    )
}







export default Contact