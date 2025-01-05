import Image from "apps/website/components/Image.tsx";

interface RecommendedPerfume {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  url: string;
}

interface RecommendedCarouselProps {
  perfumes: RecommendedPerfume[];
}

export default function RecommendedCarousel({ perfumes }: RecommendedCarouselProps) {
  return (
    <section class="max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
      <h2 class="text-2xl font-semibold mb-6 text-center">Recommended for You</h2>
      <div class="relative flex items-center justify-center">
        <div class="flex gap-6 w-full justify-center">
          {perfumes.slice(0, 5).map((perfume, index) => (
            <a
              key={index}
              href={perfume.url}
              class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow min-h-[300px]"
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
              <div class="mt-4 flex justify-between items-center">
                <span class="text-lg font-semibold text-gray-800">
                  {perfume.price}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
