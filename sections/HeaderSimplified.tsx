import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/user.tsx";
import IconShoppingBag from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/shopping-bag.tsx";
import IconHeart from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/heart.tsx";
import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/search.tsx";

export default function section() {
  return (
    <section class="max-w-[1440px] w-full mx-auto px-0 lg:px-20 py-3">
      <div class="flex justify-between y-0 top-0">
        <div>
          <a href="https://localhost--florum-parfum.deco.site/">
            <h1 class="mt-1 text-[20px] font-[700] text-zinc-800 text-nowrap lg:text-[48px] lg:font-[700] cursor-pointer">
              Florum Parfum
            </h1>
          </a>
        </div>
        <div class="flex items-center y-0 top-0 2xl:p-2">
          <input
            class="w-full min-w-[180px] placeholder:text-slate-400 
            text-slate-700 text-sm border border-slate-600 rounded-md px-4 py-4
            transition duration-300 ease bg-slate-100 focus:outline-none focus:border-slate-400 
            hover:border-slate-500 shadow-sm focus:shadow focus:transparent mr-5 hidden 2xl:block"
            placeholder="What are you looking?"
          />

          <IconSearch class="w-6 h-6 mt-2 mr-3 rounded hover:bg-slate-100 hover:rounded focus:outline-none 2xl:hidden" />

          <a href="/favorites">
            <IconHeart class="w-6 h-6 2xl:w-8 2xl:h-8 mt-2 mr-3 rounded hover:bg-slate-100 hover:rounded focus:outline-none" />
          </a>

          <a href="/cart">
            <IconShoppingBag class="w-6 h-6 2xl:w-8 2xl:h-8 mt-2 mr-3 rounded hover:bg-slate-100 hover:rounded focus:outline-none" />
          </a>

          <a href="/myuser">
            <IconUser class="w-6 h-6 2xl:w-8 2xl:h-8 mt-2 rounded hover:bg-slate-100 hover:rounded focus:outline-none" />
          </a>
        </div>
      </div>
      <div class="border-t border-gray-400 mt-2" />
    </section>
  );
}
