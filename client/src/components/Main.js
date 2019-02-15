import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true,
            test: 'test state'
        }
    };

    componentDidMount() {
        this.callApi().catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/products');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        this.setState({ products: body.products });
        this.getCategories()
        this.setState({ isLoading: false })
        return body;
    };

    getCategories() {
        let products = this.state.products
        let categories = new Set()
        for (let i = 0; i < products.length; i++) {
            categories.add(products[i].prod_class_desc)
        }
        this.setState({ categories: [...categories] })
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    {/* <Route path='/roster' component={Roster} />
                    <Route path='/schedule' component={Schedule} /> */}
                </Switch>
            </main>
        )
    };
}

export default Main;