import { Stack, Text } from "@chakra-ui/react";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Carrouselstyle.css";
// import required modules
import { Navigation } from "swiper";

//Card
import { CarrouselCard } from "../components/Carrousel";

//Data Carrousel
import infoCarrousel from "../product/prodsCarrousel";

function OtrosProdcutos() {
  const infoCards = infoCarrousel.infoCarrousel.pictures;

  return (
    <Stack marginBottom={"30px !important"} marginTop={"30px !important"}>
      <Text fontSize={24}>Quienes vieron este producto también compraron</Text>
      <Stack marginTop={"30px !important"}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={2}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          width={720}
        >
          {infoCards.map((info) => (
            <SwiperSlide key={info.id} className="Swiper">
              <CarrouselCard infoParaElCard={info} infoCards={[]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Stack>
  );
}

export default OtrosProdcutos;
