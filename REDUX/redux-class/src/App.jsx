import './App.css';
import Todo from './components/todo';
import {Provider} from "react-redux";
import {store} from "./app/store";
function App() {
  <>
    <Provider store={store}>
      return <Todo />;
    </Provider>
  </>

}

export default App;
