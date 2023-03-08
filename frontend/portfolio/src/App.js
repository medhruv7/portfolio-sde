import Header from './components/Header/Header';
import './App.css';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='animate'>
      <div><Header /></div>
      <div>Projects</div>
      <div>Education</div>
      <div>Acheivements</div>
      <div><Experience /></div>
      <div><Contact /></div>
    </div>
  )
}

export default App;
