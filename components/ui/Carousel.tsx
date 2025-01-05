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
    <div class="relative w-full max-w-[1440px] mx-auto overflow-hidden h-[600px]">
      <div class="flex transition-transform duration-500 h-full"
        style={{transform: `translateX(-${currentIndex.value * 100}%)`,
        }}
        >
        {images.map((image, idx) => (
          <div key={idx} class="min-w-full h-full">
            <img
              src={image}
              alt={`Parfum ${idx + 1}`}
              class="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
      <button
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-75"
        onClick={prevSlide}
      >
        {"<"}
      </button>
      <button 
       class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-75" 
       onClick={nextSlide}
       >
        {">"}
       </button>

       <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
       {images.map((_, idx) => (
          <button
            key={idx}
            class={`w-3 h-3 rounded-full ${
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