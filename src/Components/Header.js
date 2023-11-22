import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "./Reduxcomponents/ProductsDetails";
import { Grid } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(6),
  marginLeft: 0,
  width: "150px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(10),
    width: "500px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazon.products);
  const searchHandler = (event) => {
    //const filteredProducts = Products.filter(product=>product.name.includes(event.target.value));
    dispatch(updateQuery(event.target.value.trim()));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={2}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
                  style={{ width: 50, height: 50 }}
                />
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  {" "}
                  <MenuIcon />
                </Link>
              </Typography>
            </Grid>{" "}
            <Grid item xs={8}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  style={{ color: "white" }}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={searchHandler}
                />
              </Search>
            </Grid>
            <Grid item xs={2}>
              <Link to="/cart">
                <AddShoppingCartTwoToneIcon style={{ color: "white" }} />
              </Link>
            </Grid>
          </Grid>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
