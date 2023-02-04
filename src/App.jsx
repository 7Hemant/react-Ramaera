import "./App.css";
import Routers from "./Routes/Routers.jsx";
import Header from "./components/Header";
function App() {
  return (
    <div className=" flex">
      <Header />
      <Routers />
    </div>
  );
}

export default App;
