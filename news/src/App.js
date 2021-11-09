import Navbar from "./Components/Navbar";
import {Routes,Route} from "react-router-dom"
import Content from "./Components/Content";
import Technology from "./Components/Technology";
import Science from "./Components/Science";
import Sports from "./Components/Sports";
import Entertainment from "./Components/Entertainment";
import Health from "./Components/Health";
import Business from "./Components/Business";
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Content/>}/>
    <Route path="/science" element={<Science/>}/>
    <Route path="/sports" element={<Sports/>}/>
    <Route path="/entertainment" element={<Entertainment/>}/>
    <Route path="/health" element={<Health/>}/>
    <Route path="/business" element={<Business/>}/>
      <Route path="/technology" element={<Technology/>}/>
      <Route path="/science" element={<Science/>}/>
    </Routes>
    </>
  )
}
export default App;
