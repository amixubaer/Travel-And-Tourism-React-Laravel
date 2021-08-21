const UserTravelHistory = ({id, user_id, package_id, place, image})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{user_id}</td>
            <td>{package_id}</td>
            <td>{place}</td>
            <td><img src={process.env.PUBLIC_URL + "/images/sylhet_ratargul.jpg"} height="60px" width="60px" /></td>
                
        </tr>

        </>
    );
}

export default UserTravelHistory;