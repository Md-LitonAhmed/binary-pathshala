import Market from './components/Market/Market';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from './components/About/About';
import './components/asset/Styled-css/bootstrap.min.css';
import Navigation from './components/Navigation';
function App() {
  return (
        <Router>
        <Navigation />
          <Routes>
            <Route path="/" element={<Market /> }/>
            <Route path="/about" element={<About /> }/>

          </Routes>
        </Router>
  );
}

export default App;
