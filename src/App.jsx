import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/nav.jsx";
import "./main.css";
import Brr from "./components/broadcast.jsx";
import Info from "./components/blendiInfo.jsx"

function App() {
  return (
    <div className="">
    <Navigation/>
    <Brr/>
    <Info/>
  </div>
  );
}

export default App;
