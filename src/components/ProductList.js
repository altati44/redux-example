import React, { Component } from "react";
import { Button, Glyphicon } from "react-bootstrap";
//import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import store from "../redux/store";
import { addToCart } from "../redux/actionCreators";

const styles = {
  products: {
    display: "flex",
    alignItems: "stretch",
    flexWrap: "wrap",
  },
  product: {
    width: "220px",
    marginLeft: 10,
    marginRight: 10,
  },
};

class ProductList extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      products: [
        {
          id: 1,
          name: "Strawberries",
          price: 299,
          image:
            "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/325253_2200-1200x628.jpg",
        },
        {
          id: 2,
          name: "Thai fruit",
          price: 99,
          image:
            "https://www.thekohsamuiguide.com/wp-content/uploads/2012/01/thai-fruit-16.jpg",
        },
        {
          id: 3,
          name: "Apple",
          price: 149,
          image:
            "https://api.time.com/wp-content/uploads/2018/04/strawberries.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div style={styles.products}>
        {this.state.products.map((product) => (
          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button
                  bsStyle="primary"
                  onClick={() => this.addToCart(product)}
                  role="button"
                  disabled={product.inventory <= 0}
                >
                  ${product.price} <Glyphicon glyph="shopping-cart" />
                </Button>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  addToCart(product) {
    store.dispatch(addToCart(product));
  }
}

export default ProductList;
