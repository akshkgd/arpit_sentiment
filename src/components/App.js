import './App.css';
import MainCard from './MainCard';
import RoadCard from './RoadCard';
import GarbageCard from './GarbageCard'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='header'>Analyzing the sentiment of tweets to drive waste reduction 😎</div>

   


    <Routes>
      <Route path='/' element={<MainCard/>} />
      <Route path='/road' element={<RoadCard/>} />
      <Route path='/garbage' element={<GarbageCard/>} />
    </Routes>
      
    </div>
  );
}

export default App;
