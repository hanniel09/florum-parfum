import Image from "apps/website/components/Image.tsx";
import IconShoppingBag from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/shopping-bag.tsx";
import PerfumeDescription from "site/components/ui/PerfumeDesctiption.tsx";

export default function section() {
  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0">
      <div class="flex items-start gap-8">
        <div class="flex-shrink-0 ml-6">
          <Image
            src="https://data.decoassets.com/florum-parfum/2f5ad287-feb2-4e05-8bb1-e923028ced5b/parfum04.jpg"
            width={400}
            height={420}
            class="border border-gray-200 rounded"
          />
        </div>

        <div class="w-[2px] bg-gray-300 self-stretch"></div>

        <div class="flex flex-col gap-4 ml-8">
          <h1 class="text-2xl font-bold capitalize">
            D&G 100ml
          </h1>
          <p class="text-sm text-gray-600">
          D&G is a bold and luxurious fragrance that embodies Italian elegance and modern sophistication. 
          Perfect for making a lasting impression.
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
          title="D&G"
          paragraph1="D&G is a celebration of style and charm, blending traditional Italian notes with a contemporary twist.
           It opens with vibrant accents of Sicilian lemon and mandarin, creating an inviting and zesty introduction. 
           The heart is a refined mix of lavender, cardamom, and orange blossom, exuding warmth and confidence."
          paragraph2="The base brings richness and complexity with notes of amber, patchouli, and tonka bean,
           leaving a lingering trail of elegance. D&G is designed for the discerning individual who values class and authenticity,
           making it a perfect companion for both casual and formal occasions."
        />
      </div>
    </section>
  );
}
