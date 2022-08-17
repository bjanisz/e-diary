
import { useParams } from "react-router-dom";



const Marks = () => {

const params = useParams();
    
const NameAndLastNameToUppercase = () => {

    const students = (params.category.toLowerCase().split(' '));
        for (let i = 0; i < students.length; i++) {
            students[i] = students[i].charAt(0).toUpperCase() +
            students[i].substring(1);
        }
        return students.join(' ')};


        const marks = [Math.floor(Math.random()*6+1), Math.floor(Math.random()*6+1), Math.floor(Math.random()*6+1), Math.floor(Math.random()*6+1)]
        let sum = 0;
        for (let number of marks) {
            sum += number
        }
        let average = sum / marks.length;
        let finalMark = Math.round(average);        

            

    return (
        <div>
            <div className="App">  
            <div className="div--markslist">
                <h3>These are {NameAndLastNameToUppercase()}'s marks from {params.marks}:</h3>
            </div>
            <div className="marks--table">
            
            {marks.map((mark) => {
                return (
                    <div key={Math.random()}>
                    <h3>{mark}</h3> 
                    </div>
                );
            })}

            </div>
                <h3>The average is {average}</h3>
                <h3>{NameAndLastNameToUppercase()}'s final mark from {params.marks} is {finalMark}</h3>
            </div>
    
        </div>
    )

    }

    export default Marks;
    
