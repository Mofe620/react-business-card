import Footer from './components/Footer'; 
import Pic from './components/Pic';
import About from './components/About';
import Interests from './components/Interests';
import Info from './components/Info';

function App() {
  return (
    <div className='container'>
      <Pic/>
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  );
}

export default App;
