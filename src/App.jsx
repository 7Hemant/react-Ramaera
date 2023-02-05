import "./App.css";
import Routers from "./Routes/Routers.jsx";
import Header from "./components/Header";
function App() {
  return (
    <div className=" flex h-full border relative">
      <Header />

      <Routers />
    </div>
  );
}

export default App;
