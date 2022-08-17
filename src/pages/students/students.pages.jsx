import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../error page/error-page.pages";


const Students = () => {
    const params = useParams();
    const navigate = useNavigate();

    const categories = ['Piotr Nowak', 'Adam Kowalski', 'Katarzyna Skowronska'];
    const doesCategoryExist = categories.includes(params.category);

    let pageContent = undefined;
    if (!doesCategoryExist) {
        pageContent = <ErrorPage />
    } else {
        pageContent = <div>{params.category}</div>
    }

return (
    <div>
        <div className="App">  
        
        <div className="div--studentslist">
            <h3>OUR STUDENTS</h3>
            <ul>
                <div className="div--studentslist--li">
                <li className="students"> 
                Piotr Nowak
                </li>
                <button onClick={() => {
                navigate("/students/piotr nowak")
                }}>SUBJECTS</button>
                </div>
                <div className="div--studentslist--li">
                <li className="students">
                Adam Kowalski
                </li>
                <button onClick={() => {
                navigate("/students/adam kowalski")
                }}>SUBJECTS</button>
                </div>
                <div className="div--studentslist--li">
                <li className="students">
                Katarzyna Skowrońska
                </li>
                <button onClick={() => {
                navigate("/students/katarzyna skowronska")
                }}>SUBJECTS</button>
                </div>
            </ul>

        </div>
        
        </div>

    </div>
)
}
export default Students;




