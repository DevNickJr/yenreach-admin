import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';


function App() { 

  return (
    <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </ScrollToTop>
    </Router>
  )
}

export default App
