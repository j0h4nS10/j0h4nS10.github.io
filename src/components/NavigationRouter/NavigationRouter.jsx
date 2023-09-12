import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Proyects from "../proyects/proyects";
import Homepage from "../../pages/Homepage";


const NavigationRouter = () => {

    return(<><BrowserRouter>
    <Routes>
        <Route path="/" element={<Proyects></Proyects>}></Route>
        <Route path="/home" element={<Homepage></Homepage>}></Route>
    </Routes>
    </BrowserRouter>

    </>)
}

export default NavigationRouter