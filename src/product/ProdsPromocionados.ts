import { Product } from "./types";

export default {
  get ProdsPromocionados(): Product {
    return {
      pictures: [
        {
          id: "1",
          url: "https://http2.mlstatic.com/D_Q_NP_847155-MLA49843010529_052022-AB.webp",
          title: "Phi Phi Toys Peluche Jurassic World Blue 50 Cm Jw018",
          price: 4995,
          priceBefore: null,
        },
        {
          id: "2",
          url: "https://http2.mlstatic.com/D_Q_NP_2X_721958-MLA48182509028_112021-AB.webp",
          title: "Peluche Musical Baby Shark - 15cm - Daddy Shark",
          price: 5750,
          priceBefore: 8200,
        },
        {
          id: "3",
          url: "https://http2.mlstatic.com/D_Q_NP_2X_928231-MLA50164610457_062022-AB.webp",
          title: "Juguete Cactus Baila Canta Repite Voz Con Luz",
          price: 4990,
          priceBefore: null,
        },
        {
          id: "4",
          url: "https://http2.mlstatic.com/D_Q_NP_2X_986475-MLA50732817710_072022-AB.webp",
          title: "Peluche Muñeco Pokemon",
          price: 2870,
          priceBefore: 4100,
        },
      ],
    };
  },
};
