import { h } from "preact";
import Image from "apps/website/components/Image.tsx";

interface Perfume {
  id: number;
  name: string;
  image: string;
  price: string;
  url: string;
}

export default function PerfumeCatalog() {
  const perfumes: Perfume[] = [
    {
      id: 1,
      name: "Chanel Gabrielle",
      image: "https://data.decoassets.com/florum-parfum/2cec7ca4-5f70-49fa-842c-9fe339194dea/parfum01.jpg",
      price: "$79.90",
      url: "/chanel-gabrielle"
    },
    {
      id: 2,
      name: "Wind",
      image: "https://data.decoassets.com/florum-parfum/9af549ad-ef4b-4321-8022-31b55188fa93/parfum02.jpg",
      price: "$69.90",
      url: "/wind"
    },
    {
      id: 3,
      name: "Chanel N°5",
      image: "https://data.decoassets.com/florum-parfum/23934cf1-378d-4c7c-a266-8703920c036d/parfum03.jpg",
      price: "$109.90",
      url: "/chanel-n°5"
    },
    {
      id: 4,
      name: "D&G",
      image: "https://data.decoassets.com/florum-parfum/2f5ad287-feb2-4e05-8bb1-e923028ced5b/parfum04.jpg",
      price: "$99.90",
      url: "/d&g"
    },
    {
      id: 5,
      name: "Floral",
      image: "https://data.decoassets.com/florum-parfum/1f9e3238-edfa-44ff-9f62-c1f5cee2bb1e/parfum05.jpg",
      price: "$119.90",
      url: "/floral"
    },
    {
      id: 6, 
      name: "West",
      image: "https://data.decoassets.com/florum-parfum/e49f6005-a5bf-426d-9269-da573ba3e0ac/westperfumepage.jpg",
      price: "$99.90",
      url: "/west"
    },
    {
      id: 7,
      name: "Bleu de Chanel",
      image: "https://data.decoassets.com/florum-parfum/d7985090-bf35-43bd-9131-99e8e36264b4/bleudechanel.jpg",
      price: "$199.90",
      url: "/bleu-de-chanel"
    },
    {
      id: 8,
      name: "Coco noir Chanel",
      image: "https://data.decoassets.com/florum-parfum/6b4b2c7e-8ce3-4526-978b-cf4d916830a1/coconoir-chanel.jpg",
      price: "$299.90",
      url: "/coco-noir-chanel"
    }, 
    {
      id: 9,
      name: "Fera Granita Aqua Allegoria",
      image: "https://data.decoassets.com/florum-parfum/687191ec-037d-4109-8182-57e8c9ecfd4c/FeraGranita.jpg",
      price: "$169.90",
      url: "/fera-granita"
    },
    {
      id: 10,
      name: "Dior Sauvage",
      image: "https://data.decoassets.com/florum-parfum/0f08aa49-7b2c-4e8a-92fd-0c76096acaee/dior-sauvage.jpg",
      price: "$349.90",
      url: "/sauvage"
    }
  ];

  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 2xl:px-0 3xl:px-0 py-3">
      <h2 class="text-2xl font-bold mb-6 text-center">The Highest of the Perfumary✨</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
        {Array.from({ length: 2 }).flatMap(() =>
          perfumes.map((perfume) => (
            <div key={perfume.id} class="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow flex flex-col hover:scale-110 cursor-pointer">
              <a href={`${perfume.url}`}>
              <Image
                src={perfume.image}
                class="w-full h-48 object-cover mb-4"
                width={800}
                height={1200}
                alt={perfume.name}
              />
              <h3 class="text-lg font-semibold mb-2 h-[48px] overflow-hidden text-ellipsis line-clamp-2">{perfume.name}</h3>
              <p class="text-gray-600 font-semibold mb-[10px] p-1">{perfume.price}</p>
              <button class="mt-auto w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                Buy
              </button>
              </a>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
