import React from "react";

import { Product } from "../types";
import mock from "../mock";

//Chakra UI
import { HStack, VStack } from "@chakra-ui/react";

//Components
import Informacion from "../../components/Informacion";
import Vendedor from '../../components/Vendedor';
import MediosDePago from '../../components/MediosDePago';
import ProdImage from '../../components/ProdImage'

interface Props {
  product: Product
}

const DetailsScreen: React.FC<Props> = ({ product }) => {
  
  return (
    <HStack
      backgroundColor={"white"}
      minWidth={"container.md"}
      borderRadius={5}
      boxShadow={"base"}
      minHeight={"100vh"}
      justifyContent={'space-between'}
      alignItems={'start'}  
      py={5}  
      px={8}
    >
      {/* Izquierda */}
      <VStack>
        <ProdImage />
      </VStack>
      {/* Derecha */}
      <VStack >
        <Informacion />
        <Vendedor />
        <MediosDePago />
      </VStack>
    </HStack>
  );
};

export default DetailsScreen;
