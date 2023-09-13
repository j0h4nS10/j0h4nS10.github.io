import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage";


const NavigationRouter = () => {

    return (<><BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/home" element={<Homepage></Homepage>}></Route>
            <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
    </BrowserRouter>
    </>)
}

export default NavigationRouter