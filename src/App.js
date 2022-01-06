import './App.css';
import CounterWithToolkit from './Components/CounterWithToolkit';
import CounterPureRedux from './Components/CounterPureRedux';
import { Provider } from 'react-redux';
import store from './store/index';
import pureReduxStore from './store/indexPureRedux';

function App() {
  return (
    <div>
      <br/>
      <h1 className="center">Hello World</h1>
      <br/>
      <hr/>
      <br/>
      <Provider store={store}><CounterWithToolkit /></Provider>
      <br/>
      <hr/>
      <br/>
      <Provider store={pureReduxStore}><CounterPureRedux /></Provider>
      <br/><hr/>
    </div>
  )
}

export default App;
