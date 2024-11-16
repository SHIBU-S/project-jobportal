import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Body from './Body';
import ApplyProcess from './ApplyProcess';
import JobCategory from './JobCategory';
import AboutUsSection from './AboutUsSection';
import UploadResume from './UploadResume';
import BrowseRecentJobs from './BrowseRecentJobs';
import BrowseFeaturedJobs from './BrowseFeaturedJobs';
import Testimonials from './Testimonials';
import PricingTable from './PricingTable';
import LatestNews from './LatestNews';
import Footer from './Footer';



function HomePage() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <ApplyProcess/>
      <JobCategory/>
      <AboutUsSection/>
      <UploadResume/>
      <BrowseRecentJobs/>
      <BrowseFeaturedJobs/>
      <Testimonials/>
      <PricingTable/>
      <LatestNews/>
      <Footer/>
    </div>
  );
}


export default HomePage;



// .body-img{visibility: visible; animation-name: fadeInRight; animation-duration: 0.5s; animation-delay: 0.3s; }
//         @keyframes fadeInRight { 0% { opacity: 0; transform: translateX(20px); } 
//                                 100% { opacity: 1; transform: translateX(0); }}