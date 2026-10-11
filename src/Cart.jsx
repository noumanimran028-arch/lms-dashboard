/*import { useState } from "react";

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

function App() {

    const [product, setProduct] = useState(
        new Product("Fan", 20000)
    );

    const changeProduct = () => {

        const newProduct = new Product(
            product.getName(),
            product.getPrice()
        );

        newProduct.setName("AC");
        newProduct.setPrice(50000);

        setProduct(newProduct);
    };

    return (
        <div>
            <h1>Cart</h1>

            <ul>
                <li>
                    Name: {product.getName()}
                    <br />
                    Price: {product.getPrice()}
                </li>
            </ul>

            <button onClick={changeProduct}>
                Change Product
            </button>
        </div>
    );
}
*/


import { useState, useRef } from "react";

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

function App() {

    const [product, setProduct] = useState(
        new Product("Fan", 20000)
    );
    const ref1 = useRef();
    const ref2 = useRef();

    const changeProduct = () => {
        const newProduct = new Product(product.getName(),product.getPrice());
        newProduct.setName(ref1.current.value);
        newProduct.setPrice(ref2.current.value);

        setProduct(newProduct);
    }
    return (
        <div>
            <h1>Cart</h1>

            <ul>
                <li>
                    Name: {product.getName()}
                    <br />
                    Price: {product.getPrice()}
                </li>
            </ul>
            <input type="text" ref={ref1} />
            <input type="number" ref={ref2} />
            <button onClick={changeProduct}>
                Change Product
            </button>
        </div>
    );
}

export default App;
