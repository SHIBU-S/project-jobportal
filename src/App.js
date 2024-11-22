
import { Routes,Route } from 'react-router-dom';
import './App.css';

import AboutUsPage from './AboutUs-Page';
import HomePage from './HomePage';
import JobListPage from './JobList-Page';
import ContactUsPage from './ContactUs-Page';


function App() {
  return (
    <div className="App">
              <Routes>
                  <Route path="/" element={<HomePage/>} />

                  <Route path="/Home" element={<HomePage/>} />
                  <Route path="/AboutUs" element={<AboutUsPage/>} />
                  <Route path='/JobList' element={<JobListPage/>}/>

                  <Route path='/Contact' element={<ContactUsPage/>}/>
              </Routes>
    </div>
  );
}


export default App;
