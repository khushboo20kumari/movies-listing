import './App.css';
import Footer from './Component/Footer';
import Movies from './Component/Movies';
import ResponsiveAppBar from "./Component/Navbar";
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
