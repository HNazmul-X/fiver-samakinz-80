import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MyAppbar from "./Components/Appbar/MyAppbar";
import Sitebar from "./Components/Sitebar/Sitebar";
import Display from "./Components/Display/Display";
import "./styles/App.css";

function App() {
    const [isMblSitebarOpen, setIsMblSitebarOpen] = useState("");
    const [theme, setTheme] = useState("black-theme")

    return (
        <BrowserRouter>
            <section id="Deashboard-Cover" className={theme}>
                <MyAppbar theme={theme} setTheme={setTheme} isMblSitebarOpen={isMblSitebarOpen} setIsMblSitebarOpen={setIsMblSitebarOpen} />
                <Sitebar isMblSitebarOpen={isMblSitebarOpen} setIsMblSitebarOpen={setIsMblSitebarOpen} />
                <Display />
            </section>
        </BrowserRouter>
    );
}

export default App;
