import { Route, Routes } from "react-router-dom";
import Products from "./components/feartures/products/Products";
import Header from "./components/pages/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
