import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Compnents/Navbar';
import Footer from './Compnents/Footer';

import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail"; // If exists
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostDetail />} />
               <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



