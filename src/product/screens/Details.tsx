import React from "react";

import { Product } from "../types";
import mock from "../mock";

//Chakra UI
import { HStack, VStack, StackDivider, Stack } from "@chakra-ui/react";

//Components
import Informacion from "../../components/Informacion";
import Vendedor from "../../components/Vendedor";
import MediosDePago from "../../components/MediosDePago";
import ProdImage from "../../components/ProdImage";
import Carrousel from "../../components/Carrousel";
import Tabla from "../../components/Tabla";
import Descripcion from "../../components/Descripcion";
import ProdPromocionados from "../../components/ProdPromocionados";
import MercadoShops from "../../components/MercadoShops";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({ product }) => {
  return (
    <HStack
      backgroundColor={"white"}
      minWidth={"container.md"}
      borderRadius={5}
      boxShadow={"base"}
      minHeight={"100vh"}
      justifyContent={"space-between"}
      alignItems={"start"}
      paddingTop={5}
      paddingBottom={20}
      px={5}
      position="relative"
      w="full"
    >
      {/* Izquierda */}
      <VStack
        spacing={4}
        align="stretch"
        divider={<StackDivider borderColor="blackAlpha.300" />}
        w={{ base: 440, md: 768, lg: 768 }}
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
      >
        <ProdImage />
        <Carrousel />
        <Tabla />
        <Descripcion />
      </VStack>

      {/* Mobile */}
      <VStack
        spacing={4}
        align="stretch"
        divider={<StackDivider borderColor="blackAlpha.300" />}
        w={{ base: 440, md: 768, lg: 768 }}
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
      >
        <ProdImage />
        <Informacion />
        <Vendedor />
        <MediosDePago />
        <ProdPromocionados />
        <Carrousel />
        <Tabla />
        <Descripcion />
      </VStack>

      {/* Derecha */}
      <VStack
        position={"relative"}
        h={"3997px"}
        display={{ base: "none", md: "none", lg: "flex" }}
      >
        <Informacion />
        <Vendedor />
        <MediosDePago />
        <ProdPromocionados />
        <MercadoShops />
      </VStack>
    </HStack>
  );
};

export default DetailsScreen;
