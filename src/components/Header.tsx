import React from "react";

//Chakra UI
import {
  VStack,
  Text,
  Flex,
  Stack,
  Link,
  StackDivider,
  Icon,
  HStack,
} from "@chakra-ui/react";

//ICONS
import { VscChevronRight } from "react-icons/vsc";

function Header() {
  return (
    <VStack spacing={5} py={2}>
      <Flex justifyContent={"start"} width={"100%"} whiteSpace={"break-spaces"}>
        <Text fontWeight={"bold"} fontSize={14}>
          También puede interesarte:
        </Text>
        <Text fontSize={14}> peluches de sonic</Text>
        <Text fontSize={14}> - peluches de stitch</Text>
        <Text fontSize={14}> - squishmallows</Text>
      </Flex>
      <HStack
        justifyContent={"space-between"}
        width={"100%"}
        whiteSpace={"break-spaces"}
        spacing={3}
      >
        <HStack
          divider={
            <StackDivider
              borderColor="blackAlpha.300"
              height={3}
              alignSelf="center"
            />
          }
        >
          <Text fontSize={14}>Volver al listado</Text>
          <Stack direction={"row"}>
            <Link fontSize={14}>Juegos y juguetes</Link>
            <Icon
              as={VscChevronRight}
              alignSelf="center"
              color="blackAlpha.700"
            />
            <Link fontSize={14}>Peluches</Link>
          </Stack>
        </HStack>
        <HStack
          divider={
            <StackDivider
              borderColor="blackAlpha.300"
              height={3}
              alignSelf="center"
            />
          }
        >
          <Link fontSize={14}>Compartir</Link>
          <Link fontSize={14}>Vender uno igual</Link>
        </HStack>
      </HStack>
    </VStack>
  );
}

export default Header;
