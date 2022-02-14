import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RarityChart from './pages/rarityChart/RarityChart';

AOS.init();

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rarityChart" element={<RarityChart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
