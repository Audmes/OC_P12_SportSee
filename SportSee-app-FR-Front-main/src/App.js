import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./views/Home";
import Profile from "./views/Profile";
import Settings from "./views/Settings";
import Community from "./views/Community";

/**
 * Router to render the Header, the Sidebar and the 4 pages of the application
 *
 * @category Router
 * @component
 * @returns { React.Component } A React component
 */

const App = () => {
    return (
        <BrowserRouter basename="/">
            <Header />
            <Sidebar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/profile/:userId" element={<Profile />} />
                <Route exact path="/settings" element={<Settings />} />
                <Route exact path="/community" element={<Community />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;