import "./App.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from "./Components/Menu/Menu";
import MenuItem from "./Components/MenuItem/MenuItem";
import About from "./Components/About/About";
import PageNotFound from "./Components/PageNotFound/PageNotFound";



function App() {
  
  return (
    <>
    <div>
    <Router>                                                                       
      <Routes>
        <Route path="/" exact element={<Menu/>} />
        <Route path="/MenuItem/:id" element={<MenuItem/>} />
        <Route path="/About" element={<About/>}/> 
        <Route path="/*" element={<PageNotFound/>}/> 
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
