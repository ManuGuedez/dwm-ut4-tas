import Card from "./Components/Card/Card.jsx";
import CardContent from "./Components/CardContent/Cardcontent.jsx";
import "./App.css";
import InputComponent from "./Components/InputContent/InputContent.jsx";
import Counter from "./Components/Counter/Counter.jsx";
import TextAppear from "./Components/TextAppear/TextAppear.jsx";
import TasksList from "./Components/TasksList/TasksList.jsx";
import ExtendedCounter from "./Components/ExtendedCounter/ExtendedCounter.jsx";

function App() {
  return (
    <div className="App">
      <h2>Trabajo de aplicación 2</h2>
      <Card>
        <CardContent
          title="titulo 1"
          description="descripción 1"
          assigned="persona 1"
          date="hoy"
          deadline="mañana"
        />
      </Card>
      <Card>
        <CardContent
          title="titulo 2"
          description="descripción 2"
          assigned="persona 2"
          date="hoy"
          deadline="mañana"
        />
      </Card>
      <Card>
        <CardContent
          title="titulo 3"
          description="descripción 3"
          assigned="persona 3"
          date="hoy"
          deadline="mañana"
        />
      </Card>
      <h2>Trabajo de aplicación 3</h2>
      <Card>
        <InputComponent />
      </Card>
      <h2>Trabajo de aplicación 4</h2>
      <Card>
        <Counter />
      </Card>
      <h2>Trabajo de aplicación 5</h2>
      <Card>
        <TextAppear />
      </Card>
      <h2>Trabajo de aplicación 6, 7 y 8</h2>
      <Card>
        <TasksList />
      </Card>
      <h2>Trabajo de aplicación 9</h2>
      <Card>
        <ExtendedCounter />
      </Card>
    </div>
  );
}

export default App;
