// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import RouterList from './routers';

function App() {
  return (
    <BrowserRouter>
      <RouterList></RouterList>
    </BrowserRouter>
  );
}
export default App;
