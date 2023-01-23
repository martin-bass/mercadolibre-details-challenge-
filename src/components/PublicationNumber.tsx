import { Flex, HStack, StackDivider, Text, Link } from "@chakra-ui/react";
import React from "react";

function PublicationNumber() {
  return (
    <HStack
      justifyContent={"end"}
      width={"full"}
      paddingTop={4}
      divider={
        <StackDivider
          borderColor="blackAlpha.300"
          height={3}
          alignSelf="center"
        />
      }
    >
      <Flex whiteSpace={"break-spaces"}>
        <Text fontSize={14}>Publicación </Text>
        <Text fontSize={14} fontWeight={"bold"}>
          #814873841
        </Text>
      </Flex>
      <Link fontSize={14}>Denunciar</Link>
    </HStack>
  );
}

export default PublicationNumber;
