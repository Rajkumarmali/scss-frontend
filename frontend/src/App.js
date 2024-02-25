
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Container from './Container/Container';
import Footer from './Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Container />
      <Footer />
    </Router>
  );
}

export default App;
