import React from 'react';
import Header from './components/atoms/Header/Header';
import { Route, Routes } from 'react-router';
import EventGeneralDataPage from './components/pages/EventGeneralDataPage/EventGeneralDataPage';
import EventDetailsPage from './components/pages/EventDetailPage/EventDetailPage';
import EventDatePage from './components/pages/EventDatePage/EventDatePage';
function App() {
  return (
    <div className="min-h-screen bg-light-gray text-white">
      
      <Header/>
      <div className="ml-44">
        <Routes>
          <Route path='/' element={<EventGeneralDataPage />}/>
          <Route path='/detail' element={<EventDetailsPage/>}/>
          <Route path='/dates' element={<EventDatePage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
