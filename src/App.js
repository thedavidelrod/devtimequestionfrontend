import "./App.css";
import { Provider } from "react-redux";


function App({ store }) {
  
  return (
    <Provider store={store}>
      <div className="App">
        <header>Header</header>
        <div>THIS IS FINE</div>
      </div>
    </Provider>
  );
}

export default App;
