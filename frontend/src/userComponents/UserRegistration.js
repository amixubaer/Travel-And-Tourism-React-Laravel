import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';


const UserRegistration = ({callback}) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setRpassword] = useState("");


    const [firstnameErr, setFirstnameErr] = useState("");
    const [lastnameErr, setLastnameErr] = useState("");
    const [genderErr, setGenderErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [phoneErr, setPhoneErr] = useState("");
    const [usernameErr, setUsernameErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [rpasswordErr, setRpasswordErr] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();


        if(firstname != "" && lastname != "" && gender != "" && email != "" && phone != "" && username != "" && password != "" && rpassword != "" ) 
        {
            setFirstnameErr("")
            setLastnameErr("")
            setGenderErr("")
            setEmailErr("")
            setPhoneErr("")
            setUsernameErr("")
            setPasswordErr("")
            setRpasswordErr("")

       
        callback({ firstname: firstname, lastname: lastname, gender: gender, email: email, phone: phone, username: username, password: password, rpassword: rpassword });
        history.push('/login');

        }


        else{
            
            if(firstname == "")
                setFirstnameErr("Please fill the Firstname");
            else
                setFirstnameErr("")

            if(lastname == "")
                setLastnameErr("Please fill the Lastname");
            else
                setLastnameErr("")

            if(gender == "")
                setGenderErr("Please fill the Gender");
            else
                setGenderErr("")

            if(email == "")
                setEmailErr("Please fill the Email");
            else
                setEmailErr("")

            if(phone == "")
                setPhoneErr("Please fill the Phone Number");
            else
                setPhoneErr("")

            if(username == "")
                setUsernameErr("Please fill the Username");
            else
                setUsernameErr("")

            if(password == "")
                setPasswordErr("Please fill the Password");
            else
                setPasswordErr("")

            if(rpassword == "")
                setRpasswordErr("Please fill the Confirm Password");
            else
                setRpasswordErr("")
                
        }


    };

    return (
        <>
        
        <div>
            
            <form className='form' onSubmit={onSubmit} >

            <legend> User Registration </legend>
            <br />

                <label>
                First Name:
                    <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </label>

                <p style={{color: "red"}}>{firstnameErr}</p>

                <br />

                <label>
                Last Name:
                    <input type="text" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </label>

                <p style={{color: "red"}}>{lastnameErr}</p>

                <br />

                <label>
                Gender: 
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value=" "> </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </label>

                <p style={{color: "red"}}>{genderErr}</p>

                <br />

                <label>
                Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>

                <p style={{color: "red"}}>{emailErr}</p>

                <br />

                <label>
                Phone Number:
                    <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>

                <p style={{color: "red"}}>{phoneErr}</p>

                <br />

                <label>
                Username:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>

                <p style={{color: "red"}}>{usernameErr}</p>

                <br />

                <label>
                Password:
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>

                <p style={{color: "red"}}>{passwordErr}</p>

                <br />

                <label>
                Re-Type Password:
                    <input type="password" name="rpassword" value={rpassword} onChange={(e) => setRpassword(e.target.value)} />
                </label>

                <p style={{color: "red"}}>{rpasswordErr}</p>

                <br />
            
                <input type="submit" value="Register" />

                
                </form>
            </div>

        </>
    );
};

export default UserRegistration;