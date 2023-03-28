import Navbar from './components/Navbar';
import './_app.scss';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2 className='App__heading'>doing sass setting</h2>
    </div>
  );
}

export default App;
