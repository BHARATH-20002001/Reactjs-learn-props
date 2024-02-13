import "./Student.css";

// propType is used for given input validating and set default non input properties 
import propTypes from "prop-types";

export const Student = (props) => {
  return (
    <div className="student">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{props.Name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{props.Age}</td>
          </tr>
          <tr>
            <th>isMarried</th>
            <td>{props.isMarried ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// it is used for validating the given inputs
Student.propTypes = {
  Name: propTypes.string,
  Age: propTypes.number,
  isMarried: propTypes.bool,
};


// this is used for default props to set
Student.defaultProps ={
    Name : "No Name",
    Age : 0,
    isMarried :false,
}