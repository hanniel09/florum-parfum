import Carousel from "site/components/ui/Carousel.tsx";
import PerfumeCatalog from "site/components/ui/PerfumeCatalog.tsx";

export default function Section() {
  // const perfumeImages: string[] = [
  //   "/static/parfums/parfum01.jpg",
  //   "/static/parfums/parfum02.jpg",
  //   "/static/parfums/parfum03.jpg",
  //   "/static/parfums/parfum04.jpg",
  //   "/static/parfums/parfum05.jpg",
  // ];

  return(
    <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 3xl:px-0 py-3">
      {/* <Carousel images={perfumeImages} /> */}
      <PerfumeCatalog />
    </section>
  )
}