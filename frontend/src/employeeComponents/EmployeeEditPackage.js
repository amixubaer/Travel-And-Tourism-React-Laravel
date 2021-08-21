import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './Employee.css';


const EmployeeEditPackage = ({ callback }) => {
    
    const { id: eid } = useParams();
    const [place, setPlace] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [transport, setTransport] = useState("");
    const [hotel, setHotel] = useState("");
    const [cost, setCost] = useState("");
    const [status, setStatus] = useState("");


    const [placeErr, setPlaceErr] = useState("");
    const [locationErr, setLocationErr] = useState("");
    const [descriptionErr, setDescriptionErr] = useState("");
    const [durationErr, setDurationErr] = useState("");
    const [transportErr, setTransportErr] = useState("");
    const [hotelErr, setHotelErr] = useState("");
    const [costErr, setCostErr] = useState("");
    const [statusErr, setStatusErr] = useState("");
    


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

       //console.log({ id: eid,  place: place, location: location, description: description, duration: duration, transport: transport, hotel: hotel, cost: cost, status: status });
        
       if(place != "" && location != "" && description != "" && duration != "" && transport != "" && hotel != "" && cost != "" && status != "")
       {
       setPlaceErr("")
       setLocationErr("")
       setDescriptionErr("")
       setDurationErr("")
       setTransportErr("")
       setHotelErr("")
       setCostErr("")
       setStatusErr("")
        callback({ id: eid,  place: place, location: location, description: description, duration: duration, transport: transport, hotel: hotel, cost: cost, status: status  });
        history.push('/employee/package');
    }
    else {
        if(place == "")
        setPlaceErr("Please fillup place name");
        else
        setPlaceErr("")

        if(location == "")
        setLocationErr("Please fillup location name");
        else
        setLocationErr("")

        if(description == "")
        setDescriptionErr("Please fillup description");
        else
        setDescriptionErr("")

        if(duration == "")
        setDurationErr("Please fillup duration");
        else
        setDurationErr("")

        if(transport == "")
        setTransportErr("Please fillup the field");
        else
        setTransportErr("")

        if(hotel == "")
        setHotelErr("Please fillup the field");
        else
        setHotelErr("")

        if(cost == "")
        setCostErr("Please fillup cost");
        else
        setCostErr("")

        if(status == "")
        setStatusErr("Please fillup status");
        else
        setStatusErr("")

    }
    };
    return (
        <div>

        <form className='form' onSubmit={onSubmit}>
        <fieldset>
        <legend>Edit Package</legend>
            <label>
                Place:
                <input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)} />
            </label>
            <p style={{color: "red"}}>{placeErr}</p>
            <br />
            <label>
                Location:
                <input  type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </label>
            <p style={{color: "red"}}>{locationErr}</p>
            <br />
                <label>
                    Description:
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{descriptionErr}</p>
                <br />
                <label>
                    Duration:
                    <input type="text" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{durationErr}</p>
                <br />
                <label for="transport">Transport:</label>
                            <select name="transport" id="transport" onChange={(e) => setTransport(e.target.value)}>

                                <option value=""></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                
                </select>
                <p style={{color: "red"}}>{transportErr}</p>
                <br />
                <label for="hotel">Hotel:</label>
                            <select name="hotel" id="hotel" onChange={(e) => setHotel(e.target.value)}>

                                <option value=""></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                
                </select>
                <p style={{color: "red"}}>{hotelErr}</p>
                <br />
                <label>
                    Cost:
                    <input type="number" name="cost" value={cost} onChange={(e) => setCost(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{costErr}</p>
                <br />
                <label for="status">Status:</label>
                            <select name="status" id="status" onChange={(e) => setStatus(e.target.value)}>

                                <option value=""></option>
                                <option value="Upcoming">Upcoming</option>
                                <option value="Completed">Completed</option>
                                
                </select>
                <p style={{color: "red"}}>{statusErr}</p>


            </fieldset>


            <input id="submit" type="submit" value="Submit" />
        </form>
    </div>
    );
};

export default EmployeeEditPackage;