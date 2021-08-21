import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddPlace = ({  callback }) => {
    const [place, setPlace] = useState("");
    const [district, setDistrict] = useState("");

    const [placeErr, setPlaceErr] = useState("");
    const [districtErr, setDistrictErr] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        if(place != "" && district != "")
        {
        setPlaceErr("")
        setDistrictErr("")
        
        callback({ place : place, district: district});
        history.push('/employee');
        }

        else{
            if(place == "")
        setPlaceErr("Please fillup place name");
        else
        setPlaceErr("")

        if(district == "")
        setDistrictErr("Please fillup district name");
        else
        setDistrictErr("")

        }
    };
    return (
        <div>
            
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Add New Place</legend>
                <label>
                    Place:
                    <input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{placeErr}</p>
                <br />
                <label>
                    District:
                    <input  type="text" name="district" value={district} onChange={(e) => setDistrict(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{districtErr}</p>
                <br />
                
                </fieldset>


                <input id="submit" type="submit" value="Submit for Approval" />
            </form>
        </div>
    );
};

export default EmployeeAddPlace;