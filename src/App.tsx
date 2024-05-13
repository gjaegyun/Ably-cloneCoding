import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages';

function App() {
  return (
    // <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
