import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';


function App() { 

  return (
    <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
    </Router>
  )
}

export default App
