import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../error page/error-page.pages";

const Teachers = () => {
    const params = useParams();
    const navigate = useNavigate();
    const categories = ['monika nowak', 'anna kowalska', 'bartosz skowronski'];
    const doesCategoryExist = categories.includes(params.category);

    let pageContent = undefined;
    if (!doesCategoryExist) {
        pageContent = <ErrorPage />
    } else {
        pageContent = <div> {params.category}</div>
    }

return (
    <div>
        <div className="App">  
        
        <div className="div--teacherslist">
            <h3>OUR TEACHERS</h3>
            <ul>
                <div className="div--teacherslist--li">
                <li className="teachers">
                Monika Nowak
                </li>
                <button onClick={() => {
                navigate("/teachers/monika nowak")
                }}>PROFILE</button>
                </div>
                <div className="div--teacherslist--li">
                <li className="teachers">
                Anna Kowalska
                </li>
                <button onClick={() => {
                navigate("/teachers/anna kowalska")
                }}>PROFILE</button>
                </div>
                <div className="div--teacherslist--li">
                <li className="teachers">
                Bartosz Skowroński
                </li>
                <button onClick={() => {
                navigate("/teachers/bartosz skowronski")
                }}>PROFILE</button>
                </div>
            </ul>

        </div>
        
        </div>

    </div>
)
}
export default Teachers;



