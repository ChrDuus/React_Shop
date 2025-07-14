import React, { Component } from 'react';
import NavBar from "./navbar"
import Product from "./product";
import ShoppingCart from './shopping-card';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar/>
                <div className="main-container">
                    <div className="product-container">
                        <Product title="Banana" img="../assets/img/banana.jpg" description="This is a Banana"/>
                        <Product title= "Cucumber" img="../assets/img/cucumber.jpg" description="This is a Cucumber"/>
                        <Product title= "Tomatoe" img="../assets/img/tomato.jpg" description="This is a Tomato"/>
                        <Product title= "Tomatoe" img="../assets/img/tomato.jpg" description="This is a Tomato"/>

                    </div>
                    <div className="cart-div">
                        <ShoppingCart/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;