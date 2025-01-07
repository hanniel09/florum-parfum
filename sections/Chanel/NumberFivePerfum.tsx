import Image from "apps/website/components/Image.tsx";
import IconShoppingBag from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/shopping-bag.tsx";
import PerfumeDescription from "site/components/ui/PerfumeDesctiption.tsx";

export default function section() {
  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0">
      <div class="flex items-start gap-8">
        <div class="flex-shrink-0 ml-6">
          <Image
            src="https://data.decoassets.com/florum-parfum/23934cf1-378d-4c7c-a266-8703920c036d/parfum03.jpg"
            width={400}
            height={420}
            class="border border-gray-200 rounded"
          />
        </div>

        <div class="w-[2px] bg-gray-300 self-stretch"></div>

        <div class="flex flex-col gap-4 ml-8">
          <h1 class="text-2xl font-bold capitalize">
            Chanel N°5 100ml
          </h1>
          <p class="text-sm text-gray-600">
            The ultimate symbol of elegance and timeless beauty.
            With its unique floral aldehyde blend, it embodies the essence of 
            femininity and sophistication, remaining a classic for decades.
          </p>
          <div class="flex flex-col gap-2 mt-4">
            <p class="text-2xl font-semibold text-gray-800">$109.90</p>
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
          title="Chanel N°5"
          paragraph1="Chanel N°5 is a legendary fragrance, celebrated for its unmatched sophistication 
            and modernity since its creation in 1921. Its composition opens with fresh aldehydes and
            a hint of citrus, creating a sparkling introduction. The heart reveals an exquisite floral
            bouquet of jasmine, rose, and neroli, capturing the essence of femininity."
          paragraph2="The base adds depth with warm notes of sandalwood, vetiver, and vanilla,
            leaving a long-lasting impression of sensual elegance. This iconic scent transcends trends,
            embodying the spirit of timeless beauty and the innovative vision of Coco Chanel. Whether for a
            glamorous evening or a touch of everyday luxury, Chanel N°5 remains an enduring symbol of sophistication."
        />
      </div>
    </section>
  );
}
