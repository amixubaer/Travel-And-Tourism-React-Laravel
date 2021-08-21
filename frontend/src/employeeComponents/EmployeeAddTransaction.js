import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddTransaction = ({ status, callback }) => {
    const [receiver_id, setReceiver_id] = useState("");
    const [receiver, setReceiver] = useState("");
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");


    const [receiver_idErr, setReceiver_idErr] = useState("");
    const [receiverErr, setReceiverErr] = useState("");
    const [usernameErr, setUsernameErr] = useState("");
    const [descriptionErr, setDescriptionErr] = useState("");
    const [amountErr, setAmountErr] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        if(receiver_id != "" && receiver != "" && username != "" && description != "" && amount != "")
        {
            setReceiver_idErr("")
            setReceiverErr("")
            setUsernameErr("")
            setDescriptionErr("")
            setAmountErr("")

        callback({ receiver_id : receiver_id, receiver: receiver, username: username, description: description, amount: amount});
        history.push('/employee');
        }
        else{

            if(receiver_id == "")
            setReceiver_idErr("Please fillup receiver id");
            else
            setReceiver_idErr("")

            if(receiver == "")
            setReceiverErr("Please fillup receiver name");
            else 
            setReceiverErr("")

            if(username == "")
            setUsernameErr("Please fillup username");
            else 
            setUsernameErr("")

            if(description == "")
            setDescriptionErr("Please fillup description");
            else
            setDescriptionErr("")

            if(amount == "")
            setAmountErr("Please fillup amount");
            else
            setAmountErr("")

        }
};
    return (
        
        <div>
            
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Add in Transaction History</legend>
                <label>
                    Receiver ID:
                    <input type="text" name="receiver_id" value={receiver_id} onChange={(e) => setReceiver_id(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{receiver_idErr}</p>
                <br />
                <label>
                    Receiver:
                    <input  type="text" name="receiver" value={receiver} onChange={(e) => setReceiver(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{receiverErr}</p>
                <br />
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{usernameErr}</p>
                <br/>
                <label>
                    Description:
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{descriptionErr}</p>
                <br/>
                <label>
                    Amount:
                    <input type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{amountErr}</p>
                <br/>
                </fieldset>


                <input id="submit" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default EmployeeAddTransaction;