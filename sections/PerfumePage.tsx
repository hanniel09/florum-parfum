import RecommendedCarousel from "site/components/ui/RecommendedPerfume.tsx";


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
      url: "/west",
    },
    {
      name: "West",
      description: "Elegant and timeless fragrance.",
      price: "$99.99",
      imageUrl: "https://data.decoassets.com/florum-parfum/e49f6005-a5bf-426d-9269-da573ba3e0ac/westperfumepage.jpg",
      url: "/west",
    },
    {
      name: "West",
      description: "Elegant and timeless fragrance.",
      price: "$99.99",
      imageUrl: "https://data.decoassets.com/florum-parfum/e49f6005-a5bf-426d-9269-da573ba3e0ac/westperfumepage.jpg",
      url: "/west",
    },
    {
      name: "West",
      description: "Elegant and timeless fragrance.",
      price: "$99.99",
      imageUrl: "https://data.decoassets.com/florum-parfum/e49f6005-a5bf-426d-9269-da573ba3e0ac/westperfumepage.jpg",
      url: "/west",
    },
  ]

  return (
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 mb-5">
      <div>
        <RecommendedCarousel perfumes={recommendedPerfumes} />
      </div>
    </section>
  )
}