import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout/Layout";
import useStyles from "../../hooks/useStyles";
import data from "../../utils/data";

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
    <Layout title={product.name}>
      <div className={classes.section}>
        <Link href="/" passHref>
          <a>Back to product</a>
        </Link>
      </div>
    </Layout>
  );
};

export default ProductScreen;
