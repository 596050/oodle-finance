import { useRouter } from "next/router";

import { Box, Content, DefaultLayout } from "@components";
import {
  ProductContainer,
  ProductImg,
  ProductText,
  ProductHeading,
  ProductLi,
  ProductUl,
  ProductDescription,
} from "./Product.styles";

const Product = () => {
  const router = useRouter();
  const {
    query: { image_url, name, abv, description, food_pairing },
  } = router;
  return (
    <DefaultLayout>
      <Content>
        <ProductContainer>
          <ProductImg src={image_url} />
          <ProductText>
            <ProductHeading>{name}</ProductHeading>
            <Box py={3}>
              <strong>ABV</strong>
              <span>: {abv}%</span>
            </Box>
            <ProductDescription>{description}</ProductDescription>
            <Box py={3}>
              <strong>Why not try with:</strong>
              <ProductUl>
                {(food_pairing || []).map((text) => {
                  return <ProductLi key={text}>{text}</ProductLi>;
                })}
              </ProductUl>
            </Box>
          </ProductText>
        </ProductContainer>
      </Content>
    </DefaultLayout>
  );
};

export default Product;
