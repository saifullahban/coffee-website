import logo from './logo.svg';
import './App.css';
import MyNavbar from './Coffee-Folder/MyNavbar';
import Home from './Coffee-Folder/Home';
import Coffee from './Coffee-Folder/Coffee';
import Product from './Coffee-Folder/Product';
import Place from './Coffee-Folder/Place';
import Blog from './Coffee-Folder/Blog';
import Footer from './Coffee-Folder/Footer';

function App() {
  return (
    <div>
     <MyNavbar/>
     <Home/>
     <Coffee/>
     <Product/>
     <Place/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
