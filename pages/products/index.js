import React from "react";
import Link from "next/link";

import { useBeers } from "@api";
import { Content, DefaultLayout, Notification } from "@components";
import { API_STATE } from "@constants";
import {
  ProductCard,
  ProductImg,
  ProductCardContainer,
  ProductCardContent,
  ProductCardContentHeader,
  ProductCardContentText,
  ProductCardInner,
} from "./Products.styles";

const Products = () => {
  const { data, error, pageSize, size, setSize, state } = useBeers();

  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < pageSize);

  const items = React.useMemo(
    () =>
      data?.map((products) => {
        return products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ));
      }),
    [data]
  );

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && data[data?.length - 1]?.length) {
      setSize(size + 1);
    }
  };

  return (
    <DefaultLayout>
      <Content onScroll={handleScroll}>
        {API_STATE.SUCCESS === state ? (
          <ProductCardContainer>{items}</ProductCardContainer>
        ) : null}
        <Notification>
          {isReachingEnd ? "No More Products" : !error ? "Loading" : "Error"}
        </Notification>
      </Content>
    </DefaultLayout>
  );
};

export default Products;

const ProductListItem = ({ product }) => {
  const {
    image_url,
    name,
    abv,
    description,
    food_pairing,
    id,
    tagline,
  } = product;
  return (
    <ProductCard>
      <Link
        href={{
          pathname: `/products/${id}`,
          query: {
            image_url,
            name,
            abv,
            description,
            food_pairing,
          },
        }}
      >
        <ProductCardInner py={3} pl={4} pr={3}>
          <ProductImg
            src={image_url || "https://via.placeholder.com/150"}
            alt={name}
          />
          <ProductCardContent>
            <ProductCardContentHeader>{name}</ProductCardContentHeader>
            <ProductCardContentText>{tagline}</ProductCardContentText>
          </ProductCardContent>
        </ProductCardInner>
      </Link>
    </ProductCard>
  );
};
