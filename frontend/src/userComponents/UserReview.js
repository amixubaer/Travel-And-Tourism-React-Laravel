import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const UserReview = ({ status, callback }) => {
   
    const [service_id, setService_id] = useState("");
    const [service_type, setService_type] = useState("");
    const [company, setCompany] = useState("");
    const [user_id, setUser_id] = useState("");
    const [rating, setRating] = useState("");
    const [msg, setMsg] = useState("");


    const [service_idErr, setService_idErr] = useState("");
    const [service_typeErr, setService_typeErr] = useState("");
    const [companyErr, setCompanyErr] = useState("");
    const [user_idErr, setUser_idErr] = useState("");
    const [ratingErr, setRatingErr] = useState("");
    const [msgErr, setMsgErr] = useState("");



    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        if(service_id != "" && service_type != "" && company != "" && user_id != "" && rating != "" && msg != "" ) 
        {
            setService_idErr("")
            setService_typeErr("")
            setCompanyErr("")
            setUser_idErr("")
            setRatingErr("")
            setMsgErr("")
       
        callback({ service_id: service_id, service_type: service_type, company: company, user_id: user_id, rating: rating, msg: msg });
        history.push('/user');

        }

        else{
            
            if(service_id == "")
                setService_idErr("Please fill the Service ID");
            else
                setService_idErr("")

            if(service_type == "")
                setService_typeErr("Please fill the Service Type");
            else
                setService_typeErr("")

            if(company == "")
                setCompanyErr("Please fill the Company");
            else
                setCompanyErr("")

            if(user_id == "")
                setUser_idErr("Please fill the User ID");
            else
                setUser_idErr("")

            if(rating == "")
            setRatingErr("Please fill the Rating");
            else
            setRatingErr("")

            if(msg == "")
                setMsgErr("Please fill the Message");
            else
                setMsgErr("")
                
        }

    };
    return (
        <>
        <div>

            <form className='form' onSubmit={onSubmit} >

            <legend> Give Review </legend>
            <br />


                <label>
                    Service ID:
                    <input type="text" name="service_id" value={service_id} onChange={(e) => setService_id(e.target.value)} />
                </label>

                <p style={{color: "red"}}>{service_idErr}</p>

                <br />


                <label>
                Service Type: 
                    <select value={service_type} onChange={(e) => setService_type(e.target.value)}>
                        <option value=" "> </option>
                        <option value="hotel">Hotel</option>
                        <option value="car">Car</option>
                        <option value="flight">Flight</option>
                    </select>
                </label>

                <p style={{color: "red"}}>{service_typeErr}</p>

                <br />

                <label>
                Company Name :
                    <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
                </label>

                <p style={{color: "red"}}>{companyErr}</p>

                <br />

                <label>
                User ID :
                    <input type="text" name="user_id" value={user_id} onChange={(e) => setUser_id(e.target.value)} />
                </label>

                <p style={{color: "red"}}>{user_idErr}</p>

                <br />


                <label>
                Rating: 
                    <select value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option value="*****">*****</option>
                        <option value="****">****</option>
                        <option value="***">***</option>
                        <option value="**">**</option>
                        <option value="*">*</option>
                    </select>
                </label>

                <p style={{color: "red"}}>{ratingErr}</p>

                <br />
                
                <label>
                   Message:
                   <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows="5" cols="80"/>
                </label>

                <p style={{color: "red"}}>{msgErr}</p>

                <input type="submit" value="Give Review" />
                
            </form>
            </div>
        
        </>
    );
};

export default UserReview;