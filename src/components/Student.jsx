import "./Student.css";
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

Student.propTypes = {
  Name: propTypes.string,
  Age: propTypes.number,
  isMarried: propTypes.bool,
};
