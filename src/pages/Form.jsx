import { useState } from "react"
import axios from "axios";

function Form() {

    const [subject, SetSubject] = useState("");
    const [email, SetEmail] = useState("");
    const [message, SetMessage] = useState("");

    const FormHandler = async () => {



        const test = await axios.post('/user/', {
            params: {
                subject: "",
                email:"",
                message:""
            }
        })
        console.log("Form Submited!!!!")
    }

    return (

        <>
            <h1>Form</h1>
            <form onSubmit={FormHandler} method="post">
                <input type="text" name="subject" id="subject" onChange={(subject) => { SetSubject(subject.target.value) }} value={subject} placeholder="Subject" />
                <input type="email" name="email" id="email" onChange={(email) => { SetEmail(email.target.value) }} value={email} placeholder="Email" />
                <input type="text" name="subject" id="subject" onChange={(message) => { SetMessage(message.target.value) }} value={message} placeholder="Message" />
                <input type="submit" value="Send" />
            </form>
        </>
    )
}