import logo from './logo.svg';
import './App.css';
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Dashboard from "./Kanbas/Dashboard";

function App() {
  return (
      <HashRouter>
        <div className="h-100">
            <Routes>
                <Route path="/" element={<Navigate to="/Labs"/>}/>
                <Route path="/hello" element={<HelloWorld/>}/>
                <Route path="/Labs/*" element={<Labs/>}/>
                <Route path="/Kanbas/*" element={<Kanbas/>}/>
            </Routes>
        </div>
      </HashRouter>
  );
}

export default App; // putting parenthesis next to App will return an object instead of returning a string or class/function
