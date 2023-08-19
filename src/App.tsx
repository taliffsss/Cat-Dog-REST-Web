import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageGallery from './component/page/ImageGallery';
import PageNotFound from './component/page/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageGallery/>} />
        <Route path="*" element={<PageNotFound />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
