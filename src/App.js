import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Packages from "./components/packages/Packages";
function App() {
  return (
    <>
      <Navbar />
      <div className="body">
        <Hero />
        <Packages />
      </div>
    </>
  );
}

export default App;
