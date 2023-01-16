import React from "react";

//Chakra UI
import {
  Container,
  Stack,
  Box,
  HStack,
  Image,
  Text,
  Input,
  Icon,
  StackDivider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
} from "@chakra-ui/react";

//ICONS
import { AiOutlineSearch } from "react-icons/ai";
import { SlBell } from "react-icons/sl";
import { HiOutlineUserCircle, HiOutlineMapPin } from "react-icons/hi2";
import { BiChevronDown } from "react-icons/bi";
import { BsCart } from "react-icons/bs";

//LOGO
import logo from "../assets/logo.png";
import disney from "../assets/disney.jpg";

const itemsDelMenu: string[] = [
  "Vehículos",
  "Inmuebles",
  "Supermercado",
  "Tecnología",
  "Hogar y Muebles",
  "Electrodomésticos",
  "Herramientas",
  "Construcción",
  "Deportes y Fitness",
  "Accesorios para Vehículos",
  "Moda",
  "Juegos y Jueguetes",
  "Bebés",
  "Belleza y Cuidado Personal",
  "Salud y Equipamiento Médico",
  "Industrias y Oficina",
  "Agro",
  "Productos Sustentables",
  "Servicios",
  "Más Vendidos",
  "Tiendas Oficiales",
  "Ver más Categorías",
];

function NavBar() {
  return (
    <Box backgroundColor="primary.500" boxShadow="sm" paddingY={1.5}>
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Stack>
          <HStack
            direction={"row"}
            spacing={12}
            justifyContent={"space-between"}
          >
            <Image src={logo} objectFit="contain" width={32} />
            <HStack flex={1}>
              <Stack
                alignItems="center"
                backgroundColor="white"
                borderRadius={"sm"}
                boxShadow="lg"
                direction={"row"}
                divider={<StackDivider />}
                maxWidth={600}
                padding={2}
                width={"100%"}
                marginLeft={7}
              >
                <Input
                  paddingX={2}
                  variant="unstyled"
                  placeholder="Buscar productos, marcas y más..."
                />
                <Icon
                  as={AiOutlineSearch}
                  color="gray.400"
                  height={5}
                  width={5}
                  _hover={{ cursor: "pointer" }}
                />
              </Stack>
              <HStack paddingLeft={12}>
                <Image src={disney} width={80} />
              </HStack>
            </HStack>
          </HStack>

          <HStack
            spacing={12}
            display="flex"
            alignItems={"baseline"}
            id="stackInferior"
          >
            <Stack direction={"row"} fontSize="sm">
              <Icon as={HiOutlineMapPin} boxSize={6} marginTop={2} />
              <Box>
                <Text fontSize={"smaller"} color={"blackAlpha.600"}>
                  Enviar a Goku
                </Text>
                <Text fontSize={"sm"} color={"blackAlpha.800"}>
                  Calle Falsa 123
                </Text>
              </Box>
            </Stack>
            <HStack
              fontSize={"14px"}
              spacing={4}
              color={"blackAlpha.600"}
              paddingLeft={6}
            >
              <Flex>
                <Menu
                  //autoSelect={false}
                  // boundary={'scrollParent'}
                  // preventOverflow={false}
                  //flip={false}
                >
                  <MenuButton
                    as={Button}
                    rightIcon={<BiChevronDown />}
                    variant="unstyled"
                    fontSize={"14px"}
                    fontWeight={"normal"}
                    display="flex"
                    alignItems="center"
                    transition="all 0.1s"
                  >
                    Categorías
                  </MenuButton>
                  <MenuList
                    backgroundColor={"blackAlpha.800"}
                    color={"white"}
                    width={72}
                  >
                    {itemsDelMenu.map((item) => (
                      <MenuItem
                        _hover={{ bg: "secondary.500" }}
                        key={item}
                        _focus={{ bg: "secondary.500" }}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </Flex>
              <HStack spacing={5}>
                <Text>Ofertas</Text>
                <Text>Historial</Text>
                <Text>Supermercado</Text>
                <Text>Moda</Text>
                <Text>Vender</Text>
                <Text>Ayuda</Text>
              </HStack>
            </HStack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"baseline"}
              spacing={4}
              color={"blackAlpha.800"}
              paddingLeft={4}
            >
              <HStack
                spacing={3}
                paddingLeft={16}
                d={"flex"}
                alignItems={"baseline"}
              >
                <HStack d={"flex"} align={"baseline"}>
                  <Icon as={HiOutlineUserCircle} boxSize={6} marginTop="auto" />
                  <Text fontSize={"14px"} marginLeft={0}>
                    Goku
                  </Text>
                </HStack>

                <HStack spacing={3}>
                  <Text fontSize={"14px"} width={"100%"}>
                    Mis compras
                  </Text>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<BiChevronDown color={"grey"} />}
                      variant="unstyled"
                      fontSize={"14px"}
                      fontWeight={"normal"}
                      d="flex"
                      alignItems="center"
                      py={0}
                    >
                      Favoritos
                    </MenuButton>
                  </Menu>
                </HStack>
              </HStack>
              <HStack
                spacing={5}
                color={"blackAlpha.800"}
                d={"flex"}
                alignItems={"baseline"}
                paddingLeft={4}
              >
                <Icon as={SlBell} boxSize={5} _hover={{ cursor: "pointer" }} />
                <Icon as={BsCart} boxSize={5} _hover={{ cursor: "pointer" }} />
              </HStack>
            </Stack>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}

export default NavBar;
