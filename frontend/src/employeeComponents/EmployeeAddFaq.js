import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddFaq = ({ callback }) => {
    const [que, setQue] = useState("");
    const [ans, setAns] = useState("");
    

    const [queErr, setQueErr] = useState("");
    const [ansErr, setAnsErr] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        if(que != "" && ans != "")
        {
            setQueErr("")
            setAnsErr("")
        callback({ que : que, ans: ans});
        history.push('/employee');
        }
        else{
            if(que == "")
            setQueErr("Please fill the Question");
            else
            setQueErr("")

            if(ans == "")
            setAnsErr("Please fill the Answer");
            else
            setAnsErr("")
        }
    };
    return (
        <div>
            
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>FAQ</legend>
                <label>
                    Question:
                    <input type="text" name="que" value={que} onChange={(e) => setQue(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{queErr}</p>
                <br />
                <label>
                    Answer:
                    <input  type="text" name="ans" value={ans} onChange={(e) => setAns(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{ansErr}</p>
                <br />
                </fieldset>


                <input id="submit" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default EmployeeAddFaq;