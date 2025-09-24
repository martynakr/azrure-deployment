import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Nav from './components/Nav/Nav.tsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
