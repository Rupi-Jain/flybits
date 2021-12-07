
import { useEffect } from "react";
import Branch from "./Marketer/Branch";
import Zones from "./Marketer/Zones";
import Home from './Home'
import NewZone from "./Marketer/NewZone";
import {branchAddress, zones} from './helpers/data';
import MarketerHome from "./Marketer/MarketerHome";
import Promotions from "./Promotions"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const API_KEY = 'AIzaSyBChfiTkq2Ej94O9VPFy_J6ccyEq89rE74'


const App = () => {

  useEffect(() => {
    localStorage.setItem('branches', JSON.stringify(branchAddress))
    localStorage.setItem('zones', JSON.stringify(zones))
  }, [])

  return (
    <div className = 'App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home/promotions" element={<Promotions/>} />
          <Route path="/admin" element={<MarketerHome/>} />
          <Route path="/admin/branch" exact element={<Branch/>} />
          <Route path="/admin/zones" exact element={<Zones/>} />
          <Route path="/admin/newzone" exact element={<NewZone/>} />
  
        </Routes>
      </Router>
    </div>
  );
}

export default App;