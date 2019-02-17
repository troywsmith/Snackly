import React, { Component } from 'react';
import Products from '../components/Products';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products,
            isLoading: true
        }
    };

    componentDidMount() {
        this.filterProducts();
    }

    filterProducts() {
        let products = this.props.products;
        let drinks = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].prod_class === '060') {
                drinks.push(products[i])
            }
        }
        this.setState({ products: drinks });
        this.setState({ isLoading: false })
        return drinks;
    };

    render() {
        return (
            <div>

                {this.state.isLoading ? null :
                    <div>
                        <h3>Grocery</h3>
                        <Products products={this.state.products} />
                    </div>
                }
   
            </div>
        )
    };
}

export default Home;