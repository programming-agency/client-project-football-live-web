import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Matches from './Pages/Matches/Matches';
import Live from './Pages/Live/Live';
import League from './Pages/League/League';
import More from './Pages/More/More';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/matches',
        element: <Matches />
      },
      {
        path: '/live',
        element: <Live />
      },
      {
        path: '/league',
        element: <League />
      },
      {
        path: '/more',
        element: <More />
      }
    ]
  },
]);

const THEME = createTheme({
  typography: {
    "fontFamily": `"Poppins", "sans-serif", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 500,
    "fontWeightMedium": 600
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
