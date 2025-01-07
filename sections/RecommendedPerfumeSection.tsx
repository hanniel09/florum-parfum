import RecommendedPerfumes from "site/components/ui/RecommendedPerfume.tsx";


export default function section(){
  const recommendedPerfumes = [
    {
      name: "West",
      description: "Elegant and timeless fragrance.",
      price: "$99.99",
      imageUrl: "https://data.decoassets.com/florum-parfum/e49f6005-a5bf-426d-9269-da573ba3e0ac/westperfumepage.jpg",
      url: "/west",
    },
    {
      name: "Chanel Gabrielle",
      description: "A luminous and sophisticated floral fragrance.",
      price: "$79.99",
      imageUrl: "https://data.decoassets.com/florum-parfum/2cec7ca4-5f70-49fa-842c-9fe339194dea/parfum01.jpg",
      url: "/chanel-gabrielle",
    },
    {
      name: "Chanel N°5",
      description: "The ultimate symbol of elegance and timeless beauty.",
      price: "$109.99",
      imageUrl: "https://data.decoassets.com/florum-parfum/23934cf1-378d-4c7c-a266-8703920c036d/parfum03.jpg",
      url: "/chanel-n°5",
    },
    {
      name: "Bleu De Chanel",
      description: "Bleu de Chanel is a sophisticated and versatile fragrance that balances freshness and strength.",
      price: "$199.99",
      imageUrl: "https://data.decoassets.com/florum-parfum/d7985090-bf35-43bd-9131-99e8e36264b4/bleudechanel.jpg",
      url: "/bleu-de-chanel",
    },
    {
      name: "Dior Sauvage",
      description: "Dior Sauvage is a fresh and bold fragrance inspired by wide-open spaces.",
      price: "$349.99",
      imageUrl: "https://data.decoassets.com/florum-parfum/0f08aa49-7b2c-4e8a-92fd-0c76096acaee/dior-sauvage.jpg",
      url: "/sauvage",
    },
  ]

  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 mb-5">
      <div>
        <RecommendedPerfumes perfumes={recommendedPerfumes} />
      </div>
    </section>
  )
}