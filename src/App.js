import { Header } from "./components/Header/Header";
import { Student } from "./components/Student/Student";
import { Childrencomponents } from "./components/Children/Children";
import "./App.css";

function App() {
  return (
    <div className="abc">
      <Header />
      <div className="normal">
        <h2>NORMAL WAY</h2>
        <p>
          <b>
            sending properties from parent to child by using props and "{"{}"}"
            as "{"<Student Name=Bharath Age={23} isMarried={false} />"}" and
            details are passed
          </b>
        </p>
      </div>
      <Student Name="Bharath" Age={23} isMarried={false} />
      <Student Name="Hemani" Age={23} isMarried={false} />
      <br />
      <div className="CHILDREN">
        <h2>Using CHILDREN method</h2>
        <p>
          <b>
            this method is by getting all children properties in a Component's
            children
          </b>
        </p>
        <Childrencomponents>
          <p>This is the example of child 1</p>
          <p>This is the example of child 2</p>
          <p>This is the example of child 3</p>
          <p>This is the example of child 4</p>
        </Childrencomponents>
      </div>
    </div>
  );
}

export default App;
