import './App.css';
import Button from './button/Button';
import AboutUs from './pages/AboutUs';
import PortfolioPage from './portfolio/PortfolioPage';



function App() {

    return (
        <div className="App">
            <AboutUs const user={{name: "Anna", age: 19}}/>
           
            <PortfolioPage const user={{name: "Anna", age: 19}}/>

            <Button/>
        </div>
    );
}
export default App;