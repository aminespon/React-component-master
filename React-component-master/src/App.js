import "./App.css";
import FullName from "./component/Profile/FullName";
import ProfilPhoto from "./component/Profile/ProfilPhoto";
import Address from "./component/Profile/Address";

function App() {
  return (
    <div className="App">
      <FullName /> <ProfilPhoto />
      <Address />
    </div>
  );
}

export default App;
