
// import { Routes,Route } from 'react-router-dom';
// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import './App.css';

// import AboutUsPage from './AboutUs-Page';
// import HomePage from './HomePage';
// import JobListPage from './JobList-Page';
// import ContactUsPage from './ContactUs-Page';
// import AdminPage from './Admin-Page';
// import BrowseJobsPage from './BrowseJobs-Page';
// import BrowseCategoryPage from './BrowseCategory-Page';
// import SideNavigation from './SideNavigation';
// import BlogGridSidebarPage from './BlogGridSidebar-Page';
// import AddCategory from './AddCategory';
// import BlogSingle from './BlogSingle';
// import BlogSingleSidebar from './BlogSingleSidebar';


// function App() {
//   return (
//     <div className="App">
//               <Routes>
//                   <Route path="/" element={<HomePage/>} />

//                   <Route path="/Home" element={<HomePage/>} />
//                   <Route path="/AboutUs" element={<AboutUsPage/>} />
//                   <Route path='/JobList' element={<JobListPage/>}/> 

//                   <Route path="/BrowseJobs/:Categoryname" element={<BrowseJobsPage />} />

//                   <Route path='BrowseCategories' element={<BrowseCategoryPage/>}/>
//                   <Route path='/BlogGridSidebar' element={<BlogGridSidebarPage/>}/>
//                   <Route path='/BlogSingle' element={<BlogSingle/>}/>
//                   <Route path='/BlogSingleSidebar' element={<BlogSingleSidebar/>}/>
//                   <Route path='/Contact' element={<ContactUsPage/>}/>

//                   <Route path='/Admin' element={<AdminPage/>}/>
//                   <Route path='/Admin/Sidenavigation' element={<SideNavigation/>}/>

//                   <Route path='/AddCategory' element={<AddCategory/>}/>
//               </Routes>
//     </div>
//   );
// }


// export default App;








import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from 'react';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

import AboutUsPage from './AboutUs-Page';
import HomePage from './HomePage';
import JobListPage from './JobList-Page';
import ContactUsPage from './ContactUs-Page';
import AdminPage from './Admin-Page';
import BrowseJobsPage from './BrowseJobs-Page';
import BrowseCategoryPage from './BrowseCategory-Page';
import SideNavigation from './SideNavigation';
import BlogGridSidebarPage from './BlogGridSidebar-Page';
import AddCategory from './AddCategory';
import BlogSingle from './BlogSingle';
import BlogSingleSidebar from './BlogSingleSidebar';


function ProtectedRoute({ element }) {
  const isAuthenticated = localStorage.getItem("authToken"); 
  return isAuthenticated ? element : <Navigate to="/Admin" />;
}


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("authToken"));

  const handleLogin = () => {
    localStorage.setItem("authToken", "your_token");
    setIsAuthenticated(true);
  };


  return (
    <div className="App">
              <Routes>
                  <Route path="/" element={<HomePage/>} />

                  <Route path="/Home" element={<HomePage/>} />
                  <Route path="/AboutUs" element={<AboutUsPage/>} />
                  <Route path='/JobList' element={<JobListPage/>}/> 

                  <Route path="/BrowseJobs/:Categoryname" element={<BrowseJobsPage />} />

                  <Route path='BrowseCategories' element={<BrowseCategoryPage/>}/>
                  <Route path='/BlogGridSidebar' element={<BlogGridSidebarPage/>}/>
                  <Route path='/BlogSingle' element={<BlogSingle/>}/>
                  <Route path='/BlogSingleSidebar' element={<BlogSingleSidebar/>}/>
                  <Route path='/Contact' element={<ContactUsPage/>}/>

                  <Route path="/Admin" element={<AdminPage onLogin={handleLogin} />} />
                  <Route path="/Admin/Sidenavigation" element={<ProtectedRoute element={<SideNavigation />} />} /> 
                  <Route path="*" element={<Navigate to={isAuthenticated ? "/Admin/Sidenavigation" : "/Admin"} />} />
                                                                                                                                                                                                                                                    
                  <Route path='/AddCategory' element={<AddCategory/>}/>
              </Routes>
    </div>
  );
}


export default App;






