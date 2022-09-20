import React from "react";
import { Route,BrowserRouter, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Pages/Home";
import Weather from "./Pages/Weather";

const App = () => {
  return (
    <BrowserRouter>
       <div className="section">
            <Routes>
              <Route element={<Layout/>}>
              <Route path="/" element={<Home/>} />
              <Route path="/weather" element={<Weather/>} />
               </Route>
            </Routes>
            </div>
      </BrowserRouter>
  )
}

export default App;
