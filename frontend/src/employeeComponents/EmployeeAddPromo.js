import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddPromo = ({  callback }) => {
    const [message, setMessage] = useState("");
    
    const [messageErr, setMessageErr] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        if(message != "")
        {
            setMessageErr("")

            callback({  message: message});
        history.push('/employee');
        }
    else{
            if(message == "")
            setMessageErr("Please fill the message");
            else
            setMessage("")
        }
    };
    return (
        <div>
            
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Send Promo</legend>
                
                <label>
                    Message:
                    <input  type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{messageErr}</p>
                <br />
                </fieldset>


                <input id="submit" type="submit" value="Send" />
            </form>
        </div>
    );
};

export default EmployeeAddPromo;