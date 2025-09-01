import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";

function App() {
  return (
    <>
      <h1>My First React App</h1>
      

      {/* <Home /> */}
      {/* <About /> */}
      {/* <Contact /> */}

      <div className="App">
        <Products />
      </div>
    </>
  );
}

export default App;
