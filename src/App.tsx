import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import AddJob from './pages/Jobs/add';
import Businesses from './pages/businesses';
import AddBusiness from './pages/businesses/add';
import Blogs from './pages/blogs';
import AddBlog from './pages/businesses/add';


function App() { 

  return (
    <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />

            {/* jobs */}
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/add" element={<AddJob />} />
     
            {/* businesses */}
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/businesses/add" element={<AddBusiness />} />
         
            {/* blogs */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/add" element={<AddBlog />} />

          </Routes>
        </ScrollToTop>
    </Router>
  )
}

export default App
