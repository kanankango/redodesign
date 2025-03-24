import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Navbar from './components/Navbar';
import ContentSection from './components/ContentSection'; // Main page component
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Import placeholder components for other pages
import BookPage from './components/BookPage';
import BlogPostPage from './components/BlogPostPage';
import TalksPage from './components/TalksPage';
import WorkshopPage from './components/WorkshopPage';
import PublicationPage from './components/PublicationPage';
import CoachingPage from './components/CoachingPage';
import AIPlaybookPage from './components/AIPlaybookPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="main" className="role-main flex container mx-auto"> 
          <Sidebar />
          <Routes> 
            <Route path="/" element={<ContentSection />} />
            <Route path="/pages/book" element={<BookPage />} />
            <Route path="/pages/blog-post" element={<BlogPostPage />} />
            <Route path="/pages/talk" element={<TalksPage />} />
            <Route path="/pages/workshop" element={<WorkshopPage />} />
            <Route path="/pages/publication" element={<PublicationPage />} />
            <Route path="/pages/coaching" element={<CoachingPage />} />
            <Route path="/pages/ai-playbook" element={<AIPlaybookPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;