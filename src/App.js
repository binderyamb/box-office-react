import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import PageNotFound from "./pages/404";
import Show from "./pages/Show";
import { ThemeProvider } from "styled-components";

const theme = {
    mainColors: {
        blue: "#2400ff",
        gray: "#c6c6c6",
        dark: "#353535",
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/starred'>
                    <Starred />
                </Route>
                <Route exact path='/show/:id'>
                    <Show />
                </Route>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </ThemeProvider>
    );
}

export default App;
