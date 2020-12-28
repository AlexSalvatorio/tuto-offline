import './App.css';
import Forum from './components/Forum';
import Posting from './components/Posting';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <h1>🔥 Offline Fire</h1>
      <Info></Info>
      <Posting></Posting>
      <Forum></Forum>
    </div>
  );
}

export default App;
