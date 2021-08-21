import {Link} from 'react-router-dom';
import './AdminPP.css';

const AdminPolicy = ({list})=>{

    return(
        <>


            <ul>
                <li><Link to={`/admin/policy/edit`}><i class="fa fa-pencil-square-o"></i></Link></li>
                
			</ul>

			<br/>

            <center>
			    <img src={process.env.PUBLIC_URL + "/images/policy.jpg" } alt=""  height="300px" width = "70%"/>
			</center>

			<br/>
            <div className="content">
                <div dangerouslySetInnerHTML={{ __html: list.policy }} />
            </div>

        </>
    );
}

export default AdminPolicy;

