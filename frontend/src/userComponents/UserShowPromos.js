const UserShowPromos = ({image, message})=>{
    return(
        <>

        <tr>

        <td><img src={process.env.PUBLIC_URL + "/images/" + image} height="60px" width="60px" /></td>
            <td>{message}</td>
                
        </tr>

        </>
    );
}

export default UserShowPromos;