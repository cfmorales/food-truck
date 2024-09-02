import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "../pages/Home/Home";
import SearchByKey from "../pages/Search_By_Key/SearchByKey";


const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/searchByKey" element={<SearchByKey/>}/>

            </Routes>
        </Router>
    );
};

export default AppRoutes;
