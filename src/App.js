import './App.css';
import Bike from './Components/bikeArea'
import 'bootstrap/dist/css/bootstrap.min.css'
import Color from './Components/colorArea'

function App() {
  return (
    <div className="App">
     <div className="row">
       <div className="col-md-8 col-lg-8 col-sm-12">
       <Bike />
       </div>
        
       <div className="col-md-4 col-lg-4 col-sm-12">
       <Color />
       </div>
      </div>
    </div>
  );
}

export default App;
