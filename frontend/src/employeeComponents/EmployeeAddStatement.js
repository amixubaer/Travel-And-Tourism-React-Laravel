import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddStatement = ({ callback }) => {
    const [month, setMonth] = useState("");
    const [revenue, setRevenue] = useState("");
    const [cost, setCost] = useState("");

    const [monthErr, setMonthErr] = useState("");
    const [revenueErr, setRevenueErr] = useState("");
    const [costErr, setCostErr] = useState("");
    
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       if(month != "" && revenue != "" && cost != "")
       {
           setMonthErr("")
           setRevenueErr("")
           setCostErr("")

        callback({ month : month, revenue: revenue, cost: cost});
        history.push('/employee');
       }

       else{
            if(month == "")
            setMonthErr("Please fillup month");
            else
            setMonthErr("")

            if(revenue == "")
            setRevenueErr("Please fillup revenue");
            else
            setRevenueErr("")
       }
    };
    return (
        
        <div>
            
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Add Income Statement</legend>
                <label>
                    Month:
                    <input type="month" name="month" value={month} onChange={(e) => setMonth(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{monthErr}</p>
                <br />
                <label>
                    Revenue:
                    <input  type="number" name="revenue" value={revenue} onChange={(e) => setRevenue(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{revenueErr}</p>
                <br />
                <label>
                    Cost:
                    <input type="number" name="cost" value={cost} onChange={(e) => setCost(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{costErr}</p>
                <br/>
                </fieldset>


                <input id="submit" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default EmployeeAddStatement;