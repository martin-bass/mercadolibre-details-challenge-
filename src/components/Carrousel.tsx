import {
  Stack,
  Text,
  VStack,
  Box,
  Image,
  StackDivider,
  Link,
  HStack
} from "@chakra-ui/react";
import React from "react";

import { ProductPicture } from "../product/types";

//Data Carrousel
import infoCarrousel from "../product/prodsCarrousel";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Carrouselstyle.css";
// import required modules
import { Navigation } from "swiper";

interface Props {
  infoCards: ProductPicture[];
  infoParaElCard: ProductPicture;
}

const Carrousel: React.FC = () => {
  const infoCards = infoCarrousel.infoCarrousel.pictures;

  return (
    <VStack w={"full"}>
      <Text fontSize={24} w={"full"}>
        Publicaciones del vendedor
      </Text>
      <Stack w={800} marginTop={"20px !important"}>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          width={780}
          className="mySwiper"
        >
          {infoCards.map((info) => (
            <SwiperSlide key={info.id}>
              <CarrouselCard infoParaElCard={info} infoCards={[]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      <HStack paddingTop={5} alignItems={'start'} w={'full'} paddingLeft={5} marginBottom={'30px !important'}>
        <Link fontSize={14}>Ver más publicaciones del vendedor</Link>
      </HStack>
    </VStack>
  );
};

const CarrouselCard: React.FC<Props> = ({ infoParaElCard }) => {
  return (
    <VStack
      border="1px solid"
      borderColor="blackAlpha.300"
      borderRadius="10px"
      w={220}
      h={345}
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      }}
      divider={
        <StackDivider
          borderColor="blackAlpha.300"
          alignSelf="center"
          w={"full"}
        />
      }
    >
      <Box p={1}>
        <Image src={infoParaElCard.url} objectFit="contain" cursor="pointer" />
      </Box>
      <VStack alignItems={"start"} p={2}>
        <Text fontSize={24}>
          $ {infoParaElCard.price.toLocaleString("de-DE")}
        </Text>
        <Text fontSize={14} textAlign={"start"}>
          {infoParaElCard.title}
        </Text>
      </VStack>
    </VStack>
  );
};

export default Carrousel;
