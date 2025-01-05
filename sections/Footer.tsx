import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-instagram.tsx"
import IconBrandFacebook from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-facebook.tsx"

export default function Section() {
  return (
    <section class="max-w-[1920px] w-full bg-gray-200">
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
                <div class="rounded-md p-2 hover:bg-white cursor-pointer">
                  <IconBrandFacebook class="w-6 h-6" />
                </div>
              </li>
              <li>
                <div class="rounded-md p-2 hover:bg-white cursor-pointer">
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
