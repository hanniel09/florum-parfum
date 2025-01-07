import Image from "apps/website/components/Image.tsx";
import IconShoppingBag from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/shopping-bag.tsx";
import PerfumeDescription from "site/components/ui/PerfumeDesctiption.tsx";

export default function section() {
  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0">
      <div class="flex items-start gap-8">
        <div class="flex-shrink-0 ml-6">
          <Image
            src="https://data.decoassets.com/florum-parfum/d7985090-bf35-43bd-9131-99e8e36264b4/bleudechanel.jpg"
            width={400}
            height={420}
            class="border border-gray-200 rounded"
          />
        </div>

        <div class="w-[2px] bg-gray-300 self-stretch"></div>

        <div class="flex flex-col gap-4 ml-8">
          <h1 class="text-2xl font-bold capitalize">
            Bleu De Chanel 100ml.
          </h1>
          <p class="text-sm text-gray-600">
          Bleu de Chanel is a sophisticated and versatile fragrance that balances freshness and strength.
          Its blend of citrus, woods, and spices embodies the freedom and elegance of the modern man.
          </p>
          <div class="flex flex-col gap-2 mt-4">
            <p class="text-2xl font-semibold text-gray-800">$199.90</p>
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
          title="Bleu De Chanel"
          paragraph1="Bleu de Chanel is a refined fragrance crafted for the man who values independence and sophistication.
          It opens with a burst of fresh citrus notes, including lemon and grapefruit, invigorating the senses with an energetic start.
          The heart combines spicy ginger and aromatic elements like nutmeg and mint, adding depth and intrigue."
          paragraph2="The base is grounded in warm, masculine notes of cedarwood, sandalwood, and smoky incense,
          offering a rich and enduring finish. Bleu de Chanel transitions seamlessly from day to night,
          making it a versatile choice for any occasion. Bold and charismatic, 
          it reflects the essence of strength, confidence, and the timeless elegance of Chanel."
        />
      </div>
    </section>
  );
}
