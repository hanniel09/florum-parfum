import Image from "apps/website/components/Image.tsx";
import IconShoppingBag from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/shopping-bag.tsx";
import PerfumeDescription from "site/components/ui/PerfumeDesctiption.tsx";

export default function section() {
  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0">
      <div class="flex items-start gap-8">
        <div class="flex-shrink-0 ml-6">
          <Image
            src="https://data.decoassets.com/florum-parfum/1f9e3238-edfa-44ff-9f62-c1f5cee2bb1e/parfum05.jpg"
            width={400}
            height={420}
            class="border border-gray-200 rounded"
          />
        </div>

        <div class="w-[2px] bg-gray-300 self-stretch"></div>

        <div class="flex flex-col gap-4 ml-8">
          <h1 class="text-2xl font-bold capitalize">
            Floral 100ml
          </h1>
          <p class="text-sm text-gray-600">
          Floral is a romantic and delicate fragrance that celebrates the timeless beauty of blooming flowers.
          A perfect choice for those who adore elegance and charm.
          </p>
          <div class="flex flex-col gap-2 mt-4">
            <p class="text-2xl font-semibold text-gray-800">$119.90</p>
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
          title="Floral"
          paragraph1="Floral is a captivating symphony of blossoms, designed to evoke
          the essence of a spring garden in full bloom. It begins with bright top notes
          of peony and freesia, offering a fresh and uplifting start. 
          The heart unfolds with rich layers of rose, lily of the valley, 
          and magnolia, enveloping you in a warm and enchanting floral embrace."
          paragraph2="A base of creamy sandalwood and white musk adds depth and sensuality,
          making Floral a versatile and timeless scent. Whether for a special occasion or everyday sophistication, 
          this fragrance enhances the natural beauty and confidence of its wearer."
        />
      </div>
    </section>
  );
}
