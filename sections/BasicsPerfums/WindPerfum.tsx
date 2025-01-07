import Image from "apps/website/components/Image.tsx";
import IconShoppingBag from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/shopping-bag.tsx";
import PerfumeDescription from "site/components/ui/PerfumeDesctiption.tsx";

export default function section() {
  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0">
      <div class="flex items-start gap-8">
        <div class="flex-shrink-0 ml-6">
          <Image
            src="https://data.decoassets.com/florum-parfum/9af549ad-ef4b-4321-8022-31b55188fa93/parfum02.jpg"
            width={400}
            height={420}
            class="border border-gray-200 rounded"
          />
        </div>

        <div class="w-[2px] bg-gray-300 self-stretch"></div>

        <div class="flex flex-col gap-4 ml-8">
          <h1 class="text-2xl font-bold capitalize">
            Wind 100ml
          </h1>
          <p class="text-sm text-gray-600">
          Wind is a fresh and invigorating fragrance inspired by the gentle breeze of open landscapes.
          Perfect for those who seek freedom and vitality.
          </p>
          <div class="flex flex-col gap-2 mt-4">
            <p class="text-2xl font-semibold text-gray-800">$69.90</p>
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
          title="Wind"
          paragraph1="Wind is a harmonious blend of freshness and energy, evoking the feeling of a cool breeze on a sunny day.
          It opens with crisp citrus notes of bergamot and lime, awakening the senses with a vibrant burst.
          The heart reveals a subtle floral bouquet of neroli and jasmine, bringing balance and elegance to the composition."
          paragraph2="The base is grounded with soft cedarwood and musk, creating a lasting
          impression of understated sophistication. Wind is ideal for daily wear,
          offering a refreshing and uplifting aura that lingers throughout the day."
        />
      </div>
    </section>
  );
}
