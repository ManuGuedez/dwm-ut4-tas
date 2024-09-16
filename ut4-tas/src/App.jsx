import Card from "./Components/Card/Card.jsx";
import CardContent from "./Components/CardContent/Cardcontent.jsx";
import "./App.css";
import InputComponent from "./Components/InputContent/InputContent.jsx";

function App() {
  return (
    <div className="App">
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
      <InputComponent/>
    </div>
  );
}

export default App;
