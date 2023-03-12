import './App.css';
import { Home } from './components/home'
import { Status } from './components/status';
import './components/styles/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home/>} />
          <Route path='/stadistics' element={<Status/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
