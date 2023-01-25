import {
  Stack,
  VStack,
  Image,
  Text,
  Grid,
  StackDivider,
  Link,
  GridItem,
} from "@chakra-ui/react";
import React, { useState } from "react";

import "../styles/Fixed.css";

//ProdsPromocionados
import infoMercadoShop from "../product/prodsShop";
import { ProductPicture } from "../product/types";

function MercadoShops() {
  const prods = infoMercadoShop.infoMercadoShop.pictures;

  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY > 2903 && window.scrollY < 3600) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);

  return (
    <Stack
      borderRadius="10px"
      w={352}
      align="stretch"
      bgColor={"#F5F5F5"}
      className={fix ? "fixed" : "mercadoShop"}
    >
      <VStack bgColor={"#E82E8A"} h={120} borderRadius="5px 5px 0px 0px">
        <Image
          src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/shops-icon.svg"
          pt={3}
          marginBottom={"1px !important"}
        />
        <Text
          color={"white"}
          fontSize={16}
          fontWeight={"bold"}
          marginTop={"0px !important"}
        >
          Comprá en tiendas fuera de Mercado Libre
        </Text>
      </VStack>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={2}
        marginTop={"-20px !important"}
      >
        {prods.map((prod) => (
          <GridItem margin={"auto"} key={prod.id}>
            <Card prod={prod} />
          </GridItem>
        ))}
      </Grid>
      <Link fontSize={12} py={3} textAlign="center">
        Crea tu Mercado Shop
      </Link>
    </Stack>
  );
}

type Props = {
  prod: ProductPicture;
};

function Card({ prod }: Props) {
  return (
    <Stack
      maxW={160}
      h={282}
      display="flex"
      alignItems={"center"}
      bgColor={"#fff"}
      borderRadius="5px"
      boxShadow={"lg"}
    >
      <Stack>
        <Stack
          h={38}
          bgColor={"#454545"}
          p={"8px 12px"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius="5px 5px 0px 0px"
        >
          <Text
            color={"white"}
            fontSize={10}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            {prod.tienda?.toUpperCase()}
          </Text>
        </Stack>
        <VStack
          marginTop={"0px !important"}
          divider={
            <StackDivider
              borderColor="blackAlpha.100"
              alignSelf="center"
              w={"full"}
            />
          }
        >
          <Image src={prod.url} w={115} />
          <Text
            fontSize={12}
            color={"blackAlpha.800"}
            margin={"12px !important"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            lineHeight={"15px"}
            h={"30px"}
            w={"133px"}
          >
            {prod.title}
          </Text>
        </VStack>
        <VStack
          alignItems={"start"}
          marginTop={"0px !important"}
          marginLeft={"12px !important"}
        >
          {prod.priceBefore && (
            <Text color={"#8c8c8c"} fontSize={10} as={"s"} h={13}>
              $ {prod.priceBefore.toLocaleString("de-DE")}
            </Text>
          )}
          <Text
            fontSize={14}
            marginTop={"0px !important"}
            fontWeight={"bold"}
            marginBottom={"5px !important"}
          >
            $ {prod.price.toLocaleString("de-DE")}
          </Text>
          <Link color={"#00a650"} fontSize={10} marginTop={"0px !important"}>
            Envío gratis
          </Link>
        </VStack>
      </Stack>
    </Stack>
  );
}

export default MercadoShops;
