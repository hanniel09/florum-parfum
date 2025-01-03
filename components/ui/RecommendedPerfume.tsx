import Image from "apps/website/components/Image.tsx";

interface RecommendedPerfume {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

interface RecommendedCarouselProps {
  perfumes: RecommendedPerfume[];
}

export default function RecommendedCarousel(
  { perfumes }: RecommendedCarouselProps,
) {
  return (
    <section class="max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
      <h2 class="text-2xl font-semibold">Recommended for You</h2>
      <div class="overflow-x-auto">
        <div class="flex gap-6">
          {perfumes.map((perfume, index) => (
            <div
              key={index}
              class="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <Image
                src={perfume.imageUrl}
                alt={perfume.name}
                width={300}
                height={300}
                class="rounded-md mb-4"
              />
              <h3 class="text-lg font-bold text-gray-700">{perfume.name}</h3>
              <p class="text-sm text-gray-600 mt-2">{perfume.description}</p>
              <div class="mt-4 flex jusitfy-between items-center">
                <span class="text-lg font-semibold text-gray-800">
                  {perfume.price}
                </span>
                <button class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
