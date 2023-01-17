import {
  Stack,
  VStack,
  Image,
  Text,
  Grid,
  Box,
  Flex,
  StackDivider,
  Link,
  GridItem,
} from "@chakra-ui/react";
import React from "react";

//ProdsPromocionados
import ProdsPromocionados from "../product/ProdsPromocionados";
import { ProductPicture } from "../product/types";

function MercadoShops() {
  const prods = ProdsPromocionados.ProdsPromocionados.pictures;

  return (
    <Stack
      //   border="1px solid"
      //   borderColor="blackAlpha.300"
      borderRadius="10px"
      w={352}
      align="stretch"
      bgColor={"#F5F5F5"}
    >
      <VStack bgColor={"#E82E8A"} h={120} borderRadius="5px 5px 0px 0px">
        <Image
          src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/shops-icon.svg"
          pt={3}
          marginBottom={"1px !important"}
        />
        <Text color={"white"} fontSize={16} fontWeight={"bold"} marginTop={'0px !important'}>
          Comprá en tiendas fuera de Mercado Libre
        </Text>
      </VStack>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        {prods.map((prod) => (
          <GridItem margin={"auto"}>
            <Card prod={prod} key={prod.id} />
          </GridItem>
        ))}
      </Grid>
      <Link fontSize={12}>Crea tu Mercado Shop</Link>
    </Stack>
  );
}

type Props = {
  prod: ProductPicture;
};

function Card({ prod }: Props) {
  return (
    <Stack
      w={159}
      h={282}
      display="flex"
      alignItems={"center"}
      bgColor={"#fff"}
      borderRadius="0px 0px 5px 5px"
    >
      <Stack
      //shadow={'xs'}
      >
        <Stack
          h={38}
          bgColor={"#454545"}
          w={"full"}
          p={"8px 12px"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          px={3}
          borderRadius="5px 5px 0px 0px"
        >
          <Text
            color={"white"}
            fontSize={10}
            lineHeight={11}
            fontWeight={"bold"}
          >
            HOLU
          </Text>
        </Stack>
        <VStack
          spacing={1}
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
            <Text color={"#8c8c8c"} fontSize={10} as={"s"}>
              $ {prod.priceBefore}
            </Text>
          )}
          <Text fontSize={14} marginTop={"0px !important"} fontWeight={"s"}>
            $ {prod.price}
          </Text>
          <Link color={"#00a650"} fontSize={10}>
            Envío gratis
          </Link>
        </VStack>
      </Stack>
    </Stack>
  );
}

export default MercadoShops;
