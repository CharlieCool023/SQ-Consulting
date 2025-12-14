import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { BookingModal } from './components/BookingModal';
import { Home } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <Router>
      <div className="font-sans text-gray-900 bg-background-light selection:bg-primary selection:text-white">
        <Navbar onBookCall={openBooking} />
        
        <main>
            <Routes>
                <Route path="/" element={<Home onBookCall={openBooking} />} />
                <Route path="/service/:id" element={<ServiceDetail onBookCall={openBooking} />} />
            </Routes>
        </main>

        <Footer />
        <Chatbot onBookCall={openBooking} />
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>
    </Router>
  );
};

export default App;
