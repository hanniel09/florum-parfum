import { h } from "preact";
import Image from "apps/website/components/Image.tsx";

interface Perfume {
  id: number;
  name: string;
  image: string;
  price: string;
}

export default function PerfumeCatalog() {
  const perfumes: Perfume[] = [
    {
      id: 1,
      name: "Perfume A",
      image: "https://data.decoassets.com/florum-parfum/2cec7ca4-5f70-49fa-842c-9fe339194dea/parfum01.jpg",
      price: "R$ 299,90",
    },
    {
      id: 2,
      name: "Perfume B",
      image: "https://data.decoassets.com/florum-parfum/9af549ad-ef4b-4321-8022-31b55188fa93/parfum02.jpg",
      price: "R$ 349,90",
    },
    {
      id: 3,
      name: "Perfume C",
      image: "https://data.decoassets.com/florum-parfum/23934cf1-378d-4c7c-a266-8703920c036d/parfum03.jpg",
      price: "R$ 399,90",
    },
    {
      id: 4,
      name: "Perfume D",
      image: "https://data.decoassets.com/florum-parfum/2f5ad287-feb2-4e05-8bb1-e923028ced5b/parfum04.jpg",
      price: "R$ 449,90",
    },
    {
      id: 5,
      name: "Perfume E",
      image: "https://data.decoassets.com/florum-parfum/1f9e3238-edfa-44ff-9f62-c1f5cee2bb1e/parfum05.jpg",
      price: "R$ 499,90",
    },
  ];

  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 2xl:px-0 3xl:px-0 py-3">
      <h2 class="text-2xl font-bold mb-6 text-center">The Highest of the Perfumary✨</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Array.from({ length: 3 }).flatMap(() =>
          perfumes.map((perfume) => (
            <div key={perfume.id} class="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <Image
                src={perfume.image}
                class="w-full h-48 object-cover mb-4"
                width={800}
                height={1200}
                alt={perfume.name}
              />
              <h3 class="text-lg font-semibold mb-2">{perfume.name}</h3>
              <p class="text-gray-600">{perfume.price}</p>
              <button class="mt-4 w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                Buy
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
