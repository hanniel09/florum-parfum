import Image from "apps/website/components/Image.tsx";

export default function section() {
  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0 py-3 relative">
      <div>
        <a href="/west">
          <div class="flex h-[600px] w-full p-4 relative">
            <Image
              src="https://data.decoassets.com/florum-parfum/5a42d215-cab9-4026-8210-026ff7a55ae8/westbanner.jpg"
              class="w-full h-full object-cover"
              width={1440}
              height={600}
            />
          </div>
          <div class="absolute left-[120px] top-[80px] max-h-[400px] cursor-pointer">
            <h2 class="text-[70px] text-zinc-800 leading-10 font-bold p-2">
              West
            </h2>
            <h3 class="text-[40px] text-zinc-800 leading-10 font-bold mt-[10px] p-2">
              The meaning of elegance
            </h3>
          </div>
        </a>
      </div>
    </section>
  );
}
