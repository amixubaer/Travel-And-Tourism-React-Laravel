import { useState } from "react";
import { useHistory } from 'react-router-dom';

const UserContactUs = ({callback}) => {
   
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const [usernameErr, setUsernameErr] = useState("");
    const [phoneErr, setPhoneErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [messageErr, setMessageErr] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();


        if(username != "" && phone != "" && email != "" && message != "" ) 
        {
            setUsernameErr("")
            setPhoneErr("")
            setEmailErr("")
            setMessageErr("")

       
        callback({ username: username, phone: phone, email: email, message: message });
        history.push('/user');

        }


        else{
            
            if(username == "")
                setUsernameErr("Please fill the Name");
            else
                setUsernameErr("")

            if(phone == "")
                setPhoneErr("Please fill the Phone Number");
            else
                setPhoneErr("")

            if(email == "")
                setEmailErr("Please fill the Email");
            else
                setEmailErr("")

            if(message == "")
                setMessageErr("Please fill the Message");
            else
                setMessageErr("")

                
        }


    };
    return (
        <>
        <div>
            
            <form className='form' onSubmit={onSubmit} >
            
            <legend> Get In Touch </legend>
            <br />

                <label>
                    Name:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>

                <p style={{color: "red"}}>{usernameErr}</p>

                <br />

                <label>
                    Phone:
                    <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>

                <p style={{color: "red"}}>{phoneErr}</p>

                <br />

                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>

                <p style={{color: "red"}}>{emailErr}</p>
                
                <br />

                <label>
                   Message:
                   <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="5" cols="80"/>
                </label>

                <p style={{color: "red"}}>{messageErr}</p>

                <input type="submit" value="Send Message"/>
                
                </form>
            </div>
        </>
    );
};

export default UserContactUs;