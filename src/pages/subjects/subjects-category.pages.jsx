import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../error page/error-page.pages";


const NameAndLastNameToUppercase = () => {

    const params = useParams();
    const students = (params.category.toLowerCase().split(' '));
        for (let i = 0; i < students.length; i++) {
            students[i] = students[i].charAt(0).toUpperCase() +
            students[i].substring(1);
        }
        return students.join(' ')};

const Subjects = () => {
    const params = useParams();
    const navigate = useNavigate();

    const categories = ['marks'];
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
            <h3>Student: {NameAndLastNameToUppercase()}</h3>
        <div className="div--subjectslist">
            <h3>SUBJECTS</h3>
            <ul>
                <div className="div--subjectslist--li">
                <li className="subjects"> 
                MATHS
                </li>
                <button onClick={() => {
                navigate(`/students/${params.category}/maths`)
                }}>MARKS</button>
                </div>
                <div className="div--subjectslist--li">
                <li className="subjects"> 
                HISTORY
                </li>
                <button onClick={() => {
                navigate(`/students/${params.category}/history`)
                }}>MARKS</button>
                </div>
                <div className="div--subjectslist--li">
                <li className="subjects"> 
                GEOGRAPHY
                </li>
                <button onClick={() => {
                navigate(`/students/${params.category}/geography`)
                }}>MARKS</button>
                </div>
            </ul>

        </div>
        
        </div>

    </div>
)
}
export default Subjects;
