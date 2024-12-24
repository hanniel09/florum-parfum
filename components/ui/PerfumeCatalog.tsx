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
      image: "https://example.com/image1.jpg",
      price: "R$ 299,90",
    },
    {
      id: 2,
      name: "Perfume B",
      image: "https://example.com/image2.jpg",
      price: "R$ 349,90",
    },
    {
      id: 3,
      name: "Perfume C",
      image: "https://example.com/image3.jpg",
      price: "R$ 399,90",
    },
    {
      id: 4,
      name: "Perfume D",
      image: "https://example.com/image4.jpg",
      price: "R$ 449,90",
    },
    {
      id: 5,
      name: "Perfume E",
      image: "https://example.com/image5.jpg",
      price: "R$ 499,90",
    },
  ];

  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 2xl:px-0 3xl:px-0 py-3">
      <h2 class="text-2xl font-bold mb-6 text-center">The Highest Perfumary✨</h2>
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
