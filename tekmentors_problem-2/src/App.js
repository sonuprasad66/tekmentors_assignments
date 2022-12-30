import { Home } from "./Components/Home";
import { Navbar } from "./Pages/Navbar";
import { TableComponents } from "./Pages/TableComponents";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <TableComponents />
    </div>
  );
}

export default App;
