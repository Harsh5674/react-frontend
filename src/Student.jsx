import propTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>student: {props.isstudent ? "Yes":"No"}</p>
        </div>
    );
}

Student.propTypes={
    name: propTypes.string,
    age: propTypes.number,
    isstudent: propTypes.bool,
}
Student.defaultProps={
    name: "Guest",
    age: 0,
    isstudent: false, 
}

export default Student