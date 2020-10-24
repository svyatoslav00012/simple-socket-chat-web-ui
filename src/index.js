import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from './Theme';
import Root from "./pages/root/Root";
import {Router} from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux';
import store from "./data/redux/store";
import CustomHistory from "./CustomHistory";

document.body.style.margin = 0;

document.getElementById("preloader-div").remove();

ReactDOM.render(
    <Router history={CustomHistory}>
        <ReduxProvider store={store}>
            <ThemeProvider theme={theme}>
                <Root/>
            </ThemeProvider>
        </ReduxProvider>
    </Router>
    , document.getElementById('root')
);
