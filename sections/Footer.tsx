import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-instagram.tsx"
import IconBrandFacebook from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-facebook.tsx"

export default function Section() {
  return (
    <section class="max-w-[1920px] w-full mt-[40px]">
      <div class="w-full mx-auto px-6 lg:px-20 3xl:px-0 py-3 bg-green-800">
        <div class="max-w-[480px] w-full h-[420px] mx-auto px-5 lg:px-20 3xl:px-0 py-[40px] bg-gray-100 rounded mt-[40px] mb-[40px]">
          <h1 class="flex top-[-50px] justify-center text-nowrap font-bold uppercase mx-auto ">
            be kind to your senses and the planet
          </h1>
          <p class="text-pretty mt-[20px]">
            Florum Parfum was created with one purpose: ELEGANCE. Elegance
            inspired by nature. Elegance for the planet. Elegance for every
            individual. Florum Parfum infuses sophistication into each
            fragrance, crafting unique, high-quality scents while embracing
            sustainability and giving back to the environment in meaningful
            ways.
          </p>
          <button class="flex justify-center mt-[20px] max-w-[160px] w-full py-2 px-2 bg-green-700 text-white rounded
           hover:bg-green-900 transition-colors uppercase mx-auto">
            Learn More
          </button>
        </div>
      </div>
      <div class="max-w-[1620px] w-full mx-auto px-6 lg:px-20 3xl:px-0 py-3">
        <div class="flex justify-around">
          <div>
            <div class="font-bold">CUSTOMER SUPPORT</div>
            <ul class="flex flex-col pt-3 mx-auto text-nowrap">
              <li class="cursor-pointer hover:underline">Account</li>
              <li class="cursor-pointer hover:underline">Contact Us</li>
              <li class="cursor-pointer hover:underline">FAQ's</li>
              <li class="cursor-pointer hover:underline">Shipping Policy</li>
              <li class="cursor-pointer hover:underline">Return & Refund Policy</li>
              <li class="cursor-pointer hover:underline">Terms of Service</li>
            </ul>
          </div>
          <div>
          <div class="font-bold">SHOP</div>
            <ul class="flex flex-col pt-3 mx-auto text-nowrap">
              <li class="cursor-pointer hover:underline">Shop all</li>
              <li class="cursor-pointer hover:underline">Best Sellers</li>
              <li class="cursor-pointer hover:underline">Fragrance</li>
              <li class="cursor-pointer hover:underline">Body Care</li>
              <li class="cursor-pointer hover:underline">Highest Perfumary for men's</li>
              <li class="cursor-pointer hover:underline">Highest Perfumary for women's</li>
              <li class="cursor-pointer hover:underline">Special Offer: On Sale</li>
              <li class="cursor-pointer hover:underline">Gifts</li>
            </ul>
          </div>
          <div>
          <div class="font-bold">ABOUT US</div>
            <ul class="flex flex-col pt-3 mx-auto text-nowrap">
              <li class="cursor-pointer hover:underline">Our Story</li>
              <li class="cursor-pointer hover:underline">Become a Florum</li>
              <li class="cursor-pointer hover:underline">Sustainability</li>
              <li class="cursor-pointer hover:underline">Our Brands</li>
              <li class="cursor-pointer hover:underline">Find Stores Near You</li>
            </ul>
          </div>
          <div>
          <div class="font-bold">Payaments</div>
            <ul class="flex flex-col pt-3 mx-auto text-nowrap">
              <li class="cursor-pointer hover:underline">American Express</li>
              <li class="cursor-pointer hover:underline">Mastercard</li>
              <li class="cursor-pointer hover:underline">Visa</li>
              <li class="cursor-pointer hover:underline">Dinner's club</li>
            </ul>
          </div>
          <div>
          <div class="font-bold">Social Media</div>
            <ul class="flex flex-row pt-3 mx-auto text-nowrap">
              <li>
                <div class="border border-gray-200 rounded-md p-2 hover:bg-gray-200 cursor-pointer">
                  <IconBrandFacebook class="w-6 h-6" />
                </div>
              </li>
              <li>
                <div class="border border-gray-200 rounded-md p-2 hover:bg-gray-200 cursor-pointer">
                  <IconBrandInstagram class="w-6 h-6" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-center mt-2">
          <p class="text-xs">© 2024 Florum Parfum. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
