import {
  Box,
  Container,
  HStack,
  Stack,
  Text,
  IconButton,
  Link,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";

import React from "react";

//React Icons
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function SmallWithLogoLeft() {
  return (
    <Box bg={useColorModeValue("gray.700", "gray.200")} color="whiteAlpha.600">
      <Container
        as={Stack}
        maxW={"7xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box w={"auto"}>
          <Text>© 2023 Developed by Martín Lopez</Text>
        </Box>

        <HStack w={"full"}>
          <Text fontSize={12}>
            Esta web NO es el sitio oficial de Mercado Libre, se trata de un
            challenge de Frontend, no es un intento de phishing hacia los
            usuarios que la visitan.
          </Text>
        </HStack>
        <HStack spacing={3}>
          <Link href="https://github.com/martin-bass" isExternal>
            <Tooltip label="GitHub" bg="gray.300" color="black">
              <IconButton
                variant="unstyled"
                size={"lg"}
                aria-label="github"
                icon={<BsGithub size="28px" />}
                color="white"
              />
            </Tooltip>
          </Link>
          <Link
            href="https://www.linkedin.com/in/martinariellopez22187139/"
            isExternal
          >
            <Tooltip label="Linkedin" bg="gray.300" color="black">
              <IconButton
                variant="unstyled"
                size={"lg"}
                aria-label="github"
                icon={<BsLinkedin size="28px" />}
                color="white"
              />
            </Tooltip>
          </Link>
        </HStack>
      </Container>
    </Box>
  );
}
