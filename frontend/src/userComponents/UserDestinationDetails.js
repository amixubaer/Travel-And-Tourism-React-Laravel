import {Link} from 'react-router-dom';
const UserDestinationDetails = ({id, place, district, image})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{place}</td>
            <td>{district}</td>
            <td><img src={process.env.PUBLIC_URL + "/images/" + image} height="60px" width="60px" /></td>
            <td><Link to='/user/show_hotels'className='edit-button'>All Hotels</Link></td>

                
        </tr>

        </>
    );
}

export default UserDestinationDetails;