import './App.css';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
