import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images} : CarouselProps) => {
  const currentIndex = useSignal(0);

  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length; 
  };

  const prevSlide = () => {
    currentIndex.value =
     (currentIndex.value - 1 + images.length) % images.length;
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div class="relative w-full max-w-[1440px]mx-auto overflow-hidden">
      <div class="flex transition-transform duration-500" style={{transform: `translateX(-${currentIndex.value * 100}%)`}}>
        {images.map((image, idx) => (
          <div key={idx} class="min-w-full">
            <img
              src={image}
              alt={`Parfum ${idx + 1}`}
              class="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
      <button
        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        {"<"}
      </button>
      <button 
       class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
       onClick={nextSlide}
       >
        {">"}
       </button>

       <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
       {images.map((_, idx) => (
          <button
            key={idx}
            class={`w-2 h-2 rounded-full ${
              idx === currentIndex.value
                ? "bg-white"
                : "bg-gray-500"
            }`}
            onClick={() => (currentIndex.value = idx)}
          ></button>
        ))}
       </div>
    </div>
  );
};

export default Carousel;