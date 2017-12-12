import {Campaign} from "./_models/campaign";
import {RETAILERS} from "./mock-retailer";

export const CAMPAIGNS: [Campaign] = [
    {
      id: 1,
      title: "Jule tilbud",
      image: "http://2sogne.dk/wp-content/uploads/julemand_400x286.jpg",
      retailer: RETAILERS[0]
    },
    {
      id: 2,
      title: "Jule Sweater spar 50%",
      image: "https://cdn.shopify.com/s/files/1/2154/9805/products/19726906_1351367901636923_496680128_o.jpg",
      retailer: RETAILERS[0]
    },
    {
      id: 3,
      title: "Jule slips",
      image: "http://bpc.h-cdn.co/assets/17/40/980x490/landscape-1507042891-christmas-ties.jpg",
      retailer: RETAILERS[0]
    },
    {
      id: 4,
      title: "Nissehue spar 90%",
      image: "https://www.pegani.dk/resources/product/114/6/1146.jpg",
      retailer: RETAILERS[0]
    }
    ,
    {
      id: 5,
      title: "Lysestage 50%",
      image: "http://cdn2.bigcommerce.com/n-pktq5q/eglhh5/products/7983/images/17490/Traditional-Menorah-Polished-Silvertone__61474.1508280989.451.416.jpg",
      retailer: RETAILERS[2]
    }
    ,
    {
      id: 6,
      title: "Abe - spar 100kr",
      image: "https://images.pricerunner.com/product/image/1614062384/Kay-Bojesen-Abe-20cm-Figur.jpg",
      retailer: RETAILERS[2]
    }
    ,
    {
      id: 7,
      title: "ALT SKAL VÆK!!",
      image: "https://coloursign.dk/c/206-category_default/flytte-status-alt-skal-vaek-og-mm.jpg",
      retailer: RETAILERS[2]
    }
    ,
    {
      id: 8,
      title: "julepynt udsalg",
      image: "https://www.holmegaard.dk/media/1354939/banner_AW17_ANS_Julepynt_996x500px.jpg",
      retailer: RETAILERS[2]
    }
  ]
;
