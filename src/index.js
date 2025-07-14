import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./components/app";
import "./components/index.css";
    



const element = <h1>Hello World</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App/>);