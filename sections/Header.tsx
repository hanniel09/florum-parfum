import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/user.tsx"
import IconShoppingBag from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/shopping-bag.tsx"
import IconHeart from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/heart.tsx"
import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/search.tsx"

export default function Section() {
  return (
    <section class="max-w-[1440px] mx-auto px-6 lg:px-20 3xl:px-0 py-5">
      <div class="flex justify-between bg-fixed">
        <h1 class="text-[48px] font-[700]">Florum parfum</h1>
        <div class="flex w-96 p-3 mr-5">
          <input class="w-full min-w-[180px] placeholder:text-slate-400 
          text-slate-700 text-sm border border-slate-600 rounded-md px-4 py-4
           transition duration-300 ease bg-slate-100 focus:outline-none focus:border-slate-400 
           hover:border-slate-500 shadow-sm focus:shadow focus:transparent mr-5 hidden 2xl:block" placeholder="What are you looking?"
          />
          <IconSearch class="w-12 h-12 mt-2 mr-3 rounded hover:bg-slate-100 hover:rounded focus:outline-none 2xl:hidden" />
          <IconHeart class="w-12 h-12 mt-2 mr-3 rounded hover:bg-slate-100 hover:rounded focus:outline-none" />
          <IconShoppingBag class="w-12 h-12 mt-2 mr-3 rounded hover:bg-slate-100 hover:rounded focus:outline-none" />
          <IconUser class="w-12 h-12 mt-2 rounded hover:bg-slate-100 hover:rounded focus:outline-none" />
        </div>
      </div>
      <nav class="mt-5 flex justify-center">
        <ul class="flex space-x-9 max-w-[1400px] w-full justify-between pt-3 mx-auto">
          <li class="text-base cursor-pointer">Sale</li>
          <li class="text-base cursor-pointer">Gifts</li>
          <li class="text-base cursor-pointer">Men's Perfumary</li>
          <li class="text-base cursor-pointer">Women's Perfumary</li>
          <li class="text-base cursor-pointer">Body Care</li>
          <li class="text-base cursor-pointer">Skincare</li>
          <li class="text-base cursor-pointer">high perfumery for Men's</li> 
          <li class="text-base cursor-pointer">high perfumery for Women's</li>
        </ul>
      </nav>
    </section>
  )
}