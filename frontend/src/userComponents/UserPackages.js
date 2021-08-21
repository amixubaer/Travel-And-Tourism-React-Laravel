import {Link} from 'react-router-dom';
const UserPackages = ({id, place, location, image, description, duration, transport, hotel, cost, userBookPackageCallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{place}</td>
            <td>{location}</td>
            <td><img src={process.env.PUBLIC_URL + "/images/" + image} height="60px" width="60px" /></td>
            <td>{description}</td>
            <td>{duration}</td>
            <td>{transport}</td>
            <td>{hotel}</td>
            <td>{cost}</td>
            <button className='approve-button' onClick={()=>userBookPackageCallback({id: id, place: place, location: location, image: image, description: description, duration: duration, transport: transport, hotel: hotel, cost: cost})}>Book</button>

                
        </tr>

        </>
    );
}

export default UserPackages;