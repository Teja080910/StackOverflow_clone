import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from '../home/home';
import { Questions } from '../questions/questions';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/questions' element={<Questions/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
