import Image from "apps/website/components/Image.tsx";
import IconShoppingBag from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/shopping-bag.tsx";
import PerfumeDescription from "site/components/ui/PerfumeDesctiption.tsx";

export default function section() {
  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0">
      <div class="flex items-start gap-8">
        <div class="flex-shrink-0 ml-6">
          <Image
            src="https://data.decoassets.com/florum-parfum/e49f6005-a5bf-426d-9269-da573ba3e0ac/westperfumepage.jpg"
            width={400}
            height={420}
            class="border border-gray-200 rounded"
          />
        </div>

        <div class="w-[2px] bg-gray-300 self-stretch"></div>

        <div class="flex flex-col gap-4 ml-8">
          <h1 class="text-2xl font-bold capitalize">
            west perfume the meaning of elegance for Women's 100ml
          </h1>
          <p class="text-sm text-gray-600">
            Sophisticated and timeless, West embodies feminine grace with
            delicate floral notes, a hint of citrus, and a warm, sensual finish.
            Perfect for every refined moment.
          </p>
          <div class="flex flex-col gap-2 mt-4">
            <p class="text-2xl font-semibold text-gray-800">$99.90</p>
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
          title="West Perfume"
          description="West Perfume is a timeless fragrance crafted for women who
          exude confidence and grace. Its opening notes feature a refreshing blend 
          of bergamot and sparkling citrus, evoking a sense of vitality and energy.
          As it unfolds, the heart reveals delicate floral notes of jasmine and rose, symbolizing femininity and sophistication.
          The base is warm and sensual, with hints of amber and sandalwood, leaving a captivating trail that lingers throughout the day.

          Designed for every refined occasion, West is more than just a perfume;
          it's an expression of character. Perfect for romantic evenings, formal events, or everyday luxury,
          this fragrance complements the modern woman who cherishes elegance in every aspect of her life. 
          Encased in a sleek, minimalist bottle, West Perfume is not just a scent—it's a statement."
        />
      </div>
    </section>
  );
}
