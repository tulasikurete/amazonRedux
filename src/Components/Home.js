import { Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  createCart,
} from "./Reduxcomponents/ProductsDetails";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  //   const products = useSelector((state) => state.amazon.products);
  const products = useSelector((state) => {
    return state.amazon.products.filter((product) =>
      product.name.toLowerCase().includes(state.amazon.query)
    );
  });

  return (
    <div>
      <div>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
            paddingLeft: 15,
            paddingRight: 10,
          }}
        >
          {products.map(({ image, name, price, quantity, id }, i) => (
            <Grid item style={{ border: "1px solid gray", padding: 20 }}>
              <Link to={`/products/${i}`}>
                <span>
                  {" "}
                  <img src={image} style={{ width: 100, height: 100 }} />
                </span>

                <p>{name}</p>
              </Link>
              <p>{price}</p>
              <p>
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(increment(id));
                  }}
                >
                  +
                </Button>

                <p>{quantity}</p>

                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(decrement(id));
                  }}
                >
                  _
                </Button>
              </p>
              <Button
                variant="outlined"
                style={{
                  marginLeft: 60,
                  marginBottom: 10,
                  background: "black",
                  color: "white",
                }}
                onClick={() => dispatch(createCart(products[i]))}
              >
                AddTo Cart
              </Button>
            </Grid>
          ))}
        </Grid>
        {products.length === 0 && <p>No items found!</p>}
      </div>
    </div>
  );
}
