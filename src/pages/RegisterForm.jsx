import { useState } from "react"
import axios from "axios";
import SubmitButton from "../components/SubmitButton";
import Input from "../components/Input";
import LoadingAnimation from "../components/LoadingAnimation";

function RegisterForm() {

    const [subject, SetSubject] = useState("");
    const [email, SetEmail] = useState("");
    const [message, SetMessage] = useState("");
    const [subError ,setSubError] = useState("")
    const [mailError ,setMailError] =useState("")
    const [mError , setMError]=useState("")
    const [loading,SetLoading] = useState(false);







    const FormHandler = async (event) => {
        SetLoading(true);
        event.preventDefault();
if( subject == ("")){

    setSubError("Subject Field is Required")
}

if( email==("")){

    setMailError("Email Required")
}

if(message==("")){


    setMError("Message required")
    
}


  try {
    
    // const test = await axios.post('/user/', {
    //         params: {
    //             subject: subject,
    //             email:email,
    //             message:message
    //         }
    //     })
        

        // console.log(test.statusText)
        
        if (200 == 200) {
            
            
            setTimeout(() => {

                 SetLoading(false)
                 alert("Form Submited!!!!");

            }, 6000);


         
         

        }


  } catch (error) {
     
    
//     console.log("Catch " + error)
//    setTimeout(() => {
//       SetLoading(false)
//    }, 2000);
  
  }     



}

    return (

        <>
           
           <div className="center-me">
             <form onSubmit={FormHandler} method="post" className="form-me">
                 <h1>Contact Form</h1>
                <Input type="text" names="subject" id="subject" onChange={(subject) => { SetSubject(subject.target.value) }} value={subject} placeholder="Subject" />

                <small style={{color:"red"}}>{ subject ? "" : subError }</small>

                <Input type="email" name="email" id="email" onChange={(email) => { SetEmail(email.target.value) }} value={email} placeholder="Email" />

                <small style={{color:"red"}}>{email ? "" : mailError}</small>
                
                <Input type="text" name="subject" id="subject" onChange={(message) => { SetMessage(message.target.value) }} value={message} placeholder="Message" />

                 <small style={{color:"red"}}>{message ? "" : mError}</small>
              {loading && <LoadingAnimation />}
              <SubmitButton value="Send"  bg="blue" color="rgba(6, 207, 26, 1)" />
              
            </form>
           </div>
        </>
    )
}



export default RegisterForm