import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddSalary = ({ status, callback }) => {
    const [employee_id, setEmployee_id] = useState("");
    const [username, setUsername] = useState("");
    const [salary, setSalary] = useState("");
    const [bonus, setBonus] = useState("");

    const [employee_idErr, setEmployee_idErr] = useState("");
    const [usernameErr, setUsernameErr] = useState("");
    const [salaryErr, setSalaryErr] = useState("");
    const [bonusErr, setBonusErr] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       if(employee_id != "" && username != "" && salary != "" && bonus != "")
       {
        callback({ employee_id : employee_id, username: username, salary: salary, bonus: bonus});
        history.push('/employee');
        }

        else{
            if(employee_id == "")
            setEmployee_idErr("Please fillup employee id");
            else
            setEmployee_idErr("")

            if(username == "")
            setUsernameErr("Please fillup username");
            else
            setUsernameErr("")

            if(salary == "")
            setSalaryErr("Please fillup salary");
            else
            setSalaryErr("")

            if(bonus == "")
            setBonusErr("Please fillup bonus");
            else
            setBonusErr("")

        }
    };    
    return (
        <div>
            
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Add Salary and Festival Bonus</legend>
                <label>
                    Employee ID:
                    <input type="text" name="employee_id" value={employee_id} onChange={(e) => setEmployee_id(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{employee_idErr}</p>
                <br />
                <label>
                    Username:
                    <input  type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{usernameErr}</p>
                <br />
                <label>
                    Salary:
                    <input type="number" name="salary" value={salary} onChange={(e) => setSalary(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{salaryErr}</p>
                <br />
                <label>
                    Bonus:
                    <input type="number" name="bonus" value={bonus} onChange={(e) => setBonus(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{bonusErr}</p>
                </fieldset>


                <input id="submit" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default EmployeeAddSalary;