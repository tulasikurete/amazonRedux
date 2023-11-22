import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  createCart,
  decrement,
  increment,
  ProductSelector,
} from "./Reduxcomponents/ProductsDetails";

export default function ProductView() {
  let { id } = useParams();
  const items = useSelector(ProductSelector(id));
  const dispatch = useDispatch();

  return (
    <Box>
      <Grid container style={{ border: "1px solid gray" }}>
        <Grid item xs={4}>
          <span>
            {" "}
            <img src={items.image} style={{ width: 250, height: 200 }} />
          </span>
        </Grid>
        <Grid item xs={4}>
          <p>{items.name}</p>
          <p>{items.price}</p>
        </Grid>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                onClick={() => {
                  dispatch(increment(id));
                }}
              >
                +
              </Button>
            </Grid>
            <Grid item xs={4}>
              <p>Quantity:{items.quantity}</p>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                onClick={() => {
                  dispatch(decrement(id));
                }}
              >
                _
              </Button>
            </Grid>
          </Grid>
          <p>price:{items.price}</p>

          <Button
            variant="outlined"
            onClick={() => dispatch(createCart(items))}
            style={{ marginLeft: 20 }}
          >
            AddTo Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
