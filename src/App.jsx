
import LandingPage from './components/LandingPage';
import BookingPage from './components/BookingPage';
import PageNotFound from './components/PageNotFound';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
      <BrowserRouter>
        <>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/booking' element={<BookingPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </>
      </BrowserRouter>
    );
  }
  

export default App
