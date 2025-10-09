import { useState } from "react"
import axios from "axios";
import SubmitButton from "../components/SubmitButton";
import Input from "../components/Input";

function RegisterForm() {

    const [subject, SetSubject] = useState("");
    const [email, SetEmail] = useState("");
    const [message, SetMessage] = useState("");


    

    const FormHandler = async (event) => {

        event.preventDefault();

console.log("Form Submited!!!!")

        // const test = await axios.post('/user/', {
        //     params: {
        //         subject: "",
        //         email:"",
        //         message:""
        //     }
        // })
        
    }

    return (

        <>
           
           <div className="center-me">
             <form onSubmit={FormHandler} method="post" className="form-me">
                 <h1>Register Form</h1>
                <Input type="text" names="subject" id="subject" onChange={(subject) => { SetSubject(subject.target.value) }} value={subject} placeholder="Subject" />
                <Input type="email" name="email" id="email" onChange={(email) => { SetEmail(email.target.value) }} value={email} placeholder="Email" />
                <Input type="text" name="subject" id="subject" onChange={(message) => { SetMessage(message.target.value) }} value={message} placeholder="Message" />
                <SubmitButton value="Send"  bg="blue" color="rgba(6, 207, 26, 1)" />
            </form>
           </div>
        </>
    )
}



export default RegisterForm