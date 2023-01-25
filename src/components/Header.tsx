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
        <Text fontWeight={"bold"} fontSize={{ base: 8, sm: 10, md: 14 }}>
          También puede interesarte:
        </Text>
        <Text fontSize={{ base: 8, sm: 10, md: 14 }}> peluches de sonic</Text>
        <Text fontSize={{ base: 8, sm: 10, md: 14 }}>
          {" "}
          - peluches de stitch
        </Text>
        <Text fontSize={{ base: 8, sm: 10, md: 14 }}> - squishmallows</Text>
      </Flex>
      <HStack
        justifyContent={"space-between"}
        width={"100%"}
        whiteSpace={"break-spaces"}
        spacing={3}
      >
        <HStack
          display={{ base: "none", sm: "none", md: "flex" }}
          divider={
            <StackDivider
              borderColor="blackAlpha.300"
              height={3}
              alignSelf="center"
            />
          }
        >
          <Text fontSize={{ base: 8, sm: 10, md: 14 }}>Volver al listado</Text>
          <Stack direction={"row"}>
            <Link fontSize={{ base: 8, sm: 10, md: 14 }}>
              Juegos y juguetes
            </Link>
            <Icon
              as={VscChevronRight}
              alignSelf="center"
              color="blackAlpha.700"
            />
            <Link fontSize={{ base: 8, sm: 10, md: 14 }}>Peluches</Link>
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
