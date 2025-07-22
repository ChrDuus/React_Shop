import React, { Component } from 'react';
import NavBar from "./navbar"
import Product from "./product";
import ShoppingCart from './shopping-card';


class App extends Component {
    state = {
        items:[]
      } 

    addItemtoCart = (amount, name, price) =>{
        let currentItemsInCart = this.state.items;
        let existingItem = this.state.items.find(item=>item.name === name);
        if(existingItem){
            existingItem.amount++;
        }else{       
        currentItemsInCart.push({
            amount,
            name,
            price
        });        
    }
    this.setState({items: currentItemsInCart});
    }
    render() { 
        return (
            <React.Fragment>
                <NavBar/>
                <div className="main-container">
                    <div className="product-container">
                        <Product onAdd={() => this.addItemtoCart(1, 'Banana', 1.5)} title="Banana" img="../assets/img/banana.jpg" description="This is a Banana"/>
                        <Product onAdd={() => this.addItemtoCart(1, 'Cucumber', 0.5)} title= "Cucumber" img="../assets/img/cucumber.jpg" description="This is a Cucumber"/>
                        <Product onAdd={() => this.addItemtoCart(1, 'Tomatoe', 1.9)} title= "Tomatoe" img="../assets/img/tomato.jpg" description="This is a Tomato"/>
                        <Product onAdd={() => this.addItemtoCart(1, 'Apple', 2.5)} title= "Apple" img="../assets/img/apple.jpg" description="This is an Apple"/>

                    </div>
                    <div className="cart-div">
                        <ShoppingCart items={this.state.items}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;