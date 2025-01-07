import Image from "apps/website/components/Image.tsx";
import IconShoppingBag from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/shopping-bag.tsx";
import PerfumeDescription from "site/components/ui/PerfumeDesctiption.tsx";

export default function section() {
  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0">
      <div class="flex items-start gap-8">
        <div class="flex-shrink-0 ml-6">
          <Image
            src="https://data.decoassets.com/florum-parfum/687191ec-037d-4109-8182-57e8c9ecfd4c/FeraGranita.jpg"
            width={400}
            height={420}
            class="border border-gray-200 rounded"
          />
        </div>

        <div class="w-[2px] bg-gray-300 self-stretch"></div>

        <div class="flex flex-col gap-4 ml-8">
          <h1 class="text-2xl font-bold capitalize">
            Fera Granita Aqua Allegoria 100ml
          </h1>
          <p class="text-sm text-gray-600">
          Fera Granita is a sweet and refreshing fragrance inspired by the vibrant spirit of summer.
          Perfect for those who love fruity and playful scents.
          </p>
          <div class="flex flex-col gap-2 mt-4">
            <p class="text-2xl font-semibold text-gray-800">$169.90</p>
            <div class="mt-2 text-gray-500 text-sm">
              <a href="/shipping" class="block">
                <span class="text-gray-600 font-medium underline">
                  Shipping calculated
                </span>
                &nbsp;at checkout
              </a>
            </div>
            <button class="flex items-center justify-center gap-x-2 px-6 py-2
             bg-green-700 text-white font-medium rounded hover:bg-green-900
             uppercase
             ">
              <IconShoppingBag class="w-6 h-6" />
              Add to Bag
            </button>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <PerfumeDescription
          title="Fera Granita"
          paragraph1="Fera Granita captures the essence of a summer getaway, ]
           blending juicy and sweet notes for a truly uplifting experience.
           It begins with sparkling top notes of grapefruit, mandarin, and a hint of raspberry,
           delivering a fruity burst that immediately delights the senses. 
           The heart is a luscious mix of peach and apricot, reminiscent of a 
           chilled granita dessert, adding a playful and indulgent twist."
          paragraph2="The base is softly grounded with subtle vanilla and white musk, 
          ensuring a long-lasting and comforting finish. Fera Granita is ideal for sunny days and joyful moments, 
          embodying a carefree and cheerful attitude with every spritz."
        />
      </div>
    </section>
  );
}
