import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/user.tsx"
import IconShoppingBag from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/shopping-bag.tsx"
import IconHeart from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/heart.tsx"
import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/search.tsx"
import IconMenu2 from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/menu-2.tsx"
import IconX from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/x.tsx";
import { useSignal } from "@preact/signals";

export default function Section() {
  const isMenuOpen = useSignal(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  return (
    <section class="max-w-[1440px] mx-auto px-6 lg:px-20 3xl:px-0 py-5">
      <div class="flex justify-between bg-fixed y-0 top-0">
        <button
        class="w-6-h6 lg:hidden flex items-center justify-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        >
          {isMenuOpen.value ? (
            <IconX class="w-6 h-6 mt-2 text-gray-700" />
          ): (
            <IconMenu2 class="w-6 h-6 mt-2 text-gray-700" />
           )}
        </button> 
        <h1 class="mt-1 text-[20px] font-[700] text-nowrap lg:text-[48px] lg:font-[700]">Florum parfum</h1>

        <div class="flex items-center y-0 top-0 2xl:p-2">
          <input class="w-full min-w-[180px] placeholder:text-slate-400 
          text-slate-700 text-sm border border-slate-600 rounded-md px-4 py-4
           transition duration-300 ease bg-slate-100 focus:outline-none focus:border-slate-400 
           hover:border-slate-500 shadow-sm focus:shadow focus:transparent mr-5 hidden 2xl:block" placeholder="What are you looking?"
          />
          <IconSearch class="w-6 h-6 mt-2 mr-3 rounded hover:bg-slate-100 hover:rounded focus:outline-none 2xl:hidden" />
          <IconHeart class="w-6 h-6 2xl:w-12 2xl:h-12 mt-2 mr-3 rounded hover:bg-slate-100 hover:rounded focus:outline-none" />
          <IconShoppingBag class="w-6 h-6 2xl:w-12 2xl:h-12 mt-2 mr-3 rounded hover:bg-slate-100 hover:rounded focus:outline-none" />
          <IconUser class="w-6 h-6 2xl:w-12 2xl:h-12 mt-2 rounded hover:bg-slate-100 hover:rounded focus:outline-none" />
        </div>
      </div>

      <nav class={`fixed inset-0 bg-white z-50 transform 
      ${isMenuOpen.value ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 lg:static lg:translate-x-0`}>
        <ul class="flex flex-col lg:flex-row lg:justify-between 2xl:max-w-[1440px]
         w-full lg:w-full 2xl:min-w-[1280px] pt-3 mx-auto text-nowrap">
          <li class="text-base cursor-pointer">Sale</li>
          <li class="text-base cursor-pointer">Gifts</li>
          <li class="text-base cursor-pointer">Men's Perfumary</li>
          <li class="text-base cursor-pointer">Women's Perfumary</li>
          <li class="text-base cursor-pointer">Body Care</li>
          <li class="text-base cursor-pointer">Skincare</li>
          <li class="text-base cursor-pointer">high perfumery for Men's</li> 
          <li class="text-base cursor-pointer mr-[10px]">high perfumery for Women's</li>
        </ul>
      </nav>
    </section>
  )
}