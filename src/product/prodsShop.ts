import { Product } from "./types";

export default {
  get infoMercadoShop(): Product {
    return {
      pictures: [
        {
          id: "1",
          url: "https://http2.mlstatic.com/D_Q_NP_2X_987106-MLA46470406610_062021-AB.webp",
          title: "Peluche De Perro Magenta Blue Clues & You! 16 Cm - Just Play",
          price: 6749,
          priceBefore: null,
          tienda: "Larix Toys",
        },
        {
          id: "2",
          url: "https://http2.mlstatic.com/D_Q_NP_2X_771377-MLA46294157300_062021-AB.webp",
          title: "Hipopótamo Peluche Gigante 80cm Suave Grande Abrazar Violeta",
          price: 10116,
          priceBefore: 15176,
          tienda: "Infancenter + que juguetes",
        },
        {
          id: "3",
          url: "https://http2.mlstatic.com/D_Q_NP_2X_980366-MLA49854564784_052022-AB.webp",
          title: "Oso De Peluche Mediano 50cm Teddy Bear Super Relleno Oscuro",
          price: 4996,
          priceBefore: null,
          tienda: "Valecostas",
        },
        {
          id: "4",
          url: "https://http2.mlstatic.com/D_Q_NP_2X_949697-MLA49474456906_032022-AB.webp",
          title: "Muñeco George Pig Peppa Pig New Toys 1049",
          price: 4499,
          priceBefore: 6199,
          tienda: "Peluches Dashee",
        },
      ],
    };
  },
};
