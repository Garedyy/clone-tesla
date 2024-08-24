import './App.css';
import Header from './components/header/header';
import Model from './components/model/model';
import modelY from "./assets/modelY.jpg";
import model3 from "./assets/model3.jpg";
import modelS from "./assets/modelS.jpg";

const ModelYDescrition = "Éligible au bonus Tesla de 4 000 € et au bonus écologique gouvernemental de 4 000 €1";

function App() {

  return (
    <div className="App">
      <Header />
      <Model model={modelY} titleModel="Model Y" price="36 990" laDescription={ModelYDescrition}  />
      <Model model={model3} titleModel="Model 3" price="41 490" />
      <Model model={modelS} titleModel="Model S" price="92 990" />
    </div>
  );
}

export default App;
