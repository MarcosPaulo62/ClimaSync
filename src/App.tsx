import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import ClimaAgora from './pages/climaAgora/climaAgora';
import SeteDias from './pages/seteDias/seteDias';
import Contato from './pages/contato/contato';
import NotFound from './pages/notFound/notFound';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/climaAgora' element={<ClimaAgora />} />
          <Route path='/seteDias' element={<SeteDias />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
