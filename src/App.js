
import './App.css';
import CounterApp from './components/CounterApp';
import { Provider } from 'react-redux';
import store from './store';
// import image from './assets/beautiful-suleymaniye-camii-istanbul.avif'

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <CounterApp/>
    </div>
    </Provider>
  );
}

export default App;
