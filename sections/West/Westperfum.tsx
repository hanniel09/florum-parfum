import Image from "apps/website/components/Image.tsx";

export default function section(){
  return(
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0 py-3">
      <div>
        <div>
          <Image 
           src="https://data.decoassets.com/florum-parfum/277dcbfa-6512-459d-ab41-d1af77118045/westperfume.jpg"
           width={300}
           height={400}
           class="flex border-1 border-gray-200"
          />
          
        </div>
      </div>
    </section>
  )
}