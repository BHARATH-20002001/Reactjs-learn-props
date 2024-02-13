import { Header } from "./components/Header";
import { Student } from "./components/Student";
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div className="normal">
        <h3>NORMAL WAY</h3>
        <p><b>sending properties from parent to child by using props and "{"{}"}" as "{"<Student Name=Bharath Age={23} isMarried={false} />"}" and details are passed</b></p>
      </div>
      <Student Name="Bharath" Age={23} isMarried={false} />
      <Student Name="Hemani" Age={23} isMarried={false} />
    </div>
  );
}

export default App;
