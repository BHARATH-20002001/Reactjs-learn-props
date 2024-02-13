import "./Student.css";

export const Student = (props) => {
  return (
    <div className="student">
      <table>
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
          <td>{props.isMarried?"Yes" : "No"}</td>
        </tr>
      </table>
    </div>
  );
};
