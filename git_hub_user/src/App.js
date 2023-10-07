import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// file imports
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import SearchPage from "./Pages/Search";
import GitHubProfile from "./Pages/GitHubProfile";
import History from "./Pages/History";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />s
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile/:username" element={<GitHubProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
