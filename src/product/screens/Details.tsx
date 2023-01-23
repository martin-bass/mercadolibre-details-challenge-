import React from "react";

import { Product } from "../types";
import mock from "../mock";

//Chakra UI
import { HStack, VStack, StackDivider } from "@chakra-ui/react";

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
    >
      {/* Izquierda */}
      <VStack
        spacing={4}
        align="stretch"
        divider={<StackDivider borderColor="blackAlpha.300" />}
        w={768}
      >
        <ProdImage />
        <Carrousel />
        <Tabla />
        <Descripcion />
      </VStack>
      {/* Derecha */}
      <VStack >
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
