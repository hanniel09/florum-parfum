import Image from "apps/website/components/Image.tsx";
import IconShoppingBag from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/shopping-bag.tsx";
import PerfumeDescription from "site/components/ui/PerfumeDesctiption.tsx";

export default function section() {
  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0">
      <div class="flex items-start gap-8">
        <div class="flex-shrink-0 ml-6">
          <Image
            src="https://data.decoassets.com/florum-parfum/2cec7ca4-5f70-49fa-842c-9fe339194dea/parfum01.jpg"
            width={400}
            height={420}
            class="border border-gray-200 rounded"
          />
        </div>

        <div class="w-[2px] bg-gray-300 self-stretch"></div>

        <div class="flex flex-col gap-4 ml-8">
          <h1 class="text-2xl font-bold capitalize">
            Chanel Gabrielle 100ml
          </h1>
          <p class="text-sm text-gray-600">
            A luminous and sophisticated floral fragrance that captures the
            essence of elegance and freedom.
          </p>
          <div class="flex flex-col gap-2 mt-4">
            <p class="text-2xl font-semibold text-gray-800">$79.90</p>
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
          title="Chanel Gabrielle"
          paragraph1="Chanel Gabrielle is a celebration of femininity and individuality, 
            crafted with a bouquet of exquisite white flowers. At its heart, jasmine, ylang-ylang,
            orange blossom, and tuberose come together to create a symphony of radiant florals.
            The top notes offer a subtle citrusy brightness, while the base lingers with warm,
            creamy notes, adding depth and sensuality."
          paragraph2="Inspired by the bold and passionate nature of Gabrielle Chanel, 
            this fragrance exudes confidence and grace. It is more than a scent;
            it’s a statement for those who dare to shine their own light,
            making it the perfect companion for any occasion that calls for elegance and allure."
        />
      </div>
    </section>
  );
}
