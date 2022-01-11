import {
  Button,
  Card,
  Grid,
  List,
  ListItem,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout/Layout";
import useStyles from "../../hooks/useStyles";
import data from "../../utils/data";
import PersonIcon from "@mui/icons-material/Person";

export const getStaticPaths = async () => {
  const paths = data.products.map((dt) => {
    return {
      params: { slug: dt.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const singleProduct = data.products.find((pd) => pd.slug === slug);

  return {
    props: { product: singleProduct },
  };
};

const ProductScreen = ({ product }) => {
  const classes = useStyles();
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <Link href="/" passHref>
          <a>Back to product</a>
        </Link>
      </div>

      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          />
        </Grid>

        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1">{product.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              Rating:{" "}
              <Rating name="read-only" value={product.rating} readOnly />
            </ListItem>
            <ListItem>
              <Typography>Reviews: {product.numReviews}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>

        <Grid item md={3} xs={12}>
          <Card>
            <ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>Price</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>$ {product.price}</Typography>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>Status</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    {product.countInStock > 0 ? "In Stock" : " Not Available"}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Button fullWidth variant="contained" color="primary">
                Add to cart
              </Button>
            </ListItem>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductScreen;
