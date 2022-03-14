import { Route, Routes } from 'react-router-dom';
import CreateResume from './components/CreateResume';
import HomePage from './components/HomePage';
import MyResumes from './components/MyResumes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/my-resumes' element={<MyResumes/>} />
      <Route path='/create-resume' element={<CreateResume/>} />
      
    </Routes>
  );
}

export default App;
