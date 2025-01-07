import Image from "apps/website/components/Image.tsx";
import IconShoppingBag from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/shopping-bag.tsx";
import PerfumeDescription from "site/components/ui/PerfumeDesctiption.tsx";

export default function section() {
  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0">
      <div class="flex items-start gap-8">
        <div class="flex-shrink-0 ml-6">
          <Image
            src="https://data.decoassets.com/florum-parfum/0f08aa49-7b2c-4e8a-92fd-0c76096acaee/dior-sauvage.jpg"
            width={400}
            height={420}
            class="border border-gray-200 rounded"
          />
        </div>

        <div class="w-[2px] bg-gray-300 self-stretch"></div>

        <div class="flex flex-col gap-4 ml-8">
          <h1 class="text-2xl font-bold capitalize">
            Dior Sauvage 100ml
          </h1>
          <p class="text-sm text-gray-600">
          Dior Sauvage is a fresh and bold fragrance inspired by wide-open spaces. 
          Its aromatic and woody composition reflects strength, masculinity, and a connection to nature.
          </p>
          <div class="flex flex-col gap-2 mt-4">
            <p class="text-2xl font-semibold text-gray-800">$349.90</p>
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
          title="Dior Sauvage"
          paragraph1="Dior Sauvage captures the essence of raw elegance and untamed masculinity.
           The fragrance opens with a burst of Calabrian bergamot, offering a zesty and vibrant freshness.
           This is complemented by a heart of Sichuan pepper and lavender, 
           adding spicy and aromatic nuances that energize the senses."
          paragraph2="The base is rich and earthy, featuring notes of ambroxan, cedar, and vetiver, 
           which evoke the ruggedness of wild landscapes. Dior Sauvage is a statement of freedom and confidence,
           perfect for the man who dares to be bold and embrace his individuality. 
           Ideal for both day and evening wear, it exudes a timeless and captivating charm."
        />
      </div>
    </section>
  );
}
