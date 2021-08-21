import {Link} from 'react-router-dom';
import './AdminPP.css';

const AdminGuidelines = ({list})=>{

    return(
        <>


            <ul>
                <li><Link to={`/admin/guidelines/edit`}><i class="fa fa-pencil-square-o"></i></Link></li>
                
			</ul>

			<br/>
            <center>
			    <img src={process.env.PUBLIC_URL + "/images/guidelines.jpg" } alt=""  height="300px" width = "70%"/>
			</center>

			<br/>
            <div className="content">
                <div dangerouslySetInnerHTML={{ __html: list.guideline }} />
            </div>

        </>
    );
}

export default AdminGuidelines;

