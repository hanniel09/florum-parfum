import Image from "apps/website/components/Image.tsx";

export default function section() {
  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0 py-3">
      <div class="flex h-[600px] w-full p-4">
        <Image 
        src="https://data.decoassets.com/florum-parfum/5a42d215-cab9-4026-8210-026ff7a55ae8/westbanner.jpg"
        class="w-full h-full object-cover"
        width={1440}
        height={600}
        />
      </div>
    </section>
  );
}