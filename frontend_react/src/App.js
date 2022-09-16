import "./App.css";

// Compoenets
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
} from "./constants/exportAllcomp";
// import { Navbar } from "./components/exportNav";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
