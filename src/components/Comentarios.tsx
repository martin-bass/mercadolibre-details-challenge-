import {
  VStack,
  Text,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Icon,
  IconButton,
  Box,
  StackDivider,
  Stack,
  Link,
} from "@chakra-ui/react";
import React from "react";

import { Opiniones } from "../product/types";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiFillStar, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

const opiniones: Opiniones[] = [
  {
    id: 1,
    fecha: "06 jul. 2022",
    opinion:
      "Es tal cual la imagen de lo que se ofrece. Mi hija tiene varios y son todos hermosos. Es una marca que jamás decepciona.",
  },
  {
    id: 2,
    fecha: "22 ago. 2022",
    opinion: "Tal como se ve en la imagen. Muy bueno.",
  },
  {
    id: 3,
    fecha: "13 oct. 2022",
    opinion: "Hermoso en peluche. Buena calidad y terminaciones prolijas.",
  },
  {
    id: 4,
    fecha: "09 dic. 2022",
    opinion:
      "Es una hermosura , tal cual como esta en la foto. Es hermoso , tierno y muy lindo de muy buena calidad.",
  },
];

export type Props = {
  opinion: Opiniones;
};

function Comentarios() {
  return (
    <VStack alignItems={"start"}>
      <HStack spacing={5}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            color={"#3483fa"}
            bgColor={"#E2EEFB"}
            borderRadius={"40px"}
            fontSize={14}
            w={"120px"}
            h={"32px"}
            px={22}
          >
            Ordenar
          </MenuButton>
          <MenuList w={"120px"}>
            <MenuItem fontSize={14}>Más útiles</MenuItem>
            <MenuItem fontSize={14}>Más recientes</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            color={"#3483fa"}
            bgColor={"#E2EEFB"}
            borderRadius={"40px"}
            fontSize={14}
            h={"32px"}
            px={22}
          >
            Calificación
          </MenuButton>
          <MenuList fontSize={18}>
            <MenuItem>
              5 <Icon as={AiFillStar} paddingLeft={1} />
            </MenuItem>
            <MenuItem>
              4 <Icon as={AiFillStar} paddingLeft={1} />
            </MenuItem>
            <MenuItem>
              3 <Icon as={AiFillStar} paddingLeft={1} />
            </MenuItem>
            <MenuItem>
              2 <Icon as={AiFillStar} paddingLeft={1} />
            </MenuItem>
            <MenuItem>
              1 <Icon as={AiFillStar} paddingLeft={1} />
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <Stack
        divider={
          <StackDivider
            borderColor="blackAlpha.100"
            alignSelf="center"
            w={"full"}
          />
        }
      >
        {opiniones.map((opinion) => (
          <Opinion key={opinion.id} opinion={opinion} />
        ))}
      </Stack>
      <Link fontSize={14}>Mostrar todas las opiniones</Link>
    </VStack>
  );
}

function Opinion({ opinion }: Props) {
  return (
    <VStack alignItems={"start"} marginTop={"30px !important"} w={"full"}>
      <HStack display={"flex"} justifyContent={"space-between"} w={"full"}>
        <HStack spacing={0.5}>
          <AiFillStar color="3483fa" size={14} />
          <AiFillStar color="3483fa" size={14} />
          <AiFillStar color="3483fa" size={14} />
          <AiFillStar color="3483fa" size={14} />
          <AiFillStar color="3483fa" size={14} />
        </HStack>
        <Box w={"auto"}>
          <Text fontSize={12} color={"blackAlpha.600"}>
            {opinion.fecha}
          </Text>
        </Box>
      </HStack>
      <Text fontSize={16} marginTop={"8px !important"}>
        {opinion.opinion}
      </Text>
      <HStack
        marginTop={"12px !important"}
        marginBottom={"24px !important"}
        w={"full"}
      >
        <HStack w={"full"}>
          <Button
            padding={"0px 11px"}
            h="32px"
            w="92"
            borderRadius={"40px"}
            fontSize={12}
            color={"blackAlpha.600"}
            variant="outline"
            rightIcon={<AiOutlineLike fontSize={18} />}
          >
            Es útil
          </Button>
          <IconButton
            h="32px"
            w="92"
            borderRadius={"full"}
            fontSize={18}
            color={"blackAlpha.600"}
            variant="outline"
            icon={<AiOutlineDislike />}
            aria-label={"unlike"}
          />
        </HStack>
        <IconButton
          icon={<BsThreeDotsVertical />}
          aria-label={"menu"}
          fontSize={18}
          color={"blackAlpha.500"}
          variant="outline"
          border={"none"}
        />
      </HStack>
    </VStack>
  );
}

export default Comentarios;
