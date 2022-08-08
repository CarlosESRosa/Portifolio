import './App.css';
import './MediaQuery.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
