import "./components/Calendar";
import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div className="App">
      <h1>University Class Schedule</h1>
      <h2>
        Remembering all your classes and locations can be tricky. But no problem
        - we got you covered!
      </h2>
      <Calendar />
    </div>
  );
};

export default App;
