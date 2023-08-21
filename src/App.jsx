import './app.css';
import HeroSection from './components/Hero';
import './components/Navigation';
import Navigations from './components/Navigation';
const App=()=>{
    return(
    <div>
        <Navigations/>
        <HeroSection/>
    </div>
    );
};
export default App;