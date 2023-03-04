import React from "react";
import './App.css';
import Dashboard from "./components/page/Dashboard/Dashboard";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./components/MIUI/theme";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Dashboard/>
            </ThemeProvider>
        </div>
    );
}

export default App;
