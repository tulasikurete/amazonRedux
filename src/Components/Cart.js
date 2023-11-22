import { Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "./Reduxcomponents/ProductsDetails";

export default function CartPage() {
  const cart = useSelector((state) => state.amazon.cart);
  const dispatch = useDispatch();
  let total = 0;
  return (
    <div>
      <h2>shopping Cart</h2>
      <div style={{ border: "1px solid gray" }}>
        {cart.map(({ image, id, name, quantity, price }, i) => {
          const amont = price * quantity;
          total += amont;
          return (
            <Grid container>
              <Grid item xs={4}>
                <p>
                  <img src={image} style={{ width: 250, height: 200 }} />
                </p>
              </Grid>
              <Grid item xs={4}>
                <p>{name}</p>
                <p>price:{price}</p>
              </Grid>
              <Grid item xs={4}>
                <Grid container>
                  <Grid item xs={4}>
                    <Button
                      variant="outlined"
                      onClick={() => dispatch(increment(id))}
                    >
                      +
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <p> Quantity:{quantity}</p>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="outlined"
                      onClick={() => dispatch(decrement(id))}
                    >
                      -
                    </Button>
                  </Grid>
                </Grid>
                <p>price: {amont}</p>
              </Grid>
            </Grid>
          );
        })}
      </div>
      <p style={{ marginLeft: 860 }}> Total:{total}</p>
      <hr />
    </div>
  );
}
