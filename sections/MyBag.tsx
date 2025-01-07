import Image from "apps/website/components/Image.tsx";

interface Purchases {
  id: number;
  perfumeName: string;
  price: string;
  imageUrl: string;
  perfumeUrl: string;
  quantity: string;
  totalPrice: string;
}

export default function section() {
  const purchases: Purchases[] = [
    {
      id: 1,
      perfumeName: "Dior Sauvage",
      price: "$349.90",
      imageUrl:
        "https://data.decoassets.com/florum-parfum/0f08aa49-7b2c-4e8a-92fd-0c76096acaee/dior-sauvage.jpg",
      perfumeUrl: "https://localhost--florum-parfum.deco.site/sauvage",
      quantity: "1",
      totalPrice: "$349.90",
    },
    {
      id: 2,
      perfumeName: "Bleu de Chanel",
      price: "$199.90",
      imageUrl:
        "https://data.decoassets.com/florum-parfum/d7985090-bf35-43bd-9131-99e8e36264b4/bleudechanel.jpg",
      perfumeUrl: "https://localhost--florum-parfum.deco.site/bleu-de-chanel",
      quantity: "3",
      totalPrice: "$599.70",
    },
    {
      id: 3,
      perfumeName: "Chanel Coco Noir",
      price: "$299.90",
      imageUrl:
        "https://data.decoassets.com/florum-parfum/6b4b2c7e-8ce3-4526-978b-cf4d916830a1/coconoir-chanel.jpg",
      perfumeUrl: "https://localhost--florum-parfum.deco.site/coco-noir-chanel",
      quantity: "1",
      totalPrice: "$599.80",
    },
    {
      id: 4,
      perfumeName: "Fera Granita Aqua Allegoria",
      price: "$169.90",
      imageUrl:
        "https://data.decoassets.com/florum-parfum/687191ec-037d-4109-8182-57e8c9ecfd4c/FeraGranita.jpg",
      perfumeUrl: "https://localhost--florum-parfum.deco.site/fera-granita",
      quantity: "1",
      totalPrice: "$169.90",
    },
  ];

  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 py-6">
      <div class="flex justify-center">
        <h1 class="text-[28px] font-semibold">
          Items added to bag
        </h1>
      </div>
      <div class="max-w-[1200px] mx-auto px-6 flex flex-col justify-center ">
        <div class="flex flex-col justify-center my-3 space-y-5 ">
          {purchases.slice(0, 5).map((purchases, index) => (
            <a
              key={index}
              href={purchases.perfumeUrl}
              class="flex justify-around items-center bg-white rounded-lg shadow-md hover:shadow-lg 
               transition-shadow min-h-[140px] min-w-[780px] hover:scale-110"
            >
              <Image
                src={purchases.imageUrl}
                alt={purchases.perfumeName}
                width={70}
                height={70}
                class="rounded-md mb-4 ml-3"
              />

              <div class="flex justify-between flex-1 items-center ml-4 mr-2">
                <h1 class="text-[16px] font-semibold w-[250px]">
                  {purchases.perfumeName}
                </h1>
                <p class="text-[16px]  font-semibold w-[120px] text-center ">
                  {purchases.price}
                </p>
                <p class="text-[16px] font-semibold w-[80px] text-center">
                  Units: {purchases.quantity}
                </p>
                <p class="text-[16px] font-semibold w-[150px] text-center">
                  Total price: {purchases.totalPrice}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div class="flex justify-end items-center max-w-[1200px] ">
        <p class="text-[16px] font-semibold">Total at bag: $1,719.30</p>
        <button class="bg-green-700 text-white mx-4 p-4 rounded shadow-lg hover:bg-green-800">
          Complete the purchase 
        </button>
      </div>
    </section>
  );
}
