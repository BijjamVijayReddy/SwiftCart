import './App.css';
import AppFooter from './components/AppFooter/AppFooter';
import AppHeader from './components/AppHeader/AppHeader';
import AppInfo from './components/AppInfo/AppInfo';
import Slider from './components/Slider/Slider';
import Newsletter from './components/newsLetter/Newsletter';

function App() {
  return (
    <div >
      <AppHeader />
      <Slider />
      <AppInfo />
      <Newsletter />
      <AppFooter />
    </div>
  );
}

export default App;
