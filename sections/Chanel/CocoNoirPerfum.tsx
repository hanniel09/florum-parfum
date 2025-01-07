import Image from "apps/website/components/Image.tsx";
import IconShoppingBag from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/shopping-bag.tsx";
import PerfumeDescription from "site/components/ui/PerfumeDesctiption.tsx";

export default function section() {
  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0">
      <div class="flex items-start gap-8">
        <div class="flex-shrink-0 ml-6">
          <Image
            src="https://data.decoassets.com/florum-parfum/6b4b2c7e-8ce3-4526-978b-cf4d916830a1/coconoir-chanel.jpg"
            width={400}
            height={420}
            class="border border-gray-200 rounded"
          />
        </div>

        <div class="w-[2px] bg-gray-300 self-stretch"></div>

        <div class="flex flex-col gap-4 ml-8">
          <h1 class="text-2xl font-bold capitalize">
            Chanel Coco Noir 100ml.
          </h1>
          <p class="text-sm text-gray-600">
          Chanel Coco Noir is a deep, sensual fragrance with a rich oriental character.
          Mysterious and captivating, it represents the darker, seductive side of Chanel's legacy.
          </p>
          <div class="flex flex-col gap-2 mt-4">
            <p class="text-2xl font-semibold text-gray-800">$299.90</p>
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
          title="Chanel Coco Noir"
          paragraph1="Chanel Coco Noir is a bold and alluring fragrance that embodies mystery and elegance.
          Its composition begins with bright top notes of Calabrian bergamot and grapefruit,
          providing a vibrant contrast to the deeper, richer elements. At its core, jasmine and rose intertwine with narcissus,
          delivering a romantic and floral heart that captivates the senses."
          paragraph2="The base is where Coco Noir truly shines, with earthy notes of patchouli, sandalwood,
          and tonka bean creating a velvety, luxurious finish. This fragrance is a statement of sophistication and seduction,
          ideal for evening wear or moments that demand a touch of drama and intrigue. Coco Noir is a tribute to the confident,
          daring spirit of the modern woman who embraces her enigmatic side."
        />
      </div>
    </section>
  );
}
