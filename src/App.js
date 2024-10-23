import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Header';


function App() {
  return (
    <div className="App">
      <Header/>
              <Routes>
                  {/* <Route path='/Home' element={<Header/>}></Route> */}
              </Routes>
    </div>
  );
}


export default App;

