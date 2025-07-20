import React, {Component} from 'react';

class ShoppingCart extends Component {
    state = { 
        items: [
            {
                amount:1,
                name: 'Banana',
                price: 1.5
            },
            {
                amount:1,
                name: 'Cucumber',
                price: 0.5
            },
            {
                amount:1,
                name: 'Tomatoe',
                price: 1.9
            },
            {
                amount:1,
                name: 'Apple',
                price: 2.5
            },
        ]
     } 

    render() { 
        return (
            <div className='shopping-cart'>
                <h2>Cart</h2>
                {this.state.items.map(item => <div key={item.name}> {item.amount}x {item.name} {item.price}€</div>)}
            </div>
        );
    }
}
 
export default ShoppingCart;