import Market from './components/Market/Market';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from './components/About/About';
import './components/asset/Styled-css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
function App() {
  return (
        <Router>
        <Navigation />
          <Routes>
            <Route path="/" element={<Market /> }/>
            <Route path="/about" element={<About /> }/>
            <Route path="/contact" element={<Contact /> }/>
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
  );
}

export default App;
