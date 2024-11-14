// import { Routes,Route } from 'react-router-dom';
// import './App.css';
// import Header from './Header';
// import Body from './Body';
// import ApplyProcess from './ApplyProcess';
// import JobCategory from './JobCategory';
// import AboutUsSection from './AboutUsSection';
// import UploadResume from './UploadResume';
// import BrowseRecentJobs from './BrowseRecentJobs';
// import BrowseFeaturedJobs from './BrowseFeaturedJobs';
// import Testimonials from './Testimonials';
// import PricingTable from './PricingTable';
// import LatestNews from './LatestNews';
// import Footer from './Footer';

// import AboutUsPage from './AboutUs-Page';


// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Body/>
//       <ApplyProcess/>
//       <JobCategory/>
//       <AboutUsSection/>
//       <UploadResume/>
//       <BrowseRecentJobs/>
//       <BrowseFeaturedJobs/>
//       <Testimonials/>
//       <PricingTable/>
//       <LatestNews/>
//       <Footer/>

//               <Routes>
//                   <Route path="/AboutUs" element={<AboutUsPage/>} />
//               </Routes>
//     </div>
//   );
// }


// export default App;



import { Routes,Route } from 'react-router-dom';
import './App.css';

import AboutUsPage from './AboutUs-Page';
import HomePage from './HomePage';
import JobListPage from './JobList-Page';


function App() {
  return (
    <div className="App">
              <Routes>
                  <Route path="/" element={<HomePage/>} />

                  <Route path="/Home" element={<HomePage/>} />
                  <Route path="/AboutUs" element={<AboutUsPage/>} />
                  <Route path='/JobList' element={<JobListPage/>}/>
              </Routes>
    </div>
  );
}


export default App;


