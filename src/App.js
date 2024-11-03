import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Body from './Body';
import ApplyProcess from './ApplyProcess';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      {/* <ApplyProcess/> */}
              <Routes>
                  {/* <Route path='/Home' element={<Header/>}></Route> */}
              </Routes>
    </div>
  );
}


export default App;

