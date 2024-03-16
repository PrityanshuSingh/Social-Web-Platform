import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import MainFrame from './Pages/MainFrame'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainFrame />} />
        {/* Other routes */}
      </Routes>
    </Router>
  )
}

export default App;

