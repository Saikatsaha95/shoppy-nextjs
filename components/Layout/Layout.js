import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import useStyles from "../../hooks/useStyles";

const Layout = ({ children, description, title }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title> {title ? `${title}-Shoppy` : `Shoppy`} </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>

      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Link href="/" passHref>
            <a>
              <Typography className={classes.brand}>Shoppy</Typography>
            </a>
          </Link>

          <div className={classes.grow}></div>

          <div>
            <Link href="/cart" passHref>
              <a>Cart</a>
            </Link>
            <Link href="/login" passHref>
              <a>Login</a>
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      <Container className={classes.main}>{children}</Container>

      <footer className={classes.footer}>
        <Typography>All right reserved Shoppy</Typography>
      </footer>
    </div>
  );
};

export default Layout;
