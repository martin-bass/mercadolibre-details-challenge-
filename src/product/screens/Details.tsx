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
import Carrousel from '../../components/Carrousel';
import Tabla from '../../components/Tabla';

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
      py={5}
      px={8}
    >
      {/* Izquierda */}
      <VStack
        spacing={4}
        align="stretch"
        divider={<StackDivider borderColor="blackAlpha.300" />}
      >
        <ProdImage />
        <Carrousel />
        <Tabla />
      </VStack>
      {/* Derecha */}
      <VStack>
        <Informacion />
        <Vendedor />
        <MediosDePago />
      </VStack>
    </HStack>
  );
};

export default DetailsScreen;
