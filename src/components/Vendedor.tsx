import {
  Stack,
  Text,
  HStack,
  VStack,
  Image,
  StackDivider,
  Link,
} from "@chakra-ui/react";
import React from "react";

import Producto from "../product/mock";

//React-icons
import { GoLocation } from "react-icons/go";

function Vendedor() {
  const { sold_quantity } = Producto.product;

  return (
    <Stack
      border="1px solid"
      borderColor="blackAlpha.300"
      borderRadius="10px"
      padding="1rem"
      w={352}
      px={4}
      py={7}
    >
      <Text fontSize={18}>Información sobre el vendedor</Text>

      <VStack alignItems={"start"} paddingTop={4}>
        <HStack>
          <GoLocation fontSize={16} />
          <Text fontSize={16} lineHeight={"3"}>
            Ubicación
          </Text>
        </HStack>
        <Text
          fontSize={14}
          color={"blackAlpha.600"}
          lineHeight={"3"}
          paddingLeft={6}
        >
          Quilmes, Buenos Aires
        </Text>
        <HStack paddingTop={4}>
          <Image
            src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg"
            paddingTop={2}
          />
          <Text fontSize={16} lineHeight={"shorter"} color={"green.500"}>
            MercadoLíder Platinum
          </Text>
        </HStack>
        <Text
          fontSize={14}
          color={"blackAlpha.600"}
          lineHeight={"shorter"}
          paddingLeft={7}
          marginTop="0px !important"
        >
          ¡Es uno de los mejores del sitio!
        </Text>
      </VStack>
      <HStack paddingTop={7} alignItems="center">
        <Stack height="10px" width="20%" backgroundColor="#fff0f0"></Stack>
        <Stack height="10px" width="20%" backgroundColor="#fff5e8"></Stack>
        <Stack height="10px" width="20%" backgroundColor="#fffcda"></Stack>
        <Stack height="10px" width="20%" backgroundColor="#f1fdd7"></Stack>
        <Stack height="12px" width="20%" backgroundColor="#39b54a"></Stack>
      </HStack>
      <HStack
        paddingTop={4}
        divider={
          <StackDivider
            borderColor="blackAlpha.300"
            height={55}
            alignSelf="center"
          />
        }
      >
        <VStack alignItems={"center"} width={"33.33%"}>
          <Text fontSize={25}>{sold_quantity}</Text>
          <Text
            fontSize={12}
            color={"blackAlpha.700"}
            textAlign={"center"}
            lineHeight={"shorter"}
            marginTop="0px !important"
          >
            Ventas en los últimos 60 dias
          </Text>
        </VStack>
        <VStack alignItems={"center"} width={"33.33%"} paddingTop={2}>
          <Image
            src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg"
            w={30}
          />
          <Text
            fontSize={12}
            color={"blackAlpha.700"}
            textAlign={"center"}
            lineHeight={"shorter"}
          >
            Brinda buena atención
          </Text>
        </VStack>
        <VStack alignItems={"center"} width={"33.33%"} paddingTop={6}>
          <Image
            src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg"
            w={30}
          />
          <Text
            fontSize={12}
            color={"blackAlpha.700"}
            textAlign={"center"}
            lineHeight={"shorter"}
          >
            Despacha sus productos a tiempo
          </Text>
        </VStack>
      </HStack>
      <HStack alignItems={"start"}>
        <Link fontSize={14}>Ver más datos del vendedor</Link>
      </HStack>
    </Stack>
  );
}

export default Vendedor;
