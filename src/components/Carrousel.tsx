import { Stack, Text, VStack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styles/Carrouselstyle.css";

// import required modules
import { Navigation } from "swiper";

function Carrousel() {
  return (
    <VStack w={600}>
      <Text fontSize={24} w={"full"}>
        Publicaciones del vendedor
      </Text>
      <Stack w={600} marginTop={"100px !important"}>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </Stack>
    </VStack>
  );
}

export default Carrousel;
