import logo from './logo.svg';
import './App.css';
import BackgroundColor from './Components/BackgroundColor';
import SideDashboard from './Components/SideDashboard';
import TopHeadGrid from './Components/TopHeadGrid';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <BackgroundColor />
      {/* <SideDashboard /> */}
      <TopHeadGrid />
      <Footer/>
    </>
  );
}

export default App;
