import {Link} from 'react-router-dom';
const UserFlightBooking = ({id, title, model, type, fare, image})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{title}</td>
            <td>{type}</td>
            <td>{fare}</td>
            <td><img src={process.env.PUBLIC_URL + "/images/" + image} height="60px" width="60px" /></td>
            <td><Link to={`/user/flight/book/${id}`}className='edit-button'>Book</Link></td>
                
        </tr>

        </>
    );
}

export default UserFlightBooking;