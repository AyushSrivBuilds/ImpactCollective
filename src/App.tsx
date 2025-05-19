import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CampaignsPage from './pages/CampaignsPage';
import CampaignDetailPage from './pages/CampaignDetailPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage'; // Added AboutPage import
import StoriesPage from './pages/StoriesPage'; // Added StoriesPage import
import StoryDetailPage from './pages/StoryDetailPage'; // Added StoryDetailPage import
import ScrollToTop from './components/ScrollToTop'; // Added ScrollToTop import

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Added ScrollToTop component */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/campaign/:id" element={<CampaignDetailPage />} />
            <Route path="/about" element={<AboutPage />} /> {/* Added AboutPage route */}
            <Route path="/stories" element={<StoriesPage />} /> {/* Added StoriesPage route */}
            <Route path="/stories/:id" element={<StoryDetailPage />} /> {/* Added StoryDetailPage route */}
            <Route path="/contact" element={<ContactPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;