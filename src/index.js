import React from "react"
import ReactDOM from "react-dom/client"
import NavBar from "./components/navbar"
import "bootstrap/dist/css/bootstrap.min.css"


const element = <h1>Hello World</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavBar />);