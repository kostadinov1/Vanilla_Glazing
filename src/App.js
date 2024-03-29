import { Route, Routes } from 'react-router-dom';
import './reset.css'
import './App.css';
import Album from './components/Albums/Album/Album';
import Albums from './components/Albums/Albums';
import Error404 from './components/Errors/Error404';
import Home from './components/Home/Home';
import Footer from './components/Main/Footer/Footer';
import Header from './components/Main/Header/Header';
import Contacts from './components/Contacts/Contacts';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Credits from './components/Credits/Credits';

function App() {

  return (
    <div className='body'>
        <Header></Header>
          <div className={'main'}>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/projects' element={<Albums />}/>
              <Route path='/album/:id/' element={<Album />}/> 
              <Route path='/products' element={<Products />}/>
              <Route path='product/:id/' element={<Product/>}/>
              <Route path='/services' element={<Services />}/>
              <Route path='/contacts' element={<Contacts />}/>
              <Route path='/credits' element={<Credits />}/>
              <Route path='*' element={<Error404 />}/>
            </Routes>
          </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
