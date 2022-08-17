import { useParams } from "react-router-dom";


const NameAndLastNameToUppercase = () => {
    const params = useParams();

        const teachers = (params.category.toLowerCase().split(' '));
            for (let i = 0; i < teachers.length; i++) {
            teachers[i] = teachers[i].charAt(0).toUpperCase() +
            teachers[i].substring(1);
            }
            return teachers.join(' ')};
    
const TeachersCategory = () => {
    return (
        <div>
            <div className="App">  
            <div className="div--teacherslist">
                <h3>This is {NameAndLastNameToUppercase()}'s profile</h3>
            </div>
            </div>
        </div>
    )
    }

    export default TeachersCategory;
    


